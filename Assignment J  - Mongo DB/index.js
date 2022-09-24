const express = require('express');
const app = express();
const http = require('http');
const morgan = require('morgan');
const USERROUTES = require('./Routes/UsersRoute');
const BOOKSROUTES = require('./Routes/BooksRoute');
const ADMINROUTES = require('./Routes/AdminRoutes');
app.use(express.json());

app.use(morgan('common'));

app.use('/api/books', BOOKSROUTES);
app.use('/api/users', USERROUTES);
app.use('/api/admin', ADMINROUTES);

app.use('*', (req, res, next) => {
	res.status(404).json({
		status: 'Error',
	});
});

app.all('*', (req, res, next) => {
	// res.status(404).json({
	// 	status: 'Fail',
	// });

	const err = new Error(`Cant find ${req.originalUrl}`);
	err.status = 'fail';
	err.statusCode = 404;

	next(err);
});

app.use((err, req, res, next) => {
	// Default error status code and status
	err.statusCode = err.statusCode || 500;

	err.status = err.status || 'Erro r';
	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
	});
});

module.exports = {
	app,
	http,
};
