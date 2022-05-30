// const { readFile, writeFile } = require('fs');
const { readFile, writeFile } = require('fs').promises;

// const util = require ('util') ;
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                // console.log(err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

// getText('./Dummy.txt')
//     .then((result) => (console.log(result)))
//     .catch((err) => { console.log(err) });

// const start = async () => {
//     try {
//         const first = await getText('./Dummy.txt');
//         const second = await getText('./Rummy.txt') ;
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
//     }
// };

const start = async () => {
    try {
        const first = await readFile('./Dummy.txt', 'utf-8');
        const second = await readFile('./Rummy.txt', 'utf-8') ;
        console.log(first,'\n', second);
        await writeFile('./Dummy.txt', `This is Awesome! ${first}`, {flag: 'a'});
    } catch (error) {
        console.log(error);
    }
};

start();

