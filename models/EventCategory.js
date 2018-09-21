var keystone = require('keystone');

/**
 * EventCategory Model
 * ==================
 */

var EventCategory = new keystone.List('EventCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
	hidden: true,
	nocreate: true,
	noedit: true,
	nodelete: true
});

EventCategory.add({
	type: { type: String, required: true, initial: true },
});

EventCategory.relationship({ ref: 'Event', path: 'posts', refPath: 'categories' });

EventCategory.register();