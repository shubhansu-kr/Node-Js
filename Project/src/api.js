const router = require('express').Router()
const books = require('./data')

let booksDirectory = books

router.get('/reset', function (req, res) {
    booksDirectory = books
    res.send('ok')
})

router.get('/books', function (req, res) {
    res.send(booksDirectory)
})

router.get('/books/:id', function (req, res) {
    // add code
    const {id} = req.params
    let bookToFind = booksDirectory.find(book=>book.isbn==id)
    if(!bookToFind) {
        return res.status(404).send('not found')
    }
    res.send(bookToFind)
})

router.post('/books', function (req, res) {
    const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories,
    } = req.body
    booksDirectory.push({...req.body})
    res.send(req.body)
})

router.put('/books/:id', function (req, res) {
    const { id } = req.params
    if (!booksDirectory.find(book=>book.isbn==id)) {
        res.status(404);
        res.send("No book found with this ID")
    }else {
       bookToUpdate = booksDirectory.find(book=>book.isbn==id);
       bookToUpdate = {
        ...bookToUpdate,...req.body
       } 
        booksDirectory=booksDirectory.map(book => {
           if (book.isbn == id) return book={...bookToUpdate}
           return book;
       })
       res.send( booksDirectory);

    }
    const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories,
    } = req.body
})

router.delete('/books/:id', function (req, res) {
    // add code
    const {id} = req.params;
    let bookToDelete = booksDirectory.find(book=>book.isbn==id)
    console.log({ id, bookToDelete })
    if(bookToDelete) {
        booksDirectory = booksDirectory.filter(book => book.isbn !==id)
    res.send("Deleted the book")
        }
    else{

    res.status(404).send("Book not found");

    }
})

module.exports = router