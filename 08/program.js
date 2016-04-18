'use strict';

var concatStream = require('concat-stream');
var http = require('http');
var url = process.argv[2];

var str = '';

http.get(url, function callback(response) {
  response.pipe(concatStream(function (data) {
    // `data` is a complete Buffer object containing the full data
    var str = data.toString();
    console.log(str.length);
    console.log(str);
  }));
});
