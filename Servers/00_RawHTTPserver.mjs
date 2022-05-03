// Availale Modules - URL , fs , path , os 

import http, { request } from 'http';
import url from 'url';
import fs from 'fs';

// Invalid for es6 syntax 
// const http = require ('http');

// create a port to listen an incoming connection 
// Either read the req, or respond 
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write("Hello Client 00");
    res.end();
});

server.listen(8080, () => {
    console.log("Hello there! Surver up and running");
});

// 1337 - Public Port of codedamn container
// console.log(process.env.PUBLIC_PORT);

// var http = require('http');
// var url = require('url');
// var fs = require('fs');
// var server1 = http.createServer(function (request, response) {
//     var path = url.parse(request.url).pathname;
//     switch (path) {
//         case '/':
//             response.writeHead(200, {
//                 'Content-Type': 'text/plain'
//             });
//             response.write("This is Test Message.");
//             response.end();
//             break;
//         case '/HtmlPage1.html':
//             fs.readFile(__dirname + path, function (error, data) {
//                 if (error) {
//                     response.writeHead(404);
//                     response.write(error);
//                     response.end();
//                 } else {
//                     response.writeHead(200, {
//                         'Content-Type': 'text/html'
//                     });
//                     response.write(data);
//                     response.end();
//                 }
//             });
//             break;
//         case '/HtmlPage2.html':
//             fs.readFile(__dirname + path, function (error, data) {
//                 if (error) {
//                     response.writeHead(404);
//                     response.write(error);
//                     response.end();
//                 } else {
//                     response.writeHead(200, {
//                         'Content-Type': 'text/html'
//                     });
//                     response.write(data);
//                     response.end();
//                 }
//             });
//             break;
//         default:
//             response.writeHead(404);
//             response.write("opps this doesn't exist - 404");
//             response.end();
//             break;
//     }
// });
// server.listen(8082); 