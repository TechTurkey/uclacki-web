var keystone = require('keystone');
var auth = require('../auth');

var bcrypt = require('bcrypt');

module.exports = {

	signup: (req, res, next) => {
		var body = req.body;

		if(!body['username'] || !body['password'] || !body['uid'] || !body['email']) {
			res.send({success: false, error: "Input error"});
		} else if(isNaN(body['uid'])) {
			res.send({success: false, error: "UID must be a number"});
		} else {
			var query = { uid: body['uid'] };	// Their UID must be in the database
			var User = keystone.list('User');
			User.model.findOne(query, function(err, member) {
				if(err) throw err;
				console.log(member);
				if(member != null) {
					if(member['username'])
					{
						res.send({success: false, error: 'Already has account under ' + member['username']});
					} else {
					/*	const update = { 'username': body['username'], 'password': body['password'], 'email': body['email'], 'paid': false };
						User.model.updateOne(query, {$set: update}, function(err, updateRes) {
							if(err) throw err;
							if(updateRes.nModified==0) {
								res.send({success: false, error: 'could not add account'});
							} else {
								res.send({success: true});
							}
						});
					*/
						member.username = body['username'];
						member.password = body['password'];
						member.email = body['email'];
						member.paid = false;
						member.save(function(err) {
							if(err) throw err;
							else res.send({success: true});
						});
					}
				} else {
					res.send({success: false, error: 'uid not found'});
				}
			});
		}
 	},

 	changePassword: (req, res, next) => {
 		var body = req.body;

 		if(!res.locals.user)
 		{
 			res.send({success: false, error: 'Must be logged in to change password'});
 		} else if(!body['oldPassword'] || !body['newPassword'] || !body['uid']) {
				res.send({success: false, error: "Input error"});
		} else {
			var query = { username: mongoSanitize(body['username']), uid: mongoSanitize(body['uid']) };	// Their UID must be in the database
			var User = keystone.list('User');
			User.model.findOne(query, function(err, member) {
				if(err) throw err;
				if(member != null) {
					bcrypt.compare(body['password'], member.password, function(err, matched) {
						if(err) throw err;
						if(matched) {
							User.model.updateOne(query, {$set: {password: newPassword}}, function(err, updateRes) {
								if(err) throw err;
								if(updateRes.nModified==0)
								{
									res.send({success: false, error: "Could not update password"});
								} else {
									res.send({success: true});
								}
							})
						} else {
							res.send({success: false});
						}
					});
				} else {
					res.send({success: false, error: 'Account not found'});
				}
			});
		}
 	}
 }