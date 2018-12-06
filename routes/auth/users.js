var keystone = require('keystone');

module.exports = {

	all: (req, res, next) => {
		if(!res.locals.user)
		{
			res.json({success: false, error: "Must be logged in"});
		} else {
		 	const User = keystone.list('User');
		 	User.model
		 		.find()
		 		.select('-password')
		 		//.populate('events')
		 		.exec(function (err, results) {
					if (err) throw err;
					res.json(results);
		 		});
	 	}
	},

	profile: (req, res, next) => {
		if(res.locals.user)
		{
		 	const User = keystone.list('User');
		 	User.model
		 		.findOne( { _id: res.locals.user['_id'] } )
		 		.select('-password')
		 		// .populate('events')
		 		.exec(function (err, result) {
					if (err) throw err;
					// result.populateRelated('myEvents', function(err) {
					// 	if(err) throw err;
					// 	res.json(result.toObject());
					// });
					res.json(result);
		 		});
		} else {
			res.send({success: false, error: "Must be logged in"});
		}
	}
}