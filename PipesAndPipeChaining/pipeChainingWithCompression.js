const fs = require('fs');
const zlib = require('zlib');

// going to create a transform stream.
// in this case we are going to compress the stream.
const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./large.txt', 'utf8');
const writeStream = fs.createWriteStream('./large2.txt.gz'); //you can open the resulting .gz file wih a zip archive app like 7-zip
readStream.pipe(gzip).pipe(writeStream);
