const path = require('path');
const fs = require('fs');
let Books = JSON.parse(
	fs.readFileSync(`${__dirname}/../DB/books.json`),
);
let Users = JSON.parse(
	fs.readFileSync(`${__dirname}/../DB/user.json`),
);

exports.getAllUsers = (req, res) => {
	res.status(200).json({
		status: 'succes',
		results: Users.length,
		data: {
			Users: Users,
		},
	});
};

exports.createUser = (req, res) => {
	// Json fromm client
	let newUser = req.body;
	let { username, role } = newUser;

	// if username || role of newUser is undefined
	if (!username || !role) {
		return res.status(404).json({
			status: 'fail',
			mesaage: 'Missing details',
		});
	}

	// Push newly created user into Users (existing Users database)
	Users.push(req.body);

	res.status(200).json({
		status: 'succes',
		results: newUser.length,
		data: {
			User: newUser,
		},
	});
};

exports.getAllUsers = (req, res) => {
	res.status(200).json({
		status: 'succes',
		results: Users.length,
		data: {
			User: Users,
		},
	});
};
