const http = require('http') ;

// Creating server the normal way
// const server = http.createServer((req, res)=> {
//     res.end('Server Up and Running!') ;
// });

// Creating server using EventsEmitter API 
const server = http.createServer() ;
// emits request event
// subscribe to it -> listen to it -> respond to it
server.on('request', (req, res) => {
    res.end('Server Up and Running!');
});

server.listen(4040) ;