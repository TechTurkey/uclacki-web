var keystone = require('keystone');

const articlesPerPage = 10;

module.exports = {

	all: (req, res, next) => {
		const Article = keystone.list('Article');
		Article.model
				.find( { state: 'published' })
				.populate("author", "name")
				.exec(function(err, results) {
					// keystone.populateRelated(results, 'comments', function(err) {
					// 	if(err) throw err;
					// 	res.json(results);
					// });
					if(err) throw err;
					res.json(results);
				});
	},

	page: (req, res, next) => {
		const Article = keystone.list('Article');
		Article.model
				.find( { state: 'published' })
				.skip(articlesPerPage * req.body['page'])
				.limit(articlesPerPage)
				.populate("author", "name")
				.exec(function(err, results) {
					// keystone.populateRelated(results, 'comments', function(err) {
					// 	if(err) throw err;
					// 	res.json(results);
					// });
					if(err) throw err;
					res.json(results);
				});
	},

	title: (req, res, next) => {
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
	}
}