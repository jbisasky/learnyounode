'use strict';

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  if (req.method != 'GET') {
    return res.end('send me a GET\n');
  }

  var urlObj = url.parse(req.url, true);
  var pathname = urlObj.pathname;

  if(pathname == '/api/parsetime') {
    var date = new Date(urlObj.query.iso);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var jsonRes = JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    });
    res.write(jsonRes);
    res.end();
    return res;
  }
  else if(pathname == '/api/unixtime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var jsonRes = JSON.stringify({
      unixtime: Date.parse(urlObj.query.iso)
    });
    res.write(jsonRes);
    res.end();
    return res;
  }
  else {
    return res.end('path does not exist\n');
  }

});
server.listen(Number(process.argv[2]));
