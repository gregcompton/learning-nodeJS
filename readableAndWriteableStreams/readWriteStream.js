const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('./example2.txt');
readStream.on('data', (chunk)=>{
  console.log(chunk);
  writeStream.write(chunk);
  console.log('END OF CHUNK \n')
}); //readStream.pipe(writeStream) is the better way to do this.
