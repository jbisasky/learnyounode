'use strict';

var concatStream = require('concat-stream');
var http = require('http');
var results = [];
var count = 0;

function printResults() {
  for(var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function callback(response) {
    response.pipe(concatStream(function (data) {
      results[index] = data.toString();
      count++;
      if(count == 3) {
        printResults();
      }
    }));
  });
}

for(var i = 0; i < 3; i++) {
  httpGet(i);
}
