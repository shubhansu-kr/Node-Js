const { readFileSync, writeFileSync } = require('fs');
// console.log(fs);

// Parameters : file path and output format;
const content = readFileSync('Dummy.txt', 'utf-8');
console.log(content);

const writeRummy = () => {
    writeFileSync('Rummy.txt', `Copy of Dummy.txt : ${content}.\n`, { flag: 'a' });
    const contentCopy = readFileSync('Rummy.txt', 'utf-8');
    console.log(contentCopy);
}

// {flag : 'a'} is for append mode 
setInterval(writeRummy, 1000);
