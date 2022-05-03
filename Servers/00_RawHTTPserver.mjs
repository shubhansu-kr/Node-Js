// Availale Modules - URL , fs , path , os 

import http from 'http';

// Invalid for es6 syntax 
// const http = require ('http');

// create a port to listen an incoming connection 
// Either read the req, or respond 
const server = http.createServer((req, res) => {
    res.write("Hello Client 00");
    res.end() ;
});

server.listen(4040, ()=>{
    console.log("Hello there! Surver up and running");
});

// 1337 - Public Port of codedamn container 
// console.log(process.env.PUBLIC_PORT);