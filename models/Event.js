var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Event = new keystone.List('Event', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	track: { createdBy: true }
});


Event.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },

	event_chair: { type: Types.Relationship, ref: 'User', index: true},
	start_time: { type: Types.Datetime, default: Date.now, required: true },
	end_time: { type: Types.Datetime, default: Date.now, required: true },
	location: { type: String },
	event_slots: { type: Types.Number, default: 0 },
	attendees: { type: Types.Relationship, ref: 'User', many: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	// image: { type: Types.CloudinaryImage },
	description: {
		summary: { type: Types.Html, wysiwyg: true, height: 150 },
		full: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	// createdBy: {type: Types.Relationship, ref: 'User' },
	categories: { type: Types.Relationship, ref: 'EventCategory', many: true },
});


// Event.schema.virtual('content.full').get(function () {
// 	return this.content.extended || this.content.brief;
// });

Event.schema.pre('save', function(next) {
	if(this.createdBy)
		this.event_chair = this.createdBy;
	next();
});

Event.schema.virtual('slots_remaining').get(function () {
	return this.attendees.length - this.event_slots;
});

Event.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Event.register();

