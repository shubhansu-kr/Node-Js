// we can also import with differnt names 
// import { adder as summation, maxi } from './00_Import.mjs';
import * as util from './00_Import.mjs';

// Instead of importing each object explicitly, we can just export 
// all of the objects using astrix and store it in a obj 
console.log(util);f
console.log(util.adder(3, 54), util.maxi(3, 5));

