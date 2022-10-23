require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const CONFIG = require('./dbConffig');
const AppErr = require('./AppError');

const sequelize = new Sequelize(
	CONFIG.DB_NAME,
	CONFIG.DB_USER,
	CONFIG.DB_PASSWORD,
	{
		host: CONFIG.DB_HOST,
		dialect: CONFIG.DB_DIALECT,
	},
);

const seqConnect = (next) => {
	sequelize
		.authenticate()
		.then(() => {
			console.log('DB connected ');
		})
		.catch((err) => console.log(err));
};

process.nextTick(seqConnect);
