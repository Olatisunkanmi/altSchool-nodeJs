const fs = require('fs');
const path = require('path');

const userDbPath = path.join(__dirname, 'db', 'users.json');

function getAllUsers() {
	return new Promise((resolve, reject) => {
		fs.readFile(userDbPath, 'utf8', (err, users) => {
			if (err) {
				reject(err);
			}
			resolve(JSON.parse(users));
		});
	});
}

exports.checkACL = (req, res, roles) => {
	return new Promise((resolve, reject) => {
		const body = [];

		req.on('data', (chunk) => {
			body.push(chunk);
		});

		req.on('end', async () => {
			const parsedBody = Buffer.concat(body).toString();
			if (!parsedBody) {
				reject('Please enter your username and password');
			}

			const { user: loginDetails, book } = JSON.parse(parsedBody);
			const users = await getAllUsers();
			const userFound = users.find(
				(user) =>
					user.username === loginDetails.username &&
					user.password === loginDetails.password,
			);

			if (!userFound) {
				reject('Username or password incorrect');
			}

			if (!roles.includes(userFound.role)) {
				reject(
					'You do not have the required role to access this resource',
				);
			}

			resolve(book);
		});
	});
};

module.exports = {
	authenticateUser,
};
