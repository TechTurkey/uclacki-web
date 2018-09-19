var keystone = require('keystone');
const express = require('express');
const path = require('path');
var importRoutes = keystone.importer(__dirname);
var mongoSanitize = require('express-mongo-sanitize');
var fs = require('fs');
const cors = require('cors');


var routes = {
	auth: importRoutes('./auth'),
	data: importRoutes('./data')
}

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {

	keystoneApp.use(cors());
	keystoneApp.use(mongoSanitize());

	keystoneApp.post('/signin', routes.auth.signin.signin);
	// keystoneApp.post('/login', routes.auth.signin.login);

	keystoneApp.get('*', routes.auth.signin.checkIn);
	keystoneApp.post('*', routes.auth.signin.checkIn);


	keystoneApp.post('/api/signup', routes.auth.signup.signup);
	keystoneApp.post('/api/changePassword', routes.auth.signup.changePassword);

	keystoneApp.get('/api/events', routes.data.events.events);
	keystoneApp.get('/api/events/:title', routes.data.events.event);
	keystoneApp.post('/api/events/signup', routes.data.events.signup);
	keystoneApp.post('/api/events/cancel', routes.data.events.cancel);

	keystoneApp.get('/api/articles', (req, res) => {
		const Article = keystone.list('Article');
		Article.model
				.find()
				.populate("author", "name")
				.exec(function(err, results) {
					// keystone.populateRelated(results, 'comments', function(err) {
					// 	if(err) throw err;
					// 	res.json(results);
					// });
					if(err) throw err;
					res.json(results);
				});
	});

	keystoneApp.get('/api/articles/:title', (req, res) => {
		const Article = keystone.list('Article');
		Article.model
				.findOne( { state: 'published', title: req.params.title} )
				.populate("author", "name")
				.exec(function(err, result) {
					if(err) throw err;
					if(!result)
					{
						res.send({error: "Not Found"});
					} else {
						result.populateRelated('comments', function(err, populated) {
							if(err) throw err;
							res.json(result.toObject());	// For some reason, logging "result" has comments, but sending "result" doesn't
							// Has to do with Mongoose's doc.toString() or something
						});
					}
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
	// keystoneApp.get('/api/users/:id', (req, res, next) => {
	//  	const User = keystone.list('User');
	//  	User.model
	//  		.findOne( { _id: req.params.id } )
	//  		.select('-password')
	//  		// .populate('events')
	//  		.exec(function (err, result) {
	// 			if (err) throw err;
	// 			result.populateRelated('myEvents', function(err) {
	// 				if(err) throw err;
	// 				res.json(result.toObject());
	// 			});
	//  		});
	//  });
	keystoneApp.get('/api/profile', (req, res, next) => {
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
	});

	// keystoneApp.get('/articleimages/:name', (req, res) => {
	// 	let filePath = './static/articleimages/' + encodeURI(req.params.name);
		
	// 	if(fs.existsSync(filePath)) {
	// 		res.writeHead(200, {
	// 			'Content-Type': 'image/jpg'
	// 		});

	// 		var readStream = fs.createReadStream(filePath);
	// 		readStream.on('close', () => { res.end() });
	// 		readStream.pipe(res);
	// 	} else {
	// 		res.writeHead(404);
	// 		res.send({ error: 'Not found' });
	// 	}
	// });

	// Clean URL masking on server-side
	// CLient side can mask using <Link as={`/article/${props.title}`} href={`/article?title=${props.title}`}>
	keystoneApp.get('/article/:title', (req, res) => {
		const actualPage="/article";
		const queryParams= {title: req.params.title};
		nextApp.render(req, res, actualPage, queryParams);
	});
	// keystoneApp.use('/articleimages/:name', express.static(__dirname + "../static/articleimages"));




	// Next request handler
	const handle = nextApp.getRequestHandler();
	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};

