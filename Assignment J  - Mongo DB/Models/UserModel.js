const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'All users Must have a username '],
		unique: false,
	},
	password: {
		type: String,
		required: [true, 'All users Must have a Password '],
	},
	role: {
		type: String,
		default: 'Basic',
	},
	picture: {
		type: String,
		required: false,
		default: '',
	},
});

module.exports = mongoose.model('User', UserSchema);
