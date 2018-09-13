var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
	Posts
	=====
 */

var ArticleComment = new keystone.List('ArticleComment', {
	label: 'Comments',
	// nocreate: true,
	// noedit: true,
	// nodelete: true
});

ArticleComment.add({
	author: { type: Types.Relationship, initial: true, ref: 'User', index: true },
	article: { type: Types.Relationship, initial: true, ref: 'Article', index: true },
	commentState: { type: Types.Select, options: ['published', 'draft', 'archived'], default: 'published', index: true },
	publishedOn: { type: Types.Date, default: Date.now, noedit: true, index: true },
});

ArticleComment.add('Content', {
	content: { type: Types.Html, wysiwyg: true, height: 300 },
});

ArticleComment.schema.pre('save', function (next) {
	this.wasNew = this.isNew;
	if (!this.isModified('publishedOn') && this.isModified('commentState') && this.commentState === 'published') {
		this.publishedOn = new Date();
	}
	next();
});

ArticleComment.schema.post('save', function () {
	if (!this.wasNew) return;
	if (this.author) {
		keystone.list('User').model.findById(this.author).exec(function (err, user) {
			if (user) {
				user.wasActive().save();
			}
		});
	}
});

ArticleComment.track = true;
ArticleComment.defaultColumns = 'author, article, publishedOn, commentState';
ArticleComment.register();
