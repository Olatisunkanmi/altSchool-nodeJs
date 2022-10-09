const db = require('../models/index');

exports.getAllBooks = async (req, res) => {
	try {
		const books = await db.books.findAll();
		res.status(200).json(books);
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
};
