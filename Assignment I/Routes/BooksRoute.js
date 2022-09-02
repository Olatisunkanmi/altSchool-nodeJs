const booksControllers = require('../Controllers/BooksController');
const router = require('express').Router();

router.route('/').get(booksControllers.getAllbooks);
module.exports = router;
