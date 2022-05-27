GET /api/books should return the latest 

booksDirectory variable  
The route GET `/api/books/:id` should return the correct book object when requested  

The route POST `/api/books` should append a book to the `booksDirectory` memory variable. It should also return the appended book object as JSON  

The route PUT `/api/books` should try to find the passed book by "id". If the book is not found, return a status code of 404 with an appropriate message  

On the route PUT `/api/books` if the book is found, it should replace all the undefined parameters. This means if only title is passed in the body, it should only update title and nothing else.  

The route DELETE `/api/books/:id` should delete the book if present. Once the book is deleted, the call to GET `/api/books/:id` should return 404 too  
