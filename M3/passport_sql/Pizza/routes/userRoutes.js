const Router = require('express').Router();
const userController = require('../Controllers/userController');

Router.route('/')
	.get(userController.getAllUsers)
	.post(userController.createUsers);

module.exports = Router;
