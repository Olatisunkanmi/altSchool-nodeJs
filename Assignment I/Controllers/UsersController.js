const path = require('path');
const fs = require('fs');
let Books = JSON.parse(
	fs.readFileSync(`${__dirname}/../DB/books.json`),
);
let Users = JSON.parse(
	fs.readFileSync(`${__dirname}/../DB/user.json`),
);

exports.authUser = (req, res, next) => {
	let userId = req.params.id * 1;
	userId = Users.find((cur) => cur.id === userId);
	if (!userId) {
		return res.status(404).json({
			status: 'Fail',
			message: 'User invalid',
		});
	}
	req.userData = userId;
	next();
};

exports.userLogin = async (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			user: req.userData,
		},
	});
};
