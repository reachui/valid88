var connect = require('connect');
var serveStatic = require('serve-static');
var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(8082, 'localhost');
// console.log('Server running at http://localhost:8082/');

var src = 'C:\\_reachui_dev\\valid88\\js';

connect().use(serveStatic(src)).listen(8082, function(){
    console.log('Server running on 8082...');
});
