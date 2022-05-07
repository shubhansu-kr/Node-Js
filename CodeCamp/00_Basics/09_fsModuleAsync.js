const { readFile, writeFile } = require('fs');

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

