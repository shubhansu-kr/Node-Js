// Path Module : Inbuilt module to operate with paths 

const path = require('path');
// console.table(path) ;

// The platform-specific file separator. '\' or '/'.
console.log(path.sep)

const newFilePath = path.join('../WhyThis', 'Colabery', 'Colabery', 'D');
console.log(newFilePath);

console.log(path.basename(newFilePath));
console.log(path.resolve(__dirname, 'WhyThis', 'Colabery', 'Colabery', 'D'));
