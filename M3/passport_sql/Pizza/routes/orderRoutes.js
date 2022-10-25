const Router = require('express').Router();
const orderController = require('../Controllers/orderController');

Router.route('/').post(orderController.createOrder);

// Router.route('/:id/chain').post(orderController);

module.exports = Router;
