const http = require('http');

const reqHand = (req, res) => {
	console.log('Hello W2');
};

const server = http.createServer(reqHand);
const PORT = 9000;
server.listen(PORT, () => {
	console.log(`Server started ! at Port ${PORT}`);
});
