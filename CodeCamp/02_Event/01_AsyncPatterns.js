// Blocking code 

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Home page");
    }
    else if (req.url === '/about') {
        // Blocking Code : Nested loop
        for(let i = 0; i< 1000; ++i) {
            for(let j = 0; j < 1000; ++j) {
                console.log(`${i} ${j}`)
            }
        }
        res.end("About Us page");
    }
    else {
        res.end(`
        <p> OOPS! Unknown Destination </p>
        <a href='/'>Go Home</a>
        `);
    }
});

server.listen(5000, () => {
    console.log("Server is listening on port 5000");
});

// Use multiple tab to represent multiple users 
// So the Blocking code is present in the about url request, so if a 
// user requests for the about page, it puts a heavy task on the server 
// and thus the user should get a delayed response.

// To our surprise, not only the user which requested for the about page 
// gets a delayed response but all the other responses of the server is 
// also blocked for all the users.

// So It's only wise to use async flavour rather than sync