'use strict';

var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, (err, data) => {
  if (err) throw err;
  var str = data.toString();
  var res = str.split('\n');
  console.log(res.length-1);
});
