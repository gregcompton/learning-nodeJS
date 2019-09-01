const fs = require('fs');
console.log("Rename a file demo");

//rename a File
 fs.rename('example.txt', 'example2.txt', (err)=>{
   if(err)
     console.log(err);
   else {
     console.log('rename successfully');
   }
 });
