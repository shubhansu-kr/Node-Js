// Middlewares in Express
// Middleware functions are functions that have access to the request 
// object (req), the response object (res), and the next middleware 
// function in the application’s request-response cycle. The next 
// middleware function is commonly denoted by a variable named next.

// Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.
// If the current middleware function does not end the request-response 
// cycle, it must call next() to pass control to the next middleware 
// function. Otherwise, the request will be left hanging.
// Application-level middleware
// Bind application-level middleware to an instance of the app 
// object by using the app.use() and app.METHOD() functions, where 
// METHOD is the HTTP method of the request that the middleware 
// function handles (such as GET, PUT, or POST) in lowercase.

// This example shows a middleware function with no mount path. 
// The function is executed every time the app receives a request.

const express = require('express');
const app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

// This example shows a middleware function mounted on the 
// /user/:id path. The function is executed for any type of HTTP 
// request on the /user/:id path.

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

// Router-level middleware
// Router-level middleware works in the same way as application-level 
// middleware, except it is bound to an instance of express.Router().

const router = express.Router()
// Load router-level middleware by using the router.use() and 
// router.METHOD() functions.

// The following example code replicates the middleware system 
// that is shown above for application-level middleware, by using 
// router-level middleware:

// a middleware function with no mount path. This code is 
// executed for every request to the router

router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
