const http = require('http');

const HOSTNAME = 'localhost';
const PORT = 8000;

const requestHander = (req, res) => {
	console.log(req);
};

const server = http.createServer();

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server started ! at  http://${HOSTNAME}:${PORT}`);
});
