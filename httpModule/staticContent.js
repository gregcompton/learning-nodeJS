const http = require('http');
const fs = require('fs');

// http.createServer((req,res)=>{
//   const readStream = fs.createReadStream('./static/index.html');
//   res.writeHead(200, {'Content-type': 'text/html'});
//   //200 means everything went okay. Response codes can be found here:
//   // https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
//   readStream.pipe(res);
// }).listen(3000);


// http.createServer((req,res)=>{
//   const readStream = fs.createReadStream('./static/example.json');
//   res.writeHead(200, {'Content-type': 'application/json'});
//   readStream.pipe(res);
// }).listen(3000);

http.createServer((req,res)=>{
  const readStream = fs.createReadStream('./static/example.jpg');
  res.writeHead(200, {'Content-type': 'image'});
  readStream.pipe(res);
}).listen(3000);
