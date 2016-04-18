'use strict';

var fs = require('fs');
var path = process.argv[2];
var buf = fs.readFileSync(path);
var str = buf.toString();
var res = str.split('\n');
console.log(res.length-1);
