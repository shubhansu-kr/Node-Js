const express = require('express');
const app = express();

const {products} = require('../../data.js');

app.get('/', (req, res) => {
    res.json(products);
});

app.listen(4040, () => {
    console.log('Server is listening on port 4040...');
})