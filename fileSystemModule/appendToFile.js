const fs = require('fs');
console.log("Append to a file demo");

//append to a file
 fs.appendFile('example.txt', "\nadding this to the file", (err)=>{
   if(err)
     console.log(err);
   else
     console.log("text added to file successfully");
 });
