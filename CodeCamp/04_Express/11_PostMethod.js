const express = require('express');
const app = express();
let { people } = require('../../data.js');

app.use(express.static('./'));
// Parsing the form data 
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.post('/', (req, res) => {
    // console.log(req.body);
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}, Fill another form: <a href=\'/\'>here</a>`)
    }
    else {
        res.status(200).send('Empty form!\n Fill the form again : <a href=\'/\'>here</a>');
    }
});

app.listen(4040, () => {
    console.log('Server is listening to port 4040');
});