const express = require('express');
const app = express();

// app.get

// Home page 
app.get('/', (req, res)=>{
    console.log('User hit the home page') ;
    res.status(200).send('HomePage');
});

// About Us page
app.get('/about', (req, res)=>{
    console.log('User hit the about page') ;
    res.status(200).send('What do you want to know about us psyc!');
});

// We dont need to specify the 404 response, That's returned by default

app.all('*', (req, res)=>{
    res.status(404).send('Not Found');
});


// app.post
// app.put
// app.delete

// app.all - Does everything

// app.use 
// app.listen

app.listen('4040', () => {
    console.log('App is listening of port 4040');
});

