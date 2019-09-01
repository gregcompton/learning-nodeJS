const fs = require('fs');

//create a folder
 fs.mkdir('tutorial', (err)=>{
   if(err)
     console.log(err);
   else{
     console.log('folder successfully created');
   }
 });

console.log("waiting");
//wait 5 seconds
setTimeout(function() {
  //delete the folder
   fs.rmdir('tutorial', (err)=>{
     if(err)
       console.log(err);
     else{
       console.log('folder successfully deleted');
     }
   });
}, 5000);
