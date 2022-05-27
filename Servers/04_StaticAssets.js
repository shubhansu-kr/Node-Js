// WE can use the static site when we dont want to send the data to the 
// client via request. 

const express = require('express') ;
const path = require('path');
const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../'))) ;

app.listen(4040) ;