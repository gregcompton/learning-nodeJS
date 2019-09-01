//you can't delete a folder with a file inside.
//you must first delete all of the files in the folder
//then call rmdir
// OR
// do this

const fs = require('fs');

//create a folder with multiple files inside
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
     fs.writeFile('./tutorial/example2.txt', "some example text2", (err)=>{
       if(err)
        console.log(err);
      else
        console.log("file created successfully");
     });
   }
 });


//First going to delete the files
//console.log("waiting for the file system to catch up...going to delete some files next");
//wait a few seconds
setTimeout(function() {
  fs.readdir('tutorial',(err, files)=>{
    if(err)
      console.log(err);
    else{
      console.log('\nFinished readdir. These are the files in the folder:')
      console.log(`${files}\n`);
      for(let file of files){
        fs.unlink('./tutorial/' + file, (err)=>{
          if(err){
            console.log(err);
          }
          else{
            console.log(`${file} deleted successfully`);
          }
        })
      }
    }
  })
}, 3000);

//wait a few seconds
//console.log("waiting for the file system to remove the files from the folder");
setTimeout(function(){
  fs.rmdir('tutorial', (err)=>{
    console.log('\nAttempting to delete the folder now.')
    if(err){
      console.log(err);
    }
    else{
      console.log('folder successfully deleted');
    }
  })
}, 5000);
