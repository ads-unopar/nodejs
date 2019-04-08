const fs = require('fs')
const readableStream = fs.createReadStream('novo.txt');
var writableStream = fs.createWriteStream('copy.txt');
readableStream.pipe(writableStream);