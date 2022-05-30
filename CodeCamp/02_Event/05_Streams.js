// Streams -> Used to handle the strings 
// There are four types of streams :  
//    - Writables : Use to write
//    - Readables : Use to read 
//    - Duplex    : Used to read and write
//    - Transform : Used to transform 


// Used the script to create a big file 
const { writeFileSync } = require('fs');
for (let index = 0; index < 10000; index++) {
    writeFileSync('./Rummy.txt', `Hello World ${index} \n`, { flag: 'a' });
}

// Stream is used to handle big files because variables in js may 
// not be as capable of handling such big memory and it's also 
// not efficient to store such big chunk of data and then process it.

const {createReadStream} = require('fs') ;

const stream = createReadStream('./Rummy.txt', {highWaterMark: 9000}, {encodeURI: 'utf8'}) ;
// default = 64kb
// last buffer = remainder 
// highWaterMark = controlSize
// const stream = createReadStream(path, {highWaterMark: 9000})
// const stream = createReadStream(path, {encoding: 'utf8'})

stream.on('data', (result)=>{
    console.log(result) ;
})