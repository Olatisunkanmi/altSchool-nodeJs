const express = require('express');
const app = express();
const morgan = require('morgan');
const USERROUTE = require('./Routes/UsersRoute');
const BOOKSROUTE = require('./Routes/BooksRoute');
app.use(express.json());

app.use(morgan('common'));

app.use('/api/books', BOOKSROUTE);
module.exports = app;
