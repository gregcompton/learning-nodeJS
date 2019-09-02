// noob comments:
// more info about EJS   https://ejs.co/
// remember to npm install express
// remember to npm init --yes to create package.json
// npm install ejs

const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.get('/:userQuery', (req,res)=>{
  //
  res.render('index2', {data: {userQuery: req.params.userQuery,
                              searchResults : ['book1', 'book2', 'book3'],
                              loggedIn : true,
                              username : 'Greg'}});
});

app.listen(3000);
