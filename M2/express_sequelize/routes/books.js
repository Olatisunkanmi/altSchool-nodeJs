const router = require('express').Router();
const bookController = require('../controller/bookController');

router
	.route('/')
	.get(bookController.getAllBooks)
	.post(bookController.createBook);
router
	.route('/:id')
	.put(bookController.updateBook)
	.delete(bookController.deleteBook);

module.exports = router;
