const express = require('express');
require('dotenv').config();
const bookRouter = require('./routes/books');

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

const PORT = 6000;

app.listen(PORT, () => {
	console.log(`Node server runing on port ${PORT}`);
});
