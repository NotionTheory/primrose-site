"use strict";
// start the HTTP server
let path = process.env.PWD || ".";
if(require("os").platform() === "win32"){
  path = path.replace(/^\/(\w+)/, "$1:");
}

const http = require("http"),
  webServer = require("./server/webServer")(path),
  appServer = http.createServer(webServer),
  port = process.env.PORT || 80;

console.log("Listening on port " + port);
appServer.listen(port);

// start the WebSocket server
const webSocketServer = require("./server/webSocketServer"),
socketio = require("socket.io"),
io = socketio.listen(appServer);
io.sockets.on("connection", webSocketServer);

// start the browser
require("./server/starter")(false, port);