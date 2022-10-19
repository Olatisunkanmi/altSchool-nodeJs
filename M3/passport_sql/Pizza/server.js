const { createServer } = require('http');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

// Create server class
class Server extends createServer {
	constructor(app, port) {
		super();
		this.port = port;
		this.app = app;

		createServer(this.app).listen(this.port, () => {
			console.log(`Node is listening on ${this.port}`);
		});
	}
}

// sever listen.
const server_one = new Server(app, process.env.PORT || 3000).listen();
