// we can also import with differnt names 
// import { adder as summation, maxi } from './00_Import.mjs';
import * as util from './00_Import.mjs';

// Instead of importing each object explicitly, we can just export 
// all of the objects using astrix and store it in a obj 

// this function is also being executed in par3.mjs :?
console.log(util); 
console.log(util.adder(3, 54), util.maxi(3, 5));

export const power4 = (num) => {
    return num ** 4;
}

// Export different module obj 
export * as utility from './00_Import.mjs' ;