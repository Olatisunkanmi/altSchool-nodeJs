const app = require('./index');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const port = 9000;
app.listen(port, () => {
	console.log(`Node   ${port}`);
});
