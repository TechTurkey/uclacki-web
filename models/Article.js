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


Article.add({
	title: { type: String, required: true },
	subtitle: { type: String },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },

	author: { type: Types.Relationship, ref: 'User', index: true},
	content: {
		location: { type: String },
		date: { type: Types.Date },
		summary: { type: Types.Html, wysiwyg: true, height: 150 },
		full: { type: Types.Html, wysiwyg: true, height: 400 },
	}
	// createdBy: {type: Types.Relationship, ref: 'User' },
	// categories: { type: Types.Relationship, ref: 'ArticleTags', many: true },
});


// Article.schema.virtual('content.full').get(function () {
// 	return this.content.extended || this.content.brief;
// });

Article.relationship({ path: 'comments', ref: 'ArticleComment', refPath: 'article' });

Article.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Article.register();

