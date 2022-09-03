const express = require('express');
const app = express();
const morgan = require('morgan');
const USERROUTES = require('./Routes/UsersRoute');
const BOOKSROUTES = require('./Routes/BooksRoute');
const ADMINROUTES = require('./Routes/AdminRoutes');
app.use(express.json());

app.use(morgan('common'));

// app.all('/api/books/*', (req, res) => {
// 	return res.send('That route does not exist!');
// });

app.use('/api/books', BOOKSROUTES);
app.use('/api/users', USERROUTES);
app.use('/api/admin', ADMINROUTES);
module.exports = app;
