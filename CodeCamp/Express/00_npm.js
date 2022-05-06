// npm comes preinstalled with node 
// npm version may be different from the node version 

// npm is a node package manager which allow us to use packages 
// created by other users in our project to save time and effort 
// and prevents the reinvention of wheel 

// npm --version 

// There are two ways of installing packages/dependencies in npm
// 1. Either locally : Package intended to be used in particular project only  
// npm install <packageName> or npm i <packageName> (preferred).

// 2. Or Globally : Packages intented to be used in more than one project 
// Pass -g flag for global dependencies 
// npm install -g <packageName> 

// package.json - Manifest file (Stores info about package/project).

// Manual approach: Create a package.json file in the root and then create 
// each property manually.

// npm init (Step by Step __ press enter to skip)
// npm init -y (default properties).

// After creation of package.json file , we can install dependencies
// which will appear in the package.json file.

// intall lodash locally 
// Once you install the package locally, following events will occur 

// 1. A new folder called node_module is created in the root directory
// 2. Dependency files are stored in the node module file within a directory
//    with name same as the dependency. 
// 3. A package-lock.json file is also created inside the node module 
//    as well as the rool directory.
// 4. If the installed package has further dependencies they are also 
//    installed locally and stored in node-module directory.

const _ = require('lodash');
const items = [3, [5, [1, [7, 9, [34, 54, [34, 43, 54, [12]]]]]]];
console.log(items);

// using the flatMapDeep method of lodash module 
const newItems = _.flatMapDeep(items);
console.log(newItems);

