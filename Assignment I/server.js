const app = require('./index');
// const express = require('express');

// const app = express();
const port = 9000;
app.listen(port, () => {
	console.log(`Node   ${port}`);
});
