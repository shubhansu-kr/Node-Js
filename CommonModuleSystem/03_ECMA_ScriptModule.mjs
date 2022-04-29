import fs from 'fs' ;

// we cannot read js file in Es6 module system 
// so to instruct the node to read js file we use a mjs extention 
// which tells the node that its a es6 syntax and read the js file for me 

console.log(fs.readFileSync('./CommonModuleSystem/03_ECMA_ScriptModule.mjs', 'utf8'));