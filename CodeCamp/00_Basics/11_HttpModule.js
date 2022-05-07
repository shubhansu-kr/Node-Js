const http = require('http');

const server = http.createServer((req, res) => {

    // console.log(req); // Giant object 

    // req : request recieved from the user 
    // res.write('Server is up and running');
    // res.end();

    if (req.url === '/') {
        res.end('Welcome to the home page') ;
    }
    else if (req.url === '/about') {
        res.end ('This a backend genrated web response.');
    }
    else {
        res.end(`<p>OOPS! Can't find what you lookin for. </p>
        <a href="/">Click me</a>
        `);
    }
});

// Listen to localhost:4040 ;
server.listen(4040);
// http://localhost:4040/   : ctrl+click to open in browser 

// when we run the program, server is created up and running and do 
// not goes down automatically.
