"use strict";
// start the HTTP server
const options = require("./server/options").parse(process.argv),
  http = require("http"),
  path = options.path || ".",
  webServer = require("./server/webServer")(path),
  appServer = http.createServer(webServer),
  port = options.port || process.env.PORT || 80;

console.log("Listening on port " + port);
console.log("Server from directory " + path);
appServer.listen(port);

// start the WebSocket server
const webSocketServer = require("./server/webSocketServer"),
socketio = require("socket.io"),
io = socketio.listen(appServer);
io.sockets.on("connection", webSocketServer);

// start the browser
require("./server/starter")(false, port, options.url);