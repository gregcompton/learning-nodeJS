const fs = require('fs');
console.log("hello");

//delete a file
fs.unlink('example.txt', (err)=>{
     if(err)
       console.log(err);
     else
       console.log("successfully deleted the file");
   });
