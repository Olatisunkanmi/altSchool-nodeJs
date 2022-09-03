const path = require('path');
const fs = require('fs');
let Books = JSON.parse(
	fs.readFileSync(`${__dirname}/../DB/books.json`),
);
let Users = JSON.parse(
	fs.readFileSync(`${__dirname}/../DB/user.json`),
);

exports.checkId = async (req, res, next) => {
	let { username } = req.body;
	username = await Users.find((cur) => cur.name === username);

	// Check user ID

	if (!username) {
		return res.status(500).json({
			status: 'Failed',
			message: 'Invalid  ID',
		});
	}

	if (username.role !== 'admin') {
		return res.status(401).json({
			status: 'Failed',
			message: 'Permission not granted',
		});
	}

	next();
};

exports.getAllbooks = async (req, res) => {
	let role = req.role;
	try {
		res.status(200).json({
			status: 'Succes',
			role: role,
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

exports.createBook = async (req, res) => {
	let newBook = req.body;
	const { title, author, publisher } = newBook;
	if (!title || !author || !publisher) {
		res.status(404).json({
			status: 'Fail',
			message: 'Invalid or Missing Parameters',
		});
	}

	Books.push(newBook);

	res.status(201).json({
		status: 'success',
		result: newBook.length,
		data: {
			Book: newBook,
		},
	});
};

exports.getEachBook = async (req, res) => {
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

exports.updateBook = async (req, res) => {
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

exports.deleteBook = async (req, res) => {
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

exports.loanBook = async (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Book for load',
	});
};

exports.returnBook = async (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Book returned by User',
	});
};
