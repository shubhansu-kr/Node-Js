const greet = (userName) => {
    console.log(`Hello ${userName}, Hope you have a good day `);
};

// Export only what's necessary 
module.exports.greet = greet;