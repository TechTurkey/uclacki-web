require('dotenv').config();

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});

const keystone = require('keystone');
keystone.init({
 'name': 'Keystone Next Example',
 'brand': 'Keystone Next Example',
 'auto update': true,
 'session': true,
 'auth': true,
 'user model': 'User',
// 'cookie secret': 'astring',
 'port': 3001
});

// Load your project's Models
keystone.import('models');

app.prepare().then(() => {
  
  // Load your project's Routes
  keystone.set('routes', require('./routes')(app));

  if(!dev)
	keystone.set('session store', 'mongo');
  
  // Configure the navigation bar in Keystone's Admin UI
  // keystone.set('nav', {
  //  // posts: ['posts', 'post-categories'],
  //  users: 'users',
  // });
  
  keystone.start();
})
