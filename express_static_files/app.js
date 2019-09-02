const express = require('express');
const path = require('path');
const app = express();

// this is middleware to obfuscate the actual file path
// you can use /public and it will resolve to the /static folder
// check it out in the developer pane in chrome
app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'static','index.html'));
});

app.listen(3000);
