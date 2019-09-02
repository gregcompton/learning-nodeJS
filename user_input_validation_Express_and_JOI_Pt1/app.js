// noob reminders:
// remember to npm install express
// remember to npm init --yes to create package.json
// this example requires npm install body-parser
// this example requires npm install joi

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false})); // this allows us to parse URL encoded forms

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req,res)=>{
  const schema = Joi.object().keys({
    email : Joi.string().trim().email().required(),
    password : Joi.string().min(5).max(10).required()
  });
  Joi.validate(req.body, schema,(err,result)=>{
    if(err){
      console.log(err);
      res.send('an error has occurred');
    }
    console.log(result);
    res.send('successfully posted data');
  })

});

app.listen(3000);
