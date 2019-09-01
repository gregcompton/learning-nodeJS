const fs = require('fs');

// fs.readFile('./large.txt', 'utf8', (err, file)=>{
//   if(err){
//     console.log("in the error");
//     console.log(err);
//   }
//   else{
//     console.log("in the else");
//     console.log(file);
//   }
// });

const readStream = fs.createReadStream('./large.txt', 'utf8');
readStream.on('data', (chunk)=>{
  console.log(chunk);
  console.log("\n THE END")
});
