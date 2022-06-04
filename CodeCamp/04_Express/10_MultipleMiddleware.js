const express = require('express');
const app = express() ;
const logger = require('./08_logger.js') ;
const authorise = require('./09_Authorise.js') ;

// app.use ('/api',logger) ; // Applied to every api request
// To use multiple middleware function we use an array
app.use([logger, authorise]);

app.get('/', (req, res)=>{
    res.status(200).send('Hello World');
});

app.get('/about', (req, res)=>{
    res.status(200).send('About');
});

app.get('/api/products', (req, res)=>{
    res.status(200).send('Product');
});

// app.get('/api/items',[logger, authorise], (req, res)=>{
//     res.status(200).send('Item');
// });

app.get('/api/items', (req, res)=>{
    res.status(200).send('Item');
});

app.listen(4040, ()=>{
    console.log('Server is listening to port 4040');
});