// HTTP defines a set of request methods to indicate the 
// desired action to be performed for a given resource. 
// Although they can also be nouns, these request methods 
// are sometimes referred to as HTTP verbs. Each of them 
// implements a different semantic, but some common features 
// are shared by a group of them: e.g. a request method can 
// be safe, idempotent, or cacheable.

// The GET method requests a representation of the specified resource. 
// Requests using GET should only retrieve data.

// The HEAD method asks for a response identical to a GET request, 
// but without the response body.

// The POST method submits an entity to the specified resource, 
// often causing a change in state or side effects on the server.

// The PUT method replaces all current representations of the target 
// resource with the request payload.

// The DELETE method deletes the specified resource.

// The CONNECT method establishes a tunnel to the server 
// identified by the target resource.

// The OPTIONS method describes the communication options 
// for the target resource.

// The TRACE method performs a message loop-back test along 
// the path to the target resource.

// The PATCH method applies partial modifications to a resource.

// Basic routing
// Routing refers to determining how an application responds 
// to a client request to a particular endpoint, which is a 
// URI (or path) and a specific HTTP request method (GET, POST, and so on).

// Route definition takes the following structure:

// app.METHOD(PATH, HANDLER)

// app is an instance of express.
// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.
// HANDLER is the function executed when the route is matched.

// Respond with Hello World! on the homepage:
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// Respond to POST request on the root route (/), the application’s home page:
// app.post('/', function (req, res) {
//   res.send('Got a POST request')
// })

// Respond to a DELETE request to the /user route:
// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user')
// })

const express = require ('express') ;
const app = express();

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/what-is-my-method', (req, res) => {
    res.send("GET");
});

app.post('/what-is-my-method', (req, res) => {
    res.send("POST");
});

app.put('/what-is-my-method', (req, res) => {
    res.send("PUT");
});

app.delete('/what-is-my-method', (req, res) => {
    res.send("DELETE");
});

app.patch('/what-is-my-method', (req, res) => {
    res.send("PATCH");
});
