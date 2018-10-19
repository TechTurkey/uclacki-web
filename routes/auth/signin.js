var keystone = require('keystone');
var auth = require('../auth');

var mongoSanitize = require('express-mongo-sanitize');
var bcrypt = require('bcrypt');

module.exports = {

	signin: (req, res, next) => {
		var body = req.body;

		if(!body.username || !body.password) {
			res.send({error: "Must send username and password"});
		} else {
			var query = {$or: [ mongoSanitize.sanitize({username: body['username'].toLowerCase()}), mongoSanitize.sanitize({email: body['username'].toLowerCase()}) ] };	// "/^" + body['username'] + "$/i"			const User = keystone.list('User');
			var User = keystone.list('User');
			User.model.findOne(query, {email: 1, name: 1, password: 1, profileImage: 1}, function(err, member) {
				if(err) throw err;
				if(member != null) {
					bcrypt.compare(body['password'], member.password, function(err, matched) {
						if(err) throw err;
						if(matched) {
							const token = auth.sign(member, {});
							res.send({success: true, result: token});
						} else {
							res.send({success: false, error: "Wrong password"});
						}
					});
				} else {
					res.send({success: false, error: 'not found'});
				}
			});
		}
 	},

 	checkIn: (req, res, next) => {
 		var verify = auth.verify(req);
 		// if(verify !== undefined && verify['_id']) return next();	// Would be good for restricting access completely, but we'll just let each route handle authorization
 		// return res.status(403).json({ 'error': 'no access'});
 		if(verify !== undefined && verify['_id']) res.locals.user = verify;
 		next();
 	}
 }