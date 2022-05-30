const EventEmitter = require('events');
// Event is a builtin module heavily used in nodejs programs 

// Create an instace of our class
const customEmmiter = new EventEmitter();

// on -> (method) listen for an event 
// emit -> (method) emit an event

// response is the name of the event 
customEmmiter.on('response', ()=>{
    console.log(`data recieved`);
});

// response strings should match
// customEmmiter.emit('response');

customEmmiter.on('response', (name, id)=>{
    console.log(`data recieved from ${name} (uid: ${id})`);
});

// Executes both the on method response
// emit should be placed after response
// customEmmiter.emit('response');

// We can also pass parameters to the event listener using the call emit
customEmmiter.emit('response', 'shubh', 21);
// Listener with no parameter is executed without paramerters 

// Events are core building block of node modules. Important stuff.