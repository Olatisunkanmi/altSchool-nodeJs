const supertest = require('supertest');

const Server = require('../index');
// const { it } = require('node:test');
// const { describe } = require('node:test');

describe('Book Route', () => {
	//  Get books  Route
	it('GET /api/books works', async () => {
		const response = await supertest(Server).get('/api/books');
		expect(response.status).toBe(200);
	});

	// Route to request for book
	it('GET books works', async () => {
		const response = await supertest(Server).get(
			'/api/books/request/ ',
		);
		expect(response.status).toBe(200);
	});

	// Route to return for book
	it('GET books works', async () => {
		const response = await supertest(Server).get(
			'/api/books/return/ ',
		);
		expect(response.status).toBe(200);
	});

	// Route to create book
	it('POST    books works', async () => {
		const newBook = {
			title: 'House',
			author: 'Osant',
			publisher: 'Douglas-Satterfield',
		};

		const response = await supertest(Server)
			.post('/api/books')
			.send(newBook);
		expect(response.status).toBe(201);
	});
});
