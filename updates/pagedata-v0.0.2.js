var keystone = require('keystone');
var User = keystone.list('PageData');

exports = module.exports = function(done) {
  new PageData.model({
    nextMeeting: new Date(),
	stats_service: 0,
	stats_leadership: 0,
	stats_fellowship: 0
  }).save(done);
};