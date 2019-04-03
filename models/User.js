var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User', {
	map: { name: 'name' },

});

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./static/profileimages/'),
		publicPath: '/static/profileimages/',
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

User.add({
	name: { type: Types.Name, required: true, index: true },
	username: { type: String },
	uid: { type: Types.Number, required: true, initial: true, index: true, unique: true, noedit: true },
	profileImage: { type: Types.File, storage: storage },
	email: { type: Types.Email, initial: true, required: true },
	allow_emails: { type: Boolean },
	paid: { type: Boolean },
	password: { type: Types.Password },
	resetPasswordToken: { type: String, hidden: true },
	resetPasswordExpires: { type: Types.Date, hidden: true },
	phone: { type: Number, initial: true },
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
