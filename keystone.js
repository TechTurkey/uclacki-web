require('dotenv').config();

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});

const keystone = require('keystone');
keystone.init({
 'name': 'UCLA CKI Web',
 'brand': 'UCLA CKI',
 'auto update': true,
 'session': true,
 'auth': true,
 'user model': 'User',
// 'cookie secret': 'astring',
 'port': 3001
});


// Load your project's Models
keystone.import('models');
console.log("Preparing");
app.prepare().then(() => {
  process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
  });
  // Load your project's Routes
  keystone.set('routes', require('./routes')(app));
  keystone.set('allow cors origin', true);
  keystone.set('allow cors headers', true);
  if(!dev)
	 keystone.set('session store', 'mongo');
  
  // Configure the navigation bar in Keystone's Admin UI
  // keystone.set('nav', {
  //  // posts: ['posts', 'post-categories'],
  //  users: 'users',
  // });
  
  keystone.start();
})
