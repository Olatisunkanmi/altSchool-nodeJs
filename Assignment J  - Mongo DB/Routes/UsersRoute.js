const router = require('express').Router();
const userController = require('../Controllers/UsersController');

// router.route('/').get(userController.createUser);

router
	.route('/:id')
	.post(userController.authUser, userController.userLogin);

// router.route('/:id/update').post(userController.updateDetails);

module.exports = router;
