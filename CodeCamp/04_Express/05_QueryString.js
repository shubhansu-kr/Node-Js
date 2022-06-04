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

app.get('/api/products/:productID', (req, res) => {
    console.log(req.params);

    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID));

    if (!singleProduct) {
        res.status(404).send('Product Not found mate!');
    }
    res.json(singleProduct);
});

app.get('/api/products/:productId/reviews/:reviewsId', (req, res) => {
    console.log(req.params);
    res.send('Hello There');
});

// Let's setup some querystring 
app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    console.log(search);
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('No result found') ;
        return res.status(200).json({ success: true, data: [] });
    }
    // We cannot send multiple response to the client for one request 
    // so we need to return the control once we send the response, coz else 
    // js keeps reading the code and sends multiple response

    return res.status(200).json(sortedProducts);
    // res.send('hell');
});

app.listen(4040, () => {
    console.log('server is listening on port 4040');
});