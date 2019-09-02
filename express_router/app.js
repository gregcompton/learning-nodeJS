const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

const people = require('./routes/people');

app.use('/people', people)





app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req,res)=>{
  console.log(req.body);
  // do some database work here
  res.send('successfully posted data');
});

app.listen(3000);
