const express = require('express');
const app = express();
const morgan = require('morgan');
const USERROUTE = require('./Routes/UsersRoute');
const BOOKSROUTE = require('./Routes/BooksRoute');
app.use(express.json());

app.use(morgan('common'));

// app.all('/api/books/*', (req, res) => {
// 	return res.send('That route does not exist!');
// });

app.use('/api/books', BOOKSROUTE);
app.use('/api/books', USERROUTE);
module.exports = app;
