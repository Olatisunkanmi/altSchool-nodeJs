const USER = require('../Models/UserModel');

// Universal User.  re-used and re-init with every function
var User;

exports.getAllUsers = async (req, res) => {
	User = await USER.find();

	res.status(200).json({
		status: 'succes',
		results: User.length,
		data: {
			Users: User,
		},
	});
};

exports.createUser = (req, res) => {
	// Json fromm client

	// Push newly created user into Users (existing Users database)
	User = USER.push(req.body);

	res.status(200).json({
		status: 'succes',
		results: newUser.length,
		data: {
			User: User,
		},
	});
};
