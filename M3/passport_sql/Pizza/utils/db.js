require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const CONFIG = require('./dbConffig');

const sequelize = new Sequelize();
