const db = require('../utils/db');
const catch_async = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const AppRes = require('../utils/ApprResponse');
// global users variable
var Users;

// Get user model
const UserModel = db.Users;

exports.getAllUsers = catch_async(async (req, res, next) => {
	Users = await UserModel.findAll();

	new AppRes(res, Users, 200);
});

exports.createUsers = catch_async(async (req, res, next) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return next(new AppError('Missing Parameters', 404));
	}

	Users = await UserModel.build({
		username: username,
		password: password,
	});
	await Users.save();

	new AppRes(res, Users, 201);
});
