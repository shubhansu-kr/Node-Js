// File system 

const fs = require('fs');

// Creating a file 
function createFile(name, content) {
    // name-> name of the file in the same dir or specify the path
    // content -> content of new file 
    
    // Async 
    // fs.writeFile(name, content) ;
    // Sync
    fs.writeFileSync(name, content) ;

    // Synchronous and Asynchronous system : 
    // Sync -> creates the file immidiately, however it's a slow process
    // since the node waits for the action to be completed before proceeding 
    // any further 

    // Async -> Queues the file creation task and does the job when convinient
    // to save time and resource.


    console.log('File : '+ name + " created");
}

// Overwritten Dummy.txt if already available 
createFile('Dummy.txt', 'Dummy file created using the JS file system.');

console.log(fs.readdirSync('.'));

// console.log(fs) ;
// console all the object properties 

console.log(fs.readFileSync('./CommonModuleSystem/02_FileSystem.js', 'utf8'));