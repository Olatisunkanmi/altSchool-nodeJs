const { Sequelize, DataTypes } = require('sequelize');
const CONFIG = require('../config/dbConfig');
const BookModel = require('./books');

const sequelize = new Sequelize(
	CONFIG.DB_NAME,
	CONFIG.DB_USER,
	CONFIG.DB_PASSOWRD,
	{
		host: CONFIG.DB_HOST,
		dialect: CONFIG.DB_DIALECT,
	},
)
	.authenticate()
	.then(() => {
		console.log('Connection Successful');
	})
	.catch((err) => {
		console.log(err);
	});

// extediing an instance of our original db obejcts
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Create  Models
db.books = BookModel(Sequelize, DataTypes);

// sync to modify table
db.sequelize
	.sync({ force: false })
	.then(() => {
		console.log('Table sync success');
	})
	.catch((err) => {
		console.log(err);
	});
