//imports
const http = require("http");

//vars
const HOST = process.env.OPENSHIFT_NODEJS_IP;
const PORT = process.env.OPENSHIFT_NODEJS_PORT;

//main
http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Node.js " + process.version);
}).listen(PORT, HOST);

console.log("Server running at http://" + HOST + ":" + PORT + ".");
