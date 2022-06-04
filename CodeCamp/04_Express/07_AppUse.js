// MiddleWare are the functions in express which are executed when server has
// a request. It has access to both request and response object.

const express = require('express');
const app = express() ;
const logger = require('./08_logger.js') ;

// Use at the top of the handlers 
// We can also use it to specific paths, just include the path route  
// app.use (logger) ;
app.use ('/api',logger) ; // Applied to every api request

app.get('/', (req, res)=>{
    res.status(200).send('Hello World');
});

app.get('/about', (req, res)=>{
    res.status(200).send('About');
});

app.get('/api/products', (req, res)=>{
    res.status(200).send('Product');
});

app.get('/about/items', (req, res)=>{
    res.status(200).send('Item');
});

// Its cool to have a middleware function working for you 
// but it is definitely hectic to add middleware to each req handler
// Instead we use app.use(logger) to make it accessible to all 
// the handler 

app.listen(4040, ()=>{
    console.log('Server is listening to port 4040');
});
