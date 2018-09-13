var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function(done) {
  new User.model({
    name: { first: 'Chris', last: 'Lam' },
    username: "admin",
    email: "uclackitech@gmail.com",
    password: 'ckitechturkey',
    isAdmin: true
  }).save(done);
};