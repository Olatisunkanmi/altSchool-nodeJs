const router = require('express').Router();
const adminController = require('../Controllers/AdminController');

router
	.route('/')
	.get(adminController.getAllUsers)
	.post(adminController.createUser);

module.exports = router;
