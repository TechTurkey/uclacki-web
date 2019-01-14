var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Event = new keystone.List('Event', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	defaultSort: '-createdAt publishedDate name',
	track: { createdBy: true, createdAt: true }
});

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./static/eventimages/'),
		publicPath: '/static/eventimages/',
		generateFilename: (item, file) => {
			// NOTE: on the server, using Nginx, there is a file size limit of 1MB. Go into /etc/nginx/nginx.conf and add client_max_body_size 8M;
			let now = new Date();
			console.log(item);
			console.log(file);
			return (now.getUTCMonth() + 1) + '-' + (now.getUTCFullYear()) + '-' + item.originalname;
		}
	},
	schema: {
		url: true
	}
});

Event.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },

	event_chair: { type: Types.Relationship, ref: 'User', index: true},
	start_time: { type: Types.Datetime, default: Date.now },
	end_time: { type: Types.Datetime, default: Date.now },
	location: { type: String, initial: true },
	signup_type: { type: Types.Select, options: 'off, members, all', default: 'members', initial: true, noedit: true },
	event_slots: { type: Types.Number, default: 0, dependsOn: {signup_type: ['members', 'all']} },
	attendees: { type: Types.Relationship, ref: 'User', many: true, noedit: true, dependsOn: {signup_type: ['members', 'all']} },
	anonAttendees: { 
		name: { type: Types.TextArray, dependsOn: {signup_type: 'all'} },
		number: { type: Types.TextArray, dependsOn: {signup_type: 'all'} },
	},
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.File, storage: storage },
	description: {
		summary: { type: Types.Html, wysiwyg: true, height: 150 },
		full: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	// createdBy: {type: Types.Relationship, ref: 'User' },
	category: { type: Types.Select, initial: true, options: 'service, social, kfam, fundraising, divdist, admin, mdeer' },
});


// Event.schema.virtual('content.full').get(function () {
// 	return this.content.extended || this.content.brief;
// });

// Event.schema.pre('save', function(next) {
// 	if(this.createdBy)
// 		this.event_chair = this.createdBy;
// 	next();
// });

Event.schema.virtual('slots_remaining').get(function () {
	if(!this.attendees)
		return this.event_slots;
	return this.attendees.length - this.event_slots;
});

// Event.schema.set('toObject', {getters: true});
// Event.schema.set('toJSON', { virtuals: true });

Event.defaultColumns = 'title, state|20%, author|20%, start_time|20%, ';
Event.register();

