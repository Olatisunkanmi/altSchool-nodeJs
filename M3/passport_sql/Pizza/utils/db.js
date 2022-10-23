require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const CONFIG = require('./DBConffig');
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

// initialized DB object
const DB = {};
DB.sequelize = sequelize;
DB.Sequelize = Sequelize;

// Init Models
DB.Users = require('../Models/usersModel')(sequelize, DataTypes);
DB.Orders = require('../Models/orderModels')(sequelize, DataTypes);

DB.sequelize
	.sync({ force: false })
	.then(() => {
		console.log('Table sync success');
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = DB;
