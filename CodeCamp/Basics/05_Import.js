console.log('flag 1');
require('./04_MindGrenade');

// The imported function is executed right after require statement

console.log("Inside import");

// When we import module, the module is wrapped in a 
// function and then exported, so if there are any function calling 
// or console logs in the imported module then they are executed in 
// the current module. 

// Will discuss more on this later in the series 