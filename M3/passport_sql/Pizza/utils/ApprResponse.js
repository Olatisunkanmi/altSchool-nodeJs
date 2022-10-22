module.export = (params) => {
	return class Response {
		constructor(stausCode, message, data, TOKEN) {
			this.message = message;
			this.data = data;
			this.TOKEN = TOKEN;

			res.status(stausCode).json({
				length: data.length,
				status: 'success',
				TOKEN: this.TOKEN,
				data: this.data,
			});
		}
	};
};
