const express = require('express');
const app = express();

app.get('/', (req,res)=>{
  res.send('Hello World from express params tutorial');
});

app.get('/example', (req,res)=>{
  res.send('Hitting example route.');
});

// use params when the data is not optional
app.get('/example/:name/:age', (req,res)=>{
  // by params: http://localhost:3000/example/greg/43
  console.log(req.params); // returns object {name:'greg', age:'43'}
  res.send(`example with route params:
            ${req.params.name} : ${req.params.age}`);
});

// use query when data is optional. e.g. sort=byage
app.get('/queryexample/', (req,res)=>{
  // by query: http://localhost:3000/queryexample?tutorial=paramstutorial
  console.log(req.query); // returns object {tutorial: 'paramstutorial'}
  //send multiple data by concatenating with & e.g.
  //http://localhost:3000/queryexample/?tutorial=paramstutorial&sort=byage
  })

app.listen(3000);
