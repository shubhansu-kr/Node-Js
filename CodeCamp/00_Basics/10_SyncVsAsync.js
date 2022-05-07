// Sync : Completes the task first and then moves forward to any other task

const { readFileSync, writeFileSync } = require('fs');
// console.log(fs);

console.log('Task 1 started');
// Parameters : file path and output format;
const content = readFileSync('Dummy.txt', 'utf-8');
// console.log(content);

const writeRummy = () => {
    writeFileSync('Rummy.txt', `Copy of Dummy.txt : ${content}.\n`, { flag: 'a' });
    const contentCopy = readFileSync('Rummy.txt', 'utf-8');
    // console.log(contentCopy);
    console.log('Task 1 completed');
}

// {flag : 'a'} is for append mode 
writeRummy();
console.log('Start task 2');

// Async : Queques the task and moves forward to execute another task 

const { readFile, writeFile } = require('fs');
console.log('Task 2 Started again');
readFile('Dummy.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log(res);
    }
});

readFile('Dummy.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = res;
    readFile('Dummy.txt', 'utf-8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res;
        writeFile('Rummy.txt', `${first}\n${second}\n`, (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('File created sucessfully :)');
        });
    });
});
console.log('Task 2 started ');

