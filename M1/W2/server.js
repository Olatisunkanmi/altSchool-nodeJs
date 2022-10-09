const http = require('http');
const fs = require('fs');
const path = require('path');
const booksDbPath = path.join(__dirname, 'db', 'books.json');

const reqHand = (req, res) => {
	if (req.url === '/books' && req.method === 'GET') {
		//READ
		// LOAD AND RETURN BOOKS
		getAllBooks(req, res);
	} else if (req.url === '/books' && req.method === 'POST') {
		// Create
		addBook(req, res);
	} else if (req.url === '/books' && req.method === 'PUT') {
		// Update
		updateBook(req, res);
	}
	// else if (req.url === '/books' && req.method === 'DELETE') {
	// 	deleteBook(req, res);
	// }
};

// !	--------------- Get ALL  Books

const getAllBooks = (req, res) => {
	fs.readFile(booksDbPath, 'utf-8', (err, data) => {
		if (err) {
			console.log(err);
			res.writeHead(400);
			res.end('An Error Occured ');
		}

		res.end(data);
	});
};

// !	--------------- Add  Book

function addBook(req, res) {
	const body = [];

	req.on('data', (chunk) => {
		body.push(chunk);
	});

	req.on('end', () => {
		const parsedBook = Buffer.concat(body).toString();
		const newBook = JSON.parse(parsedBook);

		//add the new book to the end of the existing books array
		fs.readFile(booksDbPath, 'utf8', (err, data) => {
			if (err) {
				console.log(err);
				res.writeHead(400);
				res.end('An error occured');
			}

			const oldBooks = JSON.parse(data);
			const allBooks = [...oldBooks, newBook];
			console.log(allBooks);

			fs.writeFile(booksDbPath, JSON.stringify(allBooks), (err) => {
				if (err) {
					console.log(err);
					res.writeHead(500);
					res.end(
						JSON.stringify({
							message:
								'Internal Server Error. Could not save book to database.',
						}),
					);
				}

				res.end(JSON.stringify(newBook));
			});
		});
	});
}

// !	--------------- update Book

function updateBook(req, res) {
	const body = [];

	req.on('data', (chunk) => {
		body.push(chunk);
	});

	req.on('end', () => {
		const parsedBook = Buffer.concat(body).toString();
		const detailsToUpdate = JSON.parse(parsedBook);
		const bookId = detailsToUpdate.id;

		fs.readFile(booksDbPath, 'utf8', (err, books) => {
			if (err) {
				console.log(err);
				res.writeHead(400);
				res.end('An error occured');
			}

			const booksObj = JSON.parse(books);

			const bookIndex = booksObj.findIndex(
				(book) => book.id === bookId,
			);

			if (bookIndex === -1) {
				res.writeHead(404);
				res.end('Book with the specified id not found!');
				return;
			}

			const updatedBook = {
				...booksObj[bookIndex],
				...detailsToUpdate,
			};
			booksObj[bookIndex] = updatedBook;

			fs.writeFile(booksDbPath, JSON.stringify(booksObj), (err) => {
				if (err) {
					console.log(err);
					res.writeHead(500);
					res.end(
						JSON.stringify({
							message:
								'Internal Server Error. Could not save book to database.',
						}),
					);
				}

				res.writeHead(200);
				res.end('Update successfull!');
			});
		});
	});
}

const server = http.createServer(reqHand);
const PORT = 9000;
server.listen(PORT, () => {
	console.log(`Server started ! at Port ${PORT}`);
});
