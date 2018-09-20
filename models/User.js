var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User', {
	map: { name: 'name' },

});

User.add({
	name: { type: Types.Name, required: true, index: true },
	username: { type: String, required: true, initial: true },
	uid: { type: Types.Number, required: true, initial: true, index: true, unique: true, noedit: true },
	email: { type: Types.Email, initial: true, required: true },
	paid: { type: Types.Boolean },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
	events: { type: Types.Relationship, ref: 'Event', many: true, noedit: true }
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


// User.schema.set('toJSON', {
// 	virtuals: true	// give api access to send name.full
// });


/**
 * Relationships
 */
// User.relationship({ ref: 'Event', path: 'myEvents', refPath: 'attendees' });


/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();
