'use strict';

var mymodule = require('./module.js');

// callback function can be anonymous
mymodule.filterDir(process.argv[2], process.argv[3], function callback(err, list) {
  if (err) {
    return console.error('There was an error: ', err);
  }

  list.forEach(function(file) {
    console.log(file);
  });
});
