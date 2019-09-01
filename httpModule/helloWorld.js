const http = require('http');
const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.write('Hello World from nodejs...again');
    res.end();
  }
  else{
    res.write('using some other domain');
    res.end();
  }
});

server.listen('3000');

// now go to your web browser and enter
// http://localhost:3000/
//Response will be from "if statement"

// If you use http://localhost:3000/*anything else
// response will come from "else" statement
}
