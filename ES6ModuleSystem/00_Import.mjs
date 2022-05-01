const adder = (a, b) => {
    return a + b;
};

const subtractor = (a, b) => {
    return a - b;
}

const cube = (a) => {
    return a ** 3;
}

// For Common JS syntax, we do 
// module.exports.myAdder = adder;

// In ES6, we have different modes of exports 

// Default mode 
// only one default export per module 
// export default adder ;

// Now to export multiple objects 
export {
    adder,
    subtractor,

    // to change the name of the exported obj : 'as' keyword is used  
    cube as cubic 
};

