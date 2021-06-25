/**
 * 1. Your application has access to the HTTP module, and is able to create a server:
 * 2. The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
 * 3. The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.

 */

var http = require("http");
var url = require('url');

http
  .createServer(function(req, res) {
    //If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("Hello World!"); //write a response to the client
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt);
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
