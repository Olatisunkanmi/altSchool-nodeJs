const utils = require('../utils');
const books = require('../fixtures/books.json');

// beforeAll(() => {
//     console.log("Before all Tests")
// })

// beforeEach(() => {
//     console.log("Before each Test")
// })

// afterEach(() => {
//     console.log("After each Test")
// })

// afterAll(() => {
//     console.log("After all Tests")
// })

describe('Utils', () => {
	it('should return the total number of books', () => {
		expect(utils.getBookCount(books)).toBe(5);
	});

	it('should return an array of book titles', () => {
		const expectedTitles = [
			'The Design of Everyday Things',
			'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming',
			'Algorithms to Live By',
			'My new book',
			'Things fall apart',
		];

		expect(utils.getBookTitle(books)).toEqual(expectedTitles);
	});

	it('should return the highest book year', () => {
		expect(utils.getHighestBookYear(books)).toBe(2022);
	});

	it('should throw an error if book is not found', () => {
		expect(() => {
			utils.bookIsInDb(100, books);
		}).toThrow(new Error('Book with id 100 not found'));
	});
});
