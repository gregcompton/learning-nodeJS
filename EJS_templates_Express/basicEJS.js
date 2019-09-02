// noob comments:
// more info about EJS   https://ejs.co/
// remember to npm install express
// remember to npm init --yes to create package.json

const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.get('/:userQuery', (req,res)=>{
  res.render('index', {data: {userQuery: req.params.userQuery}});
  console.log(req.params.userQuery);
});

// when you start the server first navigate to
// http://localhost:3000
// the page will display Cannot /Get because no :userQuery was entered
//
// now navigate to
// http://localhost:3000/books
// the page will display "You Searched For: books"

app.listen(3000);
