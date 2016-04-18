'use strict';

// using regex
// var fs = require('fs');
// var path = process.argv[2];
// var ext = process.argv[3];
// var re = new RegExp('.' + ext + '$');
//
// var files_arr = [];
// fs.readdir(path, (err, list) => {
//   if(err) throw err;
//   for(var i = 0; i < list.length; i++) {
//     if(list[i].match(re)) {
//       files_arr.push(list[i]);
//     }
//   }
//   for(var i = 0; i < files_arr.length; i++) {
//     console.log(files_arr[i]);
//   }
// });

// using path
var fs = require('fs');
var path = require('path');

var files_arr = [];
fs.readdir(process.argv[2], (err, list) => {
  if(err) throw err;
  list.forEach(function(file) {
    if(path.extname(file) === '.' + process.argv[3]) {
      console.log(file);
    }
  });
});
