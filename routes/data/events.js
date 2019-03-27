var keystone = require('keystone');

const ObjectId = require('mongodb').ObjectId;



module.exports = {

	events: (req, res, next) => {
		var query;
		var projection;
	 	if(res.locals.user)	// authorized
	 	{
	 		query = { 'state': 'published'};
	 		projection = { };
	 	} else {
	 		query = { 'state': 'published'};
	 		projection = { attendees: 0, location: 0, slots_remaining: 0 };
	 	}
	 	const Event = keystone.list('Event');
	 	Event.model
	 	.find(query, projection)
	 	.populate("event_chair", "name")	// 2 unnecessary queries? I don't want to keep track of names when we're already tracking id's
	 	.populate("attendees", "name")
	 	.sort('start_time')
	 	.exec(function (err, results) {
	 		if (err) throw err;
	 		res.json(results);
	 	});
	 },

	 event: (req, res, next) => {
	 	var query;
	 	var projection;
	 	var date = req.body['date'] ? req.body['date'] : new Date();
	 	if(res.locals.user)	// authorized
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
	 	if(res.locals.user)	// authorized
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
	 	if(!res.locals.user || !res.locals.user._id || !ObjectId.isValid(res.locals.user._id)) {
	 		// Attempt to sign up using the anonymous form
	 		if(!req.body['name'] || !req.body['number']) {
	 			res.send({success: false, error: "Must be logged in or provide name and number"});
	 			return;
	 		}
	 		const date = req.body['date'] ? req.body['date'] : new Date();
	 		const eventQuery = { _id: req.body['event_id'], 'end_time' : { $gte: date }, 'state': 'published', signup_type: 'all',
				$where: 'this.event_slots==0 || this.attendees.length < this.event_slots'};	// Javascript expressions on each document is awfully slow


				const Event = keystone.list('Event');
				Event.model.updateOne(eventQuery,
					{$push: {'anonAttendees.name': req.body['name'], 'anonAttendees.number': req.body['number'] } },
					function(err, updateRes) {
						if(err) throw err;
						if(updateRes.n == 0)
						{
							res.send({success:false, error: "Event error (full, not found, or must be signed in)."});
						}
						else {
							res.send({success:true});
						}
					});
			// res.send({success: false, error: "You must be logged in."});
		}
		else {
			if(!req.body['event_id'] || !ObjectId.isValid(req.body['event_id'])) {
				res.send({success: false, error: "Invalid event."});
			} else {
				var date = req.body['date'] ? req.body['date'] : new Date();
	 			const eventQuery = { _id: req.body['event_id'], 'end_time' : { $gte: date }, 'state': 'published', //'signup_type': { $ne: 'off' },
	 				$where: 'this.event_slots==0 || this.attendees.length + this.anonAttendees.name.length < this.event_slots'};	// Javascript expressions on each document is awfully slow
	 			var success;

	 			// Find and modify, using event.slots_remaining virtual?

	 			const Event = keystone.list('Event');
	 			Event.model.updateOne(eventQuery,
	 				{$addToSet: {attendees: res.locals.user._id}},
	 				function(err, updateRes) {
	 					if(err) throw err;
	 					console.log(updateRes);
	 					if(updateRes.n == 0)
	 					{
	 						res.send({success:false, error: "Event error (full or not found)."});
	 					}
	 					else if(updateRes.nModified == 0)
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
	 								else
	 									res.send({success: true});
	 							});
	 					}
	 				});
	 		}
	 	}
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
	 			Event.model.updateOne(eventQuery,
	 				{$pull: {attendees: res.locals.user._id}},
	 				function(err, pullRes) {
	 					if(err) throw err;
	 					if(pullRes.n == 0)
	 					{
	 						res.send({success:false, error: "Event not found."});
	 					}
	 					else if(pullRes.nModified == 0)
	 					{
	 						res.send({success:false, error: "User not signed up."})
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
	 								else
	 									res.send({success: true});
	 							});
	 					}
	 				});



	 		}
	 	}
	 }
}