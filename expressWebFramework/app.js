// express is a web framework for NODE.js
// http://expressjs.com/

const express = require('express');
const app = express();

app.get('/', (req,res)=>{
  res.send('Hello World from express');
});

app.listen(3000);
