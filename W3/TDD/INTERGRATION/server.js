const http = require('http');
const fs = require('fs');
const path = require('path');

const booksDbPath = path.join(__dirname, 'db', 'books.json');
let booksDB = []

const PORT = 4000
const HOST_NAME = 'localhost';

const requestHandler = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/books' && req.method === 'GET') {
        getAllBooks(req, res);
    } else if (req.url.startsWith('/books?id') && req.method === 'GET') {
        getBookById(req, res)
    } else if (req.url === '/books' && req.method === 'POST') {
        addBook(req, res);
    } else if (req.url === '/books' && req.method === 'PUT') {
        updateBook(req, res);
    } else if (req.url.startsWith('/books?id') && req.method === 'DELETE') {
        deleteBook(req, res);
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({
            message: 'Method Not Supported'
        }));
    }
}


const getAllBooks = function (req, res) {
    return res.end(JSON.stringify(booksDB));
}

const getBookById = function (req, res) {
    const bookId = req.url.split("=")[1]
    const book = booksDB.find((book) => {
        return book.id == bookId
    })

    if (!book) {
        res.end("Book not found!")
    }

    res.end(JSON.stringify(book));
}


// CREATE A BOOK ==> POST: /books
const addBook = function (req, res) {
    const body = [];

    req.on('data', (chunk) => { // data event is fired when the server receives data from the client
        body.push(chunk); // push each data received to the body array
    });

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString(); // concatenate raw data into a single buffer string
        const newBook = JSON.parse(parsedBody); // parse the buffer string into a JSON object

        // get ID of last book in the database
        const lastBook = booksDB[booksDB.length - 1];
        const lastBookId = lastBook.id;
        newBook.id = lastBookId + 1;

        //save to db
        booksDB.push(newBook);
        fs.writeFile(booksDbPath, JSON.stringify(booksDB), (err) => {
            if (err) {
                console.log(err);
                res.writeHead(500);
                res.end(JSON.stringify({
                    message: 'Internal Server Error. Could not save book to database.'
                }));
            }

            res.writeHead(201);
            res.end(JSON.stringify(newBook));
        });
    });
}


// UPDATE A BOOK ==> PUT: /books
const updateBook = function (req, res) {
    const body = [];

    req.on('data', (chunk) => { // data event is fired when the server receives data from the client
        body.push(chunk); // push each data received to the body array
    });

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString(); // concatenate raw data into a single buffer string
        const bookToUpdate = JSON.parse(parsedBody); // parse the buffer string into a JSON object

        // find the book in the database
        const bookIndex = booksDB.findIndex((book) => {
            return book.id === bookToUpdate.id;
        });

        // Return 404 if book not found
        if (bookIndex === -1) {
            res.writeHead(404);
            res.end(JSON.stringify({
                message: 'Book not found'
            }));
            return;
        }

        // update the book in the database
        booksDB[bookIndex] = { ...booksDB[bookIndex], ...bookToUpdate };

        // save to db
        fs.writeFile(booksDbPath, JSON.stringify(booksDB), (err) => {
            if (err) {
                console.log(err);
                res.writeHead(500);
                res.end(JSON.stringify({
                    message: 'Internal Server Error. Could not update book in database.'
                }));
            }

            res.end(JSON.stringify(bookToUpdate));
        });
    });
}


// DELETE A BOOK ==> DELETE: /books
const deleteBook = function (req, res) {
    const bookId = req.url.split("=")[1]
    // Remove book from database
    const bookIndex = booksDB.findIndex((book) => {
        return book.id === parseInt(bookId);
    })

    if (bookIndex === -1) {
        res.writeHead(404);
        res.end(JSON.stringify({
            message: 'Book not found'
        }));

        return;
    }

    booksDB.splice(bookIndex, 1); // remove the book from the database using the index

    // update the db
    fs.writeFile(booksDbPath, JSON.stringify(booksDB), (err) => {
        if (err) {
            console.log(err);
            res.writeHead(500);
            res.end(JSON.stringify({
                message: 'Internal Server Error. Could not delete book from database.'
            }));
        }

        res.end(JSON.stringify({
            message: 'Book deleted'
        }));
    });

}



const server = http.createServer(requestHandler)

server.listen(PORT, HOST_NAME, () => {
    booksDB = JSON.parse(fs.readFileSync(booksDbPath, "utf8"))
    console.log(`Server is listening on ${HOST_NAME}:${PORT}`)
})

module.exports = server