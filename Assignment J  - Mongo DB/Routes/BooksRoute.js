const booksControllers = require('../Controllers/BooksController');
const router = require('express').Router();

router
	.route('/')
	.get(booksControllers.getAllbooks)
	.post(booksControllers.createBook);

router.route('/request/').get(booksControllers.loanBook);
router.route('/return/').get(booksControllers.returnBook);

module.exports = router;
