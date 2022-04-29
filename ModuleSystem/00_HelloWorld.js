console.log("Hello World :)");

function addNum(a, b) {
    return a + b;
};

module.exports.a = 100; // Makes object available for export

module.exports.myFunc = () => {
    console.log("This function is exported");
};

module.exports.addNum = addNum; // Exporting pre defined function

// WE can also use the exports without module object, 
exports.b = 200; // Works just fine 

// exports is a predefined object in js and if we use
// exports = {
//   a : 42 ,
//   b : 'ksdf' 
// }

// It will overwrite the predefined object and our values wont be 
// exported. however if we use it with module object, it wont overwrite 
// anything and work justfine 

// Overwrites all other exports like myFunc, addNum etc.
// module.exports = {
//     x: "skjaf",
//     y: 342
// }