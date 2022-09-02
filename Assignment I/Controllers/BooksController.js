const path = require('path');
const fs = require('fs');
let Books = JSON.parse(
	fs.readFileSync(`${__dirname}/../DB/books.json`),
);

exports.getAllbooks = async (req, res) => {
	try {
		res.status(200).json({
			staus: 'Succes',
			result: Books.length,
			data: {
				Data: Books,
			},
		});
	} catch (error) {
		res.status(404).json({
			status: 'Fail',
			message: error,
		});
	}
};
