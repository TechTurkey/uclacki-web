'use strict';

const jwt = require('jsonwebtoken');
var keystone = require('keystone');

var signOptions = {
 expiresIn:  "12h",
 algorithm:  "RS256"
};
var verifyOptions = {
	expiresIn: '12h',
	algorithm: ["RS256"]
}


module.exports = {
	sign: (user, $options) => {
		return jwt.sign( { _id: user._id, name: user.name.first + " " + user.name.last, email: user.email, image: user.profileImage && user.profileImage.url, paid: user.paid }, process.env.JWT_SECRET, signOptions);
	},

	verify: (request) => {
		// var token = request.get("Authorization");
		var token = request.cookies ? request.cookies['jwt'] : null;
 		if(token != null)
 		{
 			// console.log("Token ", token);
 			// token = token.split(" ")[1];	// We're not sending {'Authorization': token} anymore, don't need to split
 			return jwt.verify(token, process.env.JWT_PUBLIC, function(err, decoded) {
 				if(err)
 					return {error: err};
 				else {
 					return decoded;
 				}
 			});
 		}
	}
}