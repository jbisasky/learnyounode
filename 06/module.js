var fs = require('fs');
var path = require('path');

function filterDirRe(dir, ext) {
  var re = new RegExp('.' + ext + '$');

  var files_arr = [];
  fs.readdir(dir, (err, list) => {
    if(err) throw err;

    for(var i = 0; i < list.length; i++) {
      if(list[i].match(re)) {
        files_arr.push(list[i]);
      }
    }

    for(var i = 0; i < files_arr.length; i++) {
      console.log(files_arr[i]);
    }

  });
}

function filterDir(dir, ext, callback) {
  var files_arr = [];

  fs.readdir(dir, (err, list) => {
    if(err) {
      return callback(err);
    }

    list = list.filter(function(file) {
      return path.extname(file) === '.' + ext;
    });

    callback(null, list);
  });
}

module.exports = {filterDir:filterDir, filterDirRe: filterDirRe};
