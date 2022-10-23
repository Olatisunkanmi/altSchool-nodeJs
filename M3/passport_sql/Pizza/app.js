const express = require('express');
const ORDERROUTER = require('./routes/orderRoutes');
// const USERROUTER = require('./routes/userRoutes');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('common'));

// app.use('/api/v1/orders', ORDERROUTER);
// app.use('/api/v1/users', USERROUTER);

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
