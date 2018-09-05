var keystone = require('keystone');

module.exports = {
	events: (req, res, next) => {
	 	const Event = keystone.list('Event');
	 	Event.model
	 		.find()
	 		.where('state', 'published')
	 		.sort('-publishedDate')
	 		.exec(function (err, results) {
				if (err) throw err;
				res.json(results);
	 		});
	 	},

	 event: (req, res, next) => {
	 	const Event = keystone.list('Event');
	 	Event.model
	 		.find( { 'title': req.params.title, 'end_time': { $gte: new Date() }} )
	 		.sort('-publishedDate')
	 		.exec(function (err, results) {
				if (err) throw err;
				res.json(results);
	 		});
		 }

 }