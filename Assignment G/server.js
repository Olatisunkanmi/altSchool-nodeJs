const { http, reqHand } = require('./index');

// const server = http.createServer((request, respose) => {
// 	const { headers } = request;
// 	const userAgent = headers['user-agent'];
// 	// user agent
// 	console.log(userAgent);
// }, reqHand);

const server = http.createServer(reqHand);

// creating a server object.
// server returned by
// console.log(server);

const PORT = 9000;
server.listen(PORT, () => {
	console.log(`server started at port ${PORT}`);
});
