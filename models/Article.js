var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Article = new keystone.List('Article', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	track: { createdBy: true }
});

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./static/articleimages/'),
		publicPath: '/static/articleimages/',
		generateFilename: (item, file) => {
			// NOTE: on the server, using Nginx, there is a file size limit of 1MB. Go into /etc/nginx/nginx.conf and add client_max_body_size 8M;
			let now = new Date();
			console.log(item);
			console.log(file);
			return encodeURI((now.getUTCMonth() + 1) + '-' + (now.getUTCFullYear()) + '-' + item.originalname);
		}
	},
	schema: {
		url: true
	}
});


Article.add({
	title: { type: String, required: true },
	subtitle: { type: String },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },

	author: { type: Types.Relationship, ref: 'User', index: true},
	content: {
		image: { type: Types.File, storage: storage },
		location: { type: String },
		date: { type: Types.Date },
		summary: { type: Types.Html, wysiwyg: true, height: 150 },
		full: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	// comments: { type: Types.Relationship, ref: 'ArticleComment', many: true }
	// createdBy: {type: Types.Relationship, ref: 'User' },
	// categories: { type: Types.Relationship, ref: 'ArticleTags', many: true },
});


// Article.schema.virtual('content.full').get(function () {
// 	return this.content.extended || this.content.brief;
// });

Article.relationship({ path: 'comments', ref: 'ArticleComment', refPath: 'article' });

Article.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Article.register();

