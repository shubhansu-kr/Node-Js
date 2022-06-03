const express = require('express');
const app = express();

const path = require('path') ;

// Setup static and middleware 
// Static resources are the files which are not needed to be updated 
// by the server, so they are dumped in a public folder and made available
// to the browser which is used by the browser as required. 
app.use(express.static('./Public'))

app.get('/', (req, res)=>{
    res.status(200).sendFile(path.resolve(__dirname, '../../DummyProject/index.html'));
});

app.get('*', (req, res)=>{
    res.status(404).send('What is this Place!');
});

app.listen(4040, () => {
    console.log("Server is listening on port 4040");
});