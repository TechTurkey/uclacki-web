'use strict';

const jwt = require('jsonwebtoken');
const fs = require('fs');
var keystone = require('keystone');

var signOptions = {
 expiresIn:  "12h",
 //algorithm:  "RS256"
};

module.exports = {

	signin: (req, res, next) => {
		console.log(process.env.JWT_SECRET);
		jwt.sign({
			_id: 2
			}, process.env.JWT_SECRET, signOptions, function(err, token) {
				console.log(token);
				res.send({token: token});
			});
 		//res.send("failed");
 	},

 	login: (req, res, next) => {
 		var token = req.get("Authorization");
 		if(token != null)
 		{
 			token = token.split(" ")[1];
 			jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
 				if(err)
 					res.send(err);
 				else {
 					res.send(decoded);
 				}
 			});
 		}
 	}
 }