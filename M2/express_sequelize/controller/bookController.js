const db = require('../models');

// declare
var books;

// Get Models
const bookModel = db.books;

exports.getAllBooks = async (req, res) => {
	try {
		books = await db.books.findAll();
		res.status(200).json(books);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

exports.createBook = async (req, res) => {
	const { title, year, isbn } = req.body;
	// const bookInfo = req.body;

	try {
		books = await bookModel.build({
			title: title,
			year: year,
			isbn: isbn,
		});
		await books.save();
		res.status(200).json({
			status: 'Success',
			data: books,
		});
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
};

exports.updateBook = async (req, res, next) => {
	const bookId = req.params.id * 1;
	const updateInfo = req.body;
	try {
		const book = await bookModel.update(updateInfo, {
			where: {
				id: bookId,
			},
		});
		res.status(200).json({
			status: 'success',
			data: book,
		});
	} catch (error) {
		res.status(500).send(error);
	}
};

exports.deleteBook = async (req, res, next) => {
	const bookId = req.params.id * 1;
	try {
		const book = await bookModel.destroy({
			where: {
				id: bookId,
			},
		});
		res.status(200).json('Book deleted');
	} catch (error) {
		res.status(500).send(error);
	}
};
