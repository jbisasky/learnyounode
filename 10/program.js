var net = require('net')
var strftime = require('strftime');
var portnum = process.argv[2];

var server = net.createServer(function (socket) {
  var date = new Date();
  socket.write(strftime('%F %H:%M\n'), date);
  socket.end();
});
server.listen(portnum);
