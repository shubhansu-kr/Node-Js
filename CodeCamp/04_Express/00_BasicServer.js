// Express basics 

const http = require('http');

const server = http.createServer((req, res) => {
    // req.method -> Returns the http method of req
    console.log(req.method) ;
    console.log(req.url) ;
    const url = req.url;

    if (url === '/') {
        // Home page
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>Server\'s Up!</h1>');
        res.end();
    } else if (url === '/about') {
        // About us page
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h5>What do you wanna know about us!</h5>');
        res.end(); 
    } else {
        // Not Found 
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h5>Where are you going! Head back to <a href="/">home</a></h5>');
        res.end(); 
    }
    console.log('User hit the Server!');
});

server.listen(4040) ;
