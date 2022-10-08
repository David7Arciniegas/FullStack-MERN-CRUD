const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide a valid name'],
		},
		email: {
			type: String,
			required: [true, 'Please enter your email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please enter your password'],
		},
		role: {
			type: String,
			default: 'admin',
		},

		role: {
			type: String,
			default: 'visitor',
		},

		status: {
			type: String,
			default: 'active',
		},
		// posts
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);


const User = mongoose.model('User', userSchema);

module.exports = { User };
