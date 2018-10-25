const keystone = require('keystone');
const Types = keystone.Field.Types;
/*
No support for singular content items yet: https://keystonejs.canny.io/feature-requests/p/content-management-ie-singletons-like-pages
*/

const PageData = new keystone.List('PageData', {
	nocreate: true,
	nodelete: true,
	label: 'Information'
});

PageData.add({
	nextMeeting: { type: Types.Date },
	stats_service: { type: Types.Number },
	stats_leadership: { type: Types.Number },
	stats_fellowship: { type: Types.Number },
	images: { type: String, many: true },
	imageLinks: { type: String, many: true }
});

PageData.register();