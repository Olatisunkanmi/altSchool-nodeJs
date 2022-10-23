const DB = require('../utils/db');
const catch_async = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const AppRes = require('../utils/ApprResponse');

// global users variable
var Users;

// Get user model
const UserModel = DB.Users;

exports.getAllUsers = async (req, res, next) => {
	console.log('object');
	Users = await UserModel.findAll();
	new AppRes(res, Users, 200);
};

exports.createUsers = catch_async(async (req, res, next) => {
	const { username, email, password } = req.body;

	if (!username || !email || !password) {
		return next(new AppError('Missing Parameters', 404));
	}

	Users = await UserModel.build({
		name: username,
		password: password,
		email: email,
	});
	await Users.save();

	console.log(Users);
	new AppRes(res, Users, 201);
});
