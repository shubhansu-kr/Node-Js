// Common JS 

// To add any file or module to the system 
// require is used 

// require ('./00_HelloWorld.js')
// or we can store a refrence 
const helloWorld = require('./00_HelloWorld.js')

console.log(helloWorld);

// calling the imported function 
helloWorld.myFunc();

// printing the returning value     
console.log(helloWorld.addNum(3, 5));
