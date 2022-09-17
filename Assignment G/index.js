const http = require('http');
const bookControllers = require('./controllers/BookController');
const fs = require('fs');
const path = require('path');
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
	}
};

const sendEcho = (req, res) => {};

module.exports = {
	http,
	reqHand,
};
