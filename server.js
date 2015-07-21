var application = require('express')();
var http = require('http').Server(application);
var io = require('socket.io').listen(http);
var port = 3000;


io.on('connection', function (socket) {
    socket.on('testConnect', function (info) {
        socket.emit("WOW IT WORKED")
    });
           
}


rl.on('line', function (cmd) {
    if (cmd == 'stop') {
        process.exit();
    }
});
http.listen(port, function () {
    console.log('[LocateFriends] Listening on *:' + port);
});