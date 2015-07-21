/*
var application = require('express')();
var http = require('http').Server(application);
/*
var io = require('socket.io').listen(http);
var port = 3000;


io.on('connection', function (socket) {
    socket.on('testConnect', function (info) {
        socket.emit("WOW IT WORKED");
    });
           
});

http.listen(port, function () {
    console.log('[LocateFriends] Listening on *:' + port);
});
*/
var net = require('net');
var port = 3000
    console.log("Listening on: " + port + '...');
var server = net.createServer(function (socket) {
  
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(3000);