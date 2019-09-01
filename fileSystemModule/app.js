const fs = require('fs');
console.log("hello");

//create a file
// fs.writeFile('example.txt',"this is an example", (err)=>{
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log('File successfully created');
//     fs.readFile('example.txt','utf8', (err,file)=>{
//       if(err)
//         console.log(err);
//       else {
//         console.log(file);
//       }
//     });
//   }
// });

//rename a File
// fs.rename('example.txt', 'example2.txt', (err)=>{
//   if(err)
//     console.log(err);
//   else {
//     console.log('rename successfully');
//   }
// });

//append to a file
// fs.appendFile('example.txt', "\nadding this to the file", (err)=>{
//   if(err)
//     console.log(err);
//   else
//     console.log("text added to file successfully");
// });

//delete a file
fs.unlink('example.txt', (err)=>{
     if(err)
       console.log(err);
     else
       console.log("successfully deleted the file");
   });
