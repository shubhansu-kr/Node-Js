// Express basics 

const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./index.html');
// We need to use sync because we are not invoking this read every time the 
// request is coming in, that's why it should always be ready. 

const server = http.createServer((req, res) => {
    // req.method -> Returns the http method of req
    // console.log(req.method) ;
    // console.log(req.url) ;
    const url = req.url;

    if (url === '/') {
        // Home page
        // Now it is very important to specify the content type 
        // since the browser treats the send response accordingly. 
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
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
    // console.log('User hit the Server!');
});

server.listen(4040);
