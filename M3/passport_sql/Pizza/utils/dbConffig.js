require('dotenv').config();

const CONFIG = {
	DB_NAME: process.env.DB_NAME,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_DIALECT: process.env.DB_DIALECT,
	DB_HOST: process.env.DB_HOST,
};

module.exports = CONFIG;
