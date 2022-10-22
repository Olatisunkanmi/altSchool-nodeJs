require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const CONFIG = require('./dbConffig');

const sequelize = new Sequelize(
	'bookstore',
	'root',
	'@Olasunkanmi1',
	{
		host: CONFIG.DB_HOST,
		dialect: CONFIG.DB_DIALECT,
	},
);

const sequelizeConnect = () => {
	sequelize
		.authenticate()
		.then(() => {
			console.log('Connection Successful');
		})
		.catch((err) => {
			console.log(err);
		});
};

process.nextTick(sequelizeConnect);

// extending our db object
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Create Models
db.orders = require('../Models/order')(sequelize, DataTypes);
db.users = require('../Models/users')(sequelize, DataTypes);
