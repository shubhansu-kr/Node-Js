const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.resolve(__dirname, '../')));

app.post('/data', (req, res) => {
    console.log(req.body);
    res.json({ status: 'ok' });
});

app.listen(4040);