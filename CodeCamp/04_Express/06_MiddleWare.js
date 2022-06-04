// MiddleWare are the functions in express which are executed when server has
// a request. It has access to both request and response object.

const express = require('express');
const app = express() ;

const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    
    console.log(method, url, time) ;

    // While using the middleware, we have to respond to the request 
    // Either send the response or pass to the next middleware

    // res.send('something');
    next() ;
};

// req => MiddleWare => res ;
app.get('/', logger, (req, res)=>{
    // If we setup a functionality in home url we have to do it seprately 
    // in about also, so instead we create a function 

    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();
    
    // console.log(method, url, time) ;

    // We can call the function or pass the refrence in the get
    // logger(req); 
    res.status(200).send('Hello World');
});

app.get('/about', logger, (req, res)=>{
    // logger(req) ;
    res.status(200).send('About');
});

app.listen(4040, ()=>{
    console.log('Server is listening to port 4040');
});