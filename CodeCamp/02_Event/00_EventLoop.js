// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

function foo(b) {
    let a = 10
    return a + b + 11
}

function bar(x) {
    let y = 3
    return foo(x * y)
}

const baz = bar(7) // assigns 42 to baz

// Order of operations:

// When calling bar, a first frame is created containing references to 
// bar's arguments and local variables.

// When bar calls foo, a second frame is created and pushed on top of 
// the first one, containing references to foo's arguments and local variables.

// When foo returns, the top frame element is popped out of the stack 
// (leaving only bar's call frame).

// When bar returns, the stack is empty.

// Note that the arguments and local variables may continue to exist, 
// as they are stored outside the stack — so they can be accessed by any 
// nested functions long after their outer function has returned.

// Heap
// Objects are allocated in a heap which is just a name to denote 
// a large (mostly unstructured) region of memory.

// Queue
// A JavaScript runtime uses a message queue, which is a list of messages 
// to be processed. Each message has an associated function that gets 
// called to handle the message.

// At some point during the event loop, the runtime starts handling the 
// messages on the queue, starting with the oldest one. To do so, the 
// message is removed from the queue and its corresponding function is 
// called with the message as an input parameter. As always, calling a 
// function creates a new stack frame for that function's use.

// The processing of functions continues until the stack is once 
// again empty. Then, the event loop will process the next message 
// in the queue (if there is one).

console.log('First task');

setTimeout(() => {
    console.log('Second task');
}, 0);

console.log('Third task');

// Order of queue : first > second > third. 
// However they are queued in order not executed. 
// Output : First > third > second. 

// So basically the requests are registered as callbacks and executed 
// in the end if requests are time or data consuming task.

// Execute short task first :)
// Offload and then execute the callback. 

setInterval(() => { console.log("Hello "); }, 20000);
console.log("World!");

const http = require("http");
const server = http.createServer((req, res) => {
    console.log("Req event");
    res.write("Hello World");
});

server.listen(4040);