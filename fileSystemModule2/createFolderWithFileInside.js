const fs = require('fs');

//create a folder
 fs.mkdir('tutorial', (err)=>{
   if(err)
     console.log(err);
   else{
     console.log("folder created successfully\n");
     fs.writeFile('./tutorial/example.txt', "some example text", (err)=>{
       if(err)
        console.log(err);
      else
        console.log("file created successfully");
     });
   }
 });
