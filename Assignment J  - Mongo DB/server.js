const { app, http } = require('./index');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// console.log(app);
const port = 9000;
http.createServer(app).listen(port, () => {
	console.log(`Node   ${port}`);
});
