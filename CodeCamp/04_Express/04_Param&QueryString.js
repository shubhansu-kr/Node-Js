const express = require('express');
const app = express();

const { products } = require('../../data.js');

app.get('/', (req, res) => {
    res.status(200).send('<a href =\'./api/products\'>Click here</a>');
});

app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    // res.json(products)
    res.json(newProduct);
});

// app.get('/api/products/1', (req, res)=>{
//     const singleProduct = products.find((product)=>product.id === 1);
//     res.json(singleProduct) ;
// });

// Instead of hardcoding each request, we can simply add route parameters
// to the url which genralises the element search

app.get('/api/products/:productID', (req, res) => {
    console.log(req.params);

    // req.params always returns a string
    const { productID } = req.params;

    // convert string into number to match the operands.
    const singleProduct = products.find((product) => product.id === Number(productID));

    // Product may not be available in the data base 
    // So the server responses with a undefined value 

    // TO tackle this situation, we extablish a if block to catch the error
    if (!singleProduct) {
        res.status(404).send('Product Not found mate!');
    }
    res.json(singleProduct);
});

// However, sometimes route parameter can be a little overwhelming
app.get('/api/products/:productId/reviews/:reviewsId', (req, res) => {
    console.log(req.params);
    res.send('Hello There');
});

app.listen(4040, () => {
    console.log('server is listening on port 4040');
});