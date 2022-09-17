const http = require('http');
const bookControllers = require('./controllers/BookController');
const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');
const booksDbPath = path.join(__dirname, 'db', 'books.json');

const reqHand = (req, res) => {
	if (req.url === '/books' && req.method === 'GET') {
		bookControllers.getAllBooks(req, res);
		// getAllBooks(req, res);
	} else if (req.url === '/books' && req.method === 'POST') {
		console.log(' CREATE ');
	} else if (req.url === '/books' && req.method === 'PUT') {
		console.log(' UPDATE ');
	} else if (req.url === '/echo' && req.method === 'POST') {
		sendEcho(req, res);
	} else {
		res.statusCode = 404;
		res.end();
	}
};

const sendEcho = (req, res) => {
	let body = [];
	req
		.on('err', (err) => {
			console.error(err);
		})
		.pipe(res);

	res.on('err', (err) => {
		console.error(err);
	});

	res.writeHead(200, {
		'Content-Type': 'applicatiion/json',
		'X-powered-By': 'bacon',
		session: 'Echo Session',
		Connection: 'Keep-Alive',
	});
};

module.exports = {
	http,
	reqHand,
};
