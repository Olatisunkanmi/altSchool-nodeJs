const http = require('http');
const { authors, books } = require('./fixtures');

const reqHand = (req, res) => {
	if (req.url == '/books') {
		res.writeHead(200);
		res.end(JSON.stringify(books));
	} else if (req.url == '/authour') {
		res.writeHead(200);
		res.end(JSON.stringify(authors));
	} else {
		res.writeHead(404);
		res.end('Invalid Route ');
	}
};

const server = http.createServer(reqHand);
const PORT = 9000;
server.listen(PORT, () => {
	console.log(`Server started ! at Port ${PORT}`);
});
