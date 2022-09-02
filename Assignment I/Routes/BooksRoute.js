const booksControllers = require('../Controllers/BooksController');
const router = require('express').Router();

router
	.route('/')
	.get(booksControllers.getAllbooks)
	.post(booksControllers.checkId, booksControllers.createBook);

// router.route('/:id');

module.exports = router;
