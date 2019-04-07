var keystone = require('keystone');
var auth = require('../auth');

var bcrypt = require('bcrypt');

var sendgrid = require('@sendgrid/mail');	// See: https://github.com/sendgrid/sendgrid-nodejs/blob/master/packages/mail/USE_CASES.md
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {

	signup: (req, res, next) => {
		var body = req.body;

		if(!body['username'] || !body['password'] || !body['confirm'] || !body['uid'] || !body['email'] || !body['name']) {
			res.send({success: false, error: "Input error"});
		} else if(isNaN(body['uid'])) {
			res.send({success: false, error: "UID must be a number"});
		} else if(body['password'] != body['confirm']) {
			res.send({success: false, error: "Passwords do not match"});
		} else {
			var query = { uid: body['uid'] };	// Their UID must be in the database
			var User = keystone.list('User');
			User.model.updateOne(query, { $setOnInsert: {	// Insert if UID not present, DO NOTHING if it is
										name: body['name'],
										username: body['username'].toLowerCase(), password: body['password'],
										email: body['email'].toLowerCase(), paid: false
										} },
										{upsert: true},
						function(err, writeResult) {
							if(err) throw err;
							console.log(writeResult);
							if(writeResult.upserted)
							{
								res.send({success: true});
							} else if(writeResult.nModified == 0) {
								res.send({success: false, error: 'Already signed up'});
							} else {
								res.send({success: false, error: 'Unable to sign up'});
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

		const user = "christopherwlam@gmail.com";

		sendgrid.send({
			to: 'christopherwlam@gmail.com',
			from: 'passwordreset@uclacki.org',
			subject: 'Your password reset',
			text: 'Follow the link to reset your password, or ignore the email if this was not you. ',
			html: '<p>Hello,<br><br>You have requested a password reset for ' + user + '. Please follow the link below to proceed. If this was not you, ignore this email.</p>',
		});
		res.end();
		return;

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
				if(member != null && member['username']) {
					const token = auth.sign(member, {});	// TODO: use another signature for password reset
					User.model.updateOne(query, { resetPasswordToken: token }, function(err, updated) {
						if(err) throw err;

						let transporter = nodemailer.createTransport({
							host: 'smtp.sendgrid.'
						})
					});
				}
			});
		}
	}
}
