const http = require('http');

const HOSTNAME = 'localhost';
const PORT = 8000;

function requestHander(req, res) {
	console.log(req);
	res.end('Hello from the Server');
}

const server = http.createServer(requestHander);

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server started ! at  http://${HOSTNAME}:${PORT}`);
});
