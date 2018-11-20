var keystone = require('keystone');
var nodemailer = require('nodemailer');

var mailConfig = {
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: 'uclawebsite@gmail.com',
		pass: process.env.EMAIL_PASS
	}
};

var mailOptions = {
	from: "'UCLACKI'<uclawebsite@gmail.com>",
	to: 'christopherwlam@gmail.com,uclackitech@gmail.com',
	subject: "Test Message",
	text: "This was sent from nodemailerjs",
	html: "<p>insert here</p>"
};

module.exports = {
	sendMail: (people, subject, text, html) => {
		let transporter = nodemailer.createTransport(mailConfig);
		mailOptions = {
			from: "'UCLACKI'<uclawebsite@gmail.com>",
			to: people,
			subject: subject,
			text: text,
			html: html
		}
		transporter.sendMail(mailOptions, (error, info) => {
			if(error) {
				console.log("Nodemailer send error: " + error);
			}
			transporter.close();
		});
	 }
}