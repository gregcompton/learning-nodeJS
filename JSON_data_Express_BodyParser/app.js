// noob reminders:
// remember to npm install express
// remember to npm init --yes to create package.json
// this example requires npm install body-parser

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false})); // this allows us to parse URL encoded forms
app.use(bodyParser.json());

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req,res)=>{
  console.log(req.body);
  // do some database work here
  res.json({success : true});
});

app.listen(3000);
