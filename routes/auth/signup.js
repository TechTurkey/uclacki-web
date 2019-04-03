var keystone = require('keystone');
var auth = require('../auth');

var bcrypt = require('bcrypt');

var nodemailer = require('nodemailer');

module.exports = {

	signup: (req, res, next) => {
		var body = req.body;

		if(!body['username'] || !body['password'] || !body['confirm'] || !body['uid'] || !body['email']) {
			res.send({success: false, error: "Input error"});
		} else if(isNaN(body['uid'])) {
			res.send({success: false, error: "UID must be a number"});
		} else if(body['password'] != body['confirm']) {
			res.send({success: false, error: "Passwords do not match"});
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
						member.username = body['username'].toLowerCase();
						member.password = body['password'];
						member.email = body['email'].toLowerCase();
						member.paid = false;
						member.save(function(err) {
							if(err) throw err;
							else res.send({success: true});
						});
					}
				} else {
					res.send({success: false, error: 'UID not found. If you have submitted a member application, please try again soon.'});
				}
			});
		}
 	},

 	changePassword: (req, res, next) => {
 		var body = req.body;

 		if(!res.locals.user)
 		{
 			res.send({success: false, error: 'Must be logged in to change password'});
 		} else if(!body['oldPassword'] || !body['confirm'] || !body['newPassword'] || !body['uid']) {
				res.send({success: false, error: "Input error"});
		} else if(body['oldPassword'] != body['confirm']) {
			res.send({success: false, error: "Passwords must match"});
		} else {
			var query = { username: mongoSanitize(body['username']), uid: mongoSanitize(body['uid']) };	// Their UID must be in the database
			var User = keystone.list('User');
			User.model.findOne(query, function(err, member) {
				if(err) throw err;
				if(member != null) {
					member._.password.compare(body['password'], function (err, matched) {
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
 	},

 	forgotPassword: (req, res, next) => {
 		var body = req.body;
 		if(!body['email']) {
				res.send({success: false, error: "Input error"});
		} else {
			// update User model with resetPassword
			// nodemailtrain to send
			var query = { email: body['email'] };
			var User = keystone.list('User');
			User.model.findOne(query, function(err, member) {
				if(err) throw err;
				if(member != null) {
					if(member['username'])
					{
						const token = auth.sign(member, {});
						User.model.updateOne(query, { resetPasswordToken: token }, function(err, updated) {
							if(err) throw err;


						});
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
						member.username = body['username'].toLowerCase();
						member.password = body['password'];
						member.email = body['email'].toLowerCase();
						member.paid = false;
						member.save(function(err) {
							if(err) throw err;
							else res.send({success: true});
						});
					}
				}
			});
		}
 	}
 }
