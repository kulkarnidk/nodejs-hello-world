var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Welcome to Rupeek family");

});

var port = 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
