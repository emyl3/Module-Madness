var http = require('http');
var final = require('./combine.js');

http.createServer(function (req, res){
  res.writeHead(200);

  res.write(final.result());
  res.write(final.combine());

  res.end();
}).listen(3000);
