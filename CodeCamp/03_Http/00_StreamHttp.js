var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./Rummy.txt', 'utf-8');
    // res.end(text); // Sending the whole file (2MB data | time 12 sec)
    const fileStream = fs.createReadStream('./Rummy.txt', 'utf-8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });
    fileStream.on('error', () => {
        res.end(error);
    });
}).listen(4040);

