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
		return jwt.sign( { _id: user._id, name: user.name.first }, process.env.JWT_SECRET, signOptions);
	},

	verify: (request) => {
		var token = request.get("Authorization");
 		if(token != null)
 		{
 			token = token.split(" ")[1];
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