const supertest = require('supertest');
const httpServer = require('./server');

describe('Book Route', () => {
	it('GET /books works', async () => {
		const response = await supertest(httpServer).get('/books');
		expect(response.headers['content-type']).toBe('application/json');
		expect(response.status).toBe(200);
		expect(response.body.length).toBe(5);
	});

	it('GET /books?id works', async () => {
		const response = await supertest(httpServer).get('/books?id=1');
		expect(response.headers['content-type']).toBe('application/json');
		expect(response.status).toBe(200);
		expect(response.body.title).toBe('The Design of Everyday Things');
	});

	it('POST /books works', async () => {
		const bookToAdd = {
			title: 'New test book',
			author: 'Rising Odegua',
			year: 2022,
		};
		const response = await supertest(httpServer)
			.post('/books')
			.send(bookToAdd);
		expect(response.headers['content-type']).toBe('application/json');
		expect(response.status).toBe(201);
		expect(response.body.title).toBe('New test book');
		expect(response.body.author).toBe('Rising Odegua');
		expect(response.body.year).toBe(2022);
	});

	it('DELETE /books works', async () => {
		const response = await supertest(httpServer).delete(
			'/books?id=5',
		);
		expect(response.headers['content-type']).toBe('application/json');
		expect(response.status).toBe(200);
		expect(response.body.message).toBe('Book deleted');

		const response2 = await supertest(httpServer).get('/books');
		expect(response2.headers['content-type']).toBe(
			'application/json',
		);
		expect(response2.status).toBe(200);
		expect(response2.body.length).toBe(5);
	});
});
