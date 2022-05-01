// To import from two different files, There are various ways 

// 1. Multi level Importing - Import obj of base to derive and derive to 
// derive2 and so on 

import {power4, utility} from './02_Part2.mjs'

console.log(power4(4));

// Error : Util is not exported  
// console.log(util.adder(3, 54), util.maxi(3, 5));

// now that utility is imported 
console.log(utility.cubic(3)) ;
console.log(utility) ;