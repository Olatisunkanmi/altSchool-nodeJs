const fs = require('fs');
const path = require('path');
const booksDbPath = path.join('db', 'books.json');

exports.getAllBooks = (req, res) => {
	fs.readFile(booksDbPath, 'utf-8', (err, data) => {
		if (err) {
			console.log(err);
			res.writeHead(400);
			res.end('An Error Occured ');
		}

		res.writeHead(200, {
			'Content-Type': 'application/json',
			'X-Powered-By': 'bacon',
			Connection: 'keep-alive',
		});
		res.end(data);
	});
};

//          ^ Ed getAllbk.

// !     --------------------creatE boOK

exports.createBook = (req, res) => {
	// console.log(req.body);                    ??????????
	const body = [];

	//  Req .on (to switch a server on ? )
	req
		.on('error', (err) => {
			console.log('error');
			console.error(err.stack);
		})
		.on('data', (chunk) => {
			body.push(chunk);
		})
		.on('end', () => {
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
};

//          ^ Ed create bk.

// !     --------------------UpDate boOK

exports.updateBook = (req, res) => {
	console.log('object');
};

//          ^ Ed update  bk.
