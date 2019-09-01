const fs = require('fs');
const zlib = require('zlib');

// going to create a transform stream.
// in this case we are going to compress the stream.
const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('./large2.txt.gz');
const writeStream = fs.createWriteStream('./large3.txt');
readStream.pipe(gunzip).pipe(writeStream);
