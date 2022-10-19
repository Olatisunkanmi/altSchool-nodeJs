const express = require('express');
const bookRouter = require('./routes/bookRoutes');

const app = express();
app.use(express.json());

app.use('/books', bookRouter);

app.get('/', (req, res) => {
	res.send('Welcome to the book API');
});

app.use((err, req, res, next) => {
	console.log(err);
	res.status(400).json({
		error: err.message,
		stack: err.stack,
	});
});

module.exports = app;
