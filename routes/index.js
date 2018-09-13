var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);



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




	keystoneApp.get('/api/users', (req, res, next) => {
	 	const User = keystone.list('User');
	 	User.model
	 		.find()
	 		.select('-password')
	 		.populate('events')
	 		.exec(function (err, results) {
				if (err) throw err;
				res.json(results);
	 		});
	 });
	keystoneApp.get('/api/users/:id', (req, res, next) => {
	 	const User = keystone.list('User');
	 	User.model
	 		.find()
	 		.select('-password')
	 		.populate('events')
	 		.exec(function (err, results) {
				if (err) throw err;
				res.json(results);
	 		});
	 });





	// Next request handler
	const handle = nextApp.getRequestHandler();
	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};

