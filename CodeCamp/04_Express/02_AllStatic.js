const express = require('express');
const app = express();

const path = require('path') ;

// index.html is always the default file served to the client, when 
// they hit the route of the folder, so making index.html availabe in the 
// static resource eliminates the need to send index file on every request. 

app.use(express.static('./Public')) ;


// Don't need to respond to the root request
// app.get('/', (req, res)=>{
//     //
// });

app.get('*', (req, res)=>{
    res.status(404).write('What is this place!') ;
});

app.listen(4040, ()=>{
    console.log('Server listening on port 4040');
});