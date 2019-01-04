var keystone = require('keystone');

const articlesPerPage = 10;

module.exports = {

	all: (req, res, next) => {
		const Article = keystone.list('Article');
		Article.model
				.find( { state: 'published' })
				.sort('-content.date')
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

	count: (req, res, next) => {
		const Article = keystone.list('Article');
		Article.model
		.find({ state: 'published' })
		.count()
		.exec(function(err, results) {
			if(err)
				throw err;
			res.json(results);
		});
	},

	page: (req, res, next) => {
		if(req.params.page < 1) {
			res.status(404);
			res.send({error: "Invalid parameter"});
		}
		const Article = keystone.list('Article');
		Article.model
				.find( { state: 'published' })
				.sort('-content.date')
				.skip(articlesPerPage * (req.params.page-1))
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

	slug: (req, res, next) => {
		const Article = keystone.list('Article');
		Article.model
				.findOne( {slug: req.params.slug} )
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