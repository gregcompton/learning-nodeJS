const fs = require('fs');
console.log("Create a file demo");

//create a file
 fs.writeFile('example.txt',"this is an example", (err)=>{
   if(err){
     console.log(err);
   }
   else{
     console.log('File successfully created');
     fs.readFile('example.txt','utf8', (err,file)=>{
       if(err)
         console.log(err);
       else {
         console.log(file);
       }
     });
   }
 });
