// This will create add random data to a .txt file.
// run it as many times as you need in order to generate the file size you require
// i<1000 seems to be the limit for running this before it generates errors



//maxI<10000 = 700MB , but it throws errors
//maxI<1000 = 10MB
//maxI<100 = 100KB
const maxI = 100;


const fs = require('fs');
//console.log("Create a file demo");

//create a file
 fs.writeFile('large.txt',"this is the first line", (err)=>{
   if(err){
     console.log(err);
   }
   else{
     console.log('File successfully created');
   }
 });

var text = "";

for (var i = 0; i < maxI; i++) {
   text = text + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
   fs.appendFile('large.txt', text, (err)=>{
     if(err)
       console.log(err);
     else{
       //console.log("text added to file successfully");
     }
   });
 }
