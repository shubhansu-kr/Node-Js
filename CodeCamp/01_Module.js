// Module -> One File : We execute one file but split our code in 
// different modules  

// In common Js : Every file is Module by default ;
// Modules : Encapsulated code (Share minimum ) ;

// Import this greet funciton from greet file 
// const greet = (userName) => {
//     console.log(`Hello ${userName}, Hope you have a good day `);
// };

const userName = require('./02_Names');
const userGreet = require('./03_Greet');

var i = 0 ;

const hell0 = () => {
    userGreet.greet(userName.name[i]);
    i = (++i)%(userName.name.length);    
    console.log(' ') ;
}

// This is a module which uses other modules 
// 02_names.js and 03_greet.js ;

// Using a setInterval to greet different user every second 
setInterval(hell0, 1000);
