const dotenv = require('dotenv');

dotenv.config();

const TOKEN = process.env.API_TOKEN;

exports.authUser = (req, res) => {
	return new Promise((resolve, reject) => {
		let token = req.headers.authorization.split(' ')[1];

		if (!token || token != TOKEN) {
			reject('Token Erro R ');
		} else {
			resolve();
		}
	});
};
