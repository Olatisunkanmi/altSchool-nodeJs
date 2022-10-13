const moogoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

// connect to mongodb
function connectToMongoDB() {
	moogoose.connect(MONGO_URL);

	moogoose.connection.on('connected', () => {
		console.log('Connected to MongoDB successfully');
	});

	moogoose.connection.on('error', (err) => {
		console.log('Error connecting to MongoDB', err);
	});
}

module.exports = { connectToMongoDB };
