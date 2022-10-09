const router = require('express').Router();
const bookController = require('../controller/bookController');

router.route('/').get(bookController.getAllBooks);

module.exports = router;
