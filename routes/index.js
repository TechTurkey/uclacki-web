var keystone = require('keystone');
const express = require('express');
const path = require('path');
var importRoutes = keystone.importer(__dirname);
var fs = require('fs');



var routes = {
	auth: importRoutes('./auth'),
	data: importRoutes('./data')
}

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {

	keystoneApp.post('/signin', routes.auth.signin.signin);
	// keystoneApp.post('/login', routes.auth.signin.login);

	keystoneApp.get('*', routes.auth.signin.checkIn);
	keystoneApp.post('*', routes.auth.signin.checkIn);




	keystoneApp.get('/api/events', routes.data.events.events);
	keystoneApp.get('/api/events/:title', routes.data.events.event);
	keystoneApp.post('/api/events/signup', routes.data.events.signup);
	keystoneApp.post('/api/events/cancel', routes.data.events.cancel);

	keystoneApp.get('/api/articles', (req, res) => {
		const Article = keystone.list('Article');
		Article.model
				.find()
				.exec(function(err, results) {
					// keystone.populateRelated(results, 'comments', function(err) {
					// 	if(err) throw err;
					// 	res.json(results);
					// });
					if(err) throw err;
					res.json(results);
				});
	});

	keystoneApp.get('/api/articles/:id', (req, res) => {
		const Article = keystone.list('Article');
		Article.model
				.findOne( { _id: req.params.id} )
				.exec(function(err, result) {
					result.populateRelated('comments', function(err, populated) {
						if(err) throw err;
						res.json(result.toObject());	// For some reason, logging "result" has comments, but sending "result" doesn't
						// Has to do with Mongoose's doc.toString() or something
					});
				});
	});


	keystoneApp.get('/api/users', (req, res, next) => {
	 	const User = keystone.list('User');
	 	User.model
	 		.find()
	 		.select('-password')
	 		//.populate('events')
	 		.exec(function (err, results) {
				if (err) throw err;
				res.json(results);
	 		});
	 });
	keystoneApp.get('/api/users/:id', (req, res, next) => {
	 	const User = keystone.list('User');
	 	User.model
	 		.findOne( { _id: req.params.id } )
	 		.select('-password')
	 		// .populate('events')
	 		.exec(function (err, result) {
				if (err) throw err;
				result.populateRelated('myEvents', function(err) {
					if(err) throw err;
					res.json(result.toObject());
				});
	 		});
	 });

	keystoneApp.get('/articleimages/:name', (req, res) => {
		let filePath = './static/articleimages/' + encodeURI(req.params.name);
		
		if(fs.existsSync(filePath)) {
			res.writeHead(200, {
				'Content-Type': 'image/jpg'
			});

			var readStream = fs.createReadStream(filePath);
			readStream.on('close', () => { res.end() });
			readStream.pipe(res);
		} else {
			res.writeHead(404);
			res.send({ error: 'Not found' });
		}
	});
	// keystoneApp.use('/articleimages/:name', express.static(__dirname + "../static/articleimages"));




	// Next request handler
	const handle = nextApp.getRequestHandler();
	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};

