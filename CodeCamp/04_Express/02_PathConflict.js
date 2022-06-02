// Express basics 

const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./DummyProject/index.html');

// PathConflict: So we are sending the index.html file which has other two
// files style.css and script.js linked internally with it to the client.
// However when the client's browser is looking for the linked css and js 
// files in the html it requests the files from the server again which is not
// provided by the server in the current state, and thus the file system is 
// broken due to unavailibility of files. Add the files manually

const homeStyle = readFileSync('./DummyProject/style.css');
const homeScript = readFileSync('./DummyProject/script.js');

const server = http.createServer((req, res) => {
    // req.method -> Returns the http method of req
    // console.log(req.method) ;
    // console.log(req.url) ;
    const url = req.url;

    // Home page
    if (url === '/') {
        // Now it is very important to specify the content type 
        // since the browser treats the send response accordingly. 
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();
    }
    // Style page
    else if (url == '/style.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homeStyle);
        res.end();
    }
    // Script page
    else if (url == '/script.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(homeScript);
        res.end();
    }

    // And if we have any media from local host 
    // else if (url == './mediaPath') {
    //     res.writeHead(200, { 'content-type': 'image/svg+xml' });
    //     res.write(imagePath);
    //     res.end();
    // }

    // About us page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h5>What do you wanna know about us!</h5>');
        res.end();
    }
    // Not Found 404 
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h5>Where are you going! Head back to <a href="/">home</a></h5>');
        res.end();
    }
    // console.log('User hit the Server!');
});

server.listen(4040);
