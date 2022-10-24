const express = require('express');
const ORDERROUTER = require('./routes/orderRoutes');
const USERROUTER = require('./routes/userRoutes');
const morgan = require('morgan');
const session = require('express-session');
const AppError = require('./utils/AppError');
const passport = require('passport');

const app = express();
app.use(express.json());
app.use(morgan('common'));

app.use('/api/v1/campaigns', ORDERROUTER);
app.use('/api/v1/users', USERROUTER);

app.get('/', (req, res) => {
	res.send('Welcome to the book API');
});

// Set session for api
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour,
	}),
);

// set passport as middleware
app.use(passport.initialize());

app.all('*', (req, res, next) => {
	next(
		new AppError(
			`Can't find ${req.originalUrl} on this server!!`,
			404,
		),
	);
});

module.exports = app;
