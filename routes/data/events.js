var keystone = require('keystone');

const ObjectId = require('mongodb').ObjectId;

var sendgrid = require('@sendgrid/mail');	// See: https://github.com/sendgrid/sendgrid-nodejs/blob/master/packages/mail/USE_CASES.md
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const receiver = "uclackiservice@gmail.com";

module.exports = {

	events: (req, res, next) => {
		var query;
		var projection;
	 	if(res.locals.user && res.locals.user.paid)	// authorized (TODO: abstract this away to a local var "authorized" or smth)
	 	{
	 		query = { 'state': 'published' };
	 		projection = { };
	 	} else {
	 		query = { 'state': 'published' };
	 		projection = { attendees: 0, location: 0, slots_remaining: 0 };
	 	}
	 	const Event = keystone.list('Event');
	 	Event.model
	 	.find(query, projection)
	 	.lean()	// returns Plain Old Javascript Object (skips hydrating). Only downside are no virtuals ('slots_reamining' is only one)
	 	.populate("event_chair", "name")	// 2 unnecessary queries? I don't want to keep track of names when we're already tracking id's
	 	.populate("attendees", "name")
	 	.sort('start_time')
	 	.exec(function (err, results) {
	 		if (err) throw err;
	 		res.status(200).json(results);
	 	});
	 },

	 event: (req, res, next) => {
	 	var query;
	 	var projection;
	 	if(res.locals.user && res.locals.user.paid)	// authorized
	 	{
	 		query = { 'title': req.params.title, 'state': 'published'};
	 		projection = { };
	 	} else {
	 		query = { 'title': req.params.title, 'state': 'published'};
	 		projection = { attendees: 0, location: 0 };
	 	}

	 	const Event = keystone.list('Event');
	 	Event.model
	 	.find( query, projection )
	 	.lean()
	 	.populate("event_chair", "name")
	 	.populate("attendees", "name")
	 	.sort('start_time')
	 	.exec(function (err, results) {
	 		if (err) throw err;
	 		res.json(results);
	 	});
	 },

	 available: (req, res, next) => {	// could be parameterized on date
		var query;
		var projection;
		const now = new Date();
	 	if(res.locals.user && res.locals.user.paid)	// authorized
	 	{
	 		query = { 'state': 'published', 'end_time': { $gt: now } };
	 		projection = { };
	 	} else {
	 		query = { 'state': 'published', 'end_time': { $gt: now } };
	 		projection = { attendees: 0, location: 0, slots_remaining: 0 };
	 	}
	 	const Event = keystone.list('Event');
	 	Event.model
	 	.find(query, projection)
	 	.lean()
	 	.populate("event_chair", "name")	// 2 unnecessary queries? I don't want to keep track of names when we're already tracking id's
	 	.populate("attendees", "name")
	 	.sort('start_time')
	 	.exec(function (err, results) {
	 		if (err) throw err;
	 		res.json(results);
	 	});
	 },

	 signup: (req, res, next) => {
	 	// console.log(res.locals.user);
	 	console.log(req.body);
	 	if(!res.locals.user || !res.locals.user._id || !ObjectId.isValid(res.locals.user._id)) {
 			res.send({success: false, error: "Must be logged in"});
 			return;
 		}
		if(!req.body['event_id'] || !ObjectId.isValid(req.body['event_id'])) {
			res.send({success: false, error: "Invalid event."});
			return;
		}
		let date = req.body['date'] ? req.body['date'] : new Date();
 		let eventQuery = { _id: req.body['event_id'], 'end_time' : { $gte: date }, 'state': 'published', signup_type: { $ne: 'off' },
 			$where: 'this.event_slots==0 || this.attendees.length + this.anonAttendees.name.length < this.event_slots'};	// Javascript expressions on each document is awfully slow
		if(!res.locals.user.paid) eventQuery.signup_type = 'all';	// If not dues paid, can only signup for 'all'-type events
 		var success;

 		const projection = { title: 1, attendees: 1 };	// just for sendgrid mail

 		// Find and modify, using event.slots_remaining virtual?
		const Event = keystone.list('Event');
		Event.model.findOneAndUpdate(eventQuery,
 			{$addToSet: {attendees: res.locals.user._id}},
 			{projection: projection})
			.lean()
			.exec(function(err, doc) {
 				if(err) throw err;

 				if(!doc)
 				{
 					res.send({success:false, error: "Event error (full or not found)."});
 				}
 				else if(doc.attendees.find(a => a==res.locals.user._id))	// need == because .includes() uses === and attendees is an array of objects (_id is a string RIP)
 				{
 					res.send({success: false, error: "User is already signed up."})
 				}
 				else
 				{
 					const User = keystone.list('User');
 					User.model.updateOne({_id: res.locals.user._id},
 						{$addToSet: {events: req.body['event_id']}},
 						function(err, updateRes) {
 							if(err) throw err;
 							if(updateRes.matchedCount == 0)
 								res.send({success: true, warning: "Unable to add event to user."});
 							else {
 								sendgrid.send({
 									to: receiver,
 									from: "Events <events@uclacki.org>",
 									subject: "[Event Signup] " + doc.title,
 									text: res.locals.user.name + " has signed up for the event " + doc.title,
 								});
 								res.send({success: true});
 							}
 						});
 				}
 			});
	 },
	 

	 cancel: (req, res, next) => {
	 	if(!res.locals.user || !res.locals.user._id || !ObjectId.isValid(res.locals.user._id))
	 		res.send({success: false, error: "You must be logged in."});
	 	else {
	 		if(!req.body['event_id'] || !ObjectId.isValid(req.body['event_id'])) {
	 			res.send({success: false, error: "Invalid event."});
	 		} else {
	 			const eventQuery = { _id: req.body['event_id']};
	 			const Event = keystone.list('Event');
		 		const projection = { title: 1, attendees: 1 };	// just for sendgrid mail
	 			Event.model.findOneAndUpdate(eventQuery,
		 			{$pull: {attendees: res.locals.user._id}},
		 			{projection: projection})
					.lean()
					.exec(function(err, doc) {
		 				if(err) throw err;

		 				if(!doc)
		 				{
		 					res.send({success:false, error: "Event error (not found)."});
		 				}
		 				else
		 				{
	 						const User = keystone.list('User');
	 						User.model.updateOne({_id: res.locals.user._id},
	 							{$pull: {events: req.body['event_id']}},
	 							function(err, pullRes) {
	 								if(err) throw err;
	 								if(pullRes.nModified == 0)
	 									res.send({success: true, warning: "Unable to remove event from user."});
	 								else {
	 									sendgrid.send({
		 									to: receiver,
		 									from: "Events <events@uclacki.org>",
		 									subject: "[Event Signup] " + doc.title,
		 									text: res.locals.user.name + " has dropped the event " + doc.title,
		 								});
	 									res.send({success: true});
	 								}
	 							});
	 					}
	 				});
	 		}
	 	}
	 }
}