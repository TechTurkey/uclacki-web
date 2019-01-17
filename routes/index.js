var keystone = require('keystone');
const express = require('express');
const path = require('path');
var importRoutes = keystone.importer(__dirname);
var mongoSanitize = require('express-mongo-sanitize');
var fs = require('fs');
const cors = require('cors');


var routes = {
	auth: importRoutes('./auth'),
	data: importRoutes('./data'),
}

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {

	/*
	*** Change throw err to 
	*/

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

	keystoneApp.get('/api/articles/all', routes.data.articles.all);
	keystoneApp.get('/api/articles/count', routes.data.articles.count);
	keystoneApp.get('/api/articles/page/:page', routes.data.articles.page);
	keystoneApp.get('/api/articles/:slug', routes.data.articles.slug);

	keystoneApp.get('/api/pagedata', (req, res) => {
		const PageData = keystone.list('PageData');
		PageData.model
				.findOne()
				.exec(function(err, results) {
					if(err) throw err;
					res.json(results);
				});
	});

	


	keystoneApp.get('/api/users', routes.auth.users.all);
	keystoneApp.get('/api/profile', routes.auth.users.profile);
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
	keystoneApp.get('/article/:slug', (req, res) => {
		const actualPage="/article";
		const queryParams= {slug: req.params.slug};
		nextApp.render(req, res, actualPage, queryParams);
	});
	// keystoneApp.use('/articleimages/:name', express.static(__dirname + "../static/articleimages"));


	// Also more masking, specifically for old links to old website, pull up archived articles
	keystoneApp.get('/:slug', (req, res, next) => {
		const Article = keystone.list('Article');
		Article.model
				.findOne({state: 'archived', slug: req.params.slug})
				.count()
				.exec(function(err, result) {
					if(err)
						throw err;
					if(result)
						nextApp.render(req, res, "/article", {slug: req.params.slug});
					else
						next();
				})
	});

	// Next request handler
	const handle = nextApp.getRequestHandler();
	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};