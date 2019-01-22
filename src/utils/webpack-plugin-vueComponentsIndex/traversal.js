let fs = require('fs')
let path = require('path')
/**
 * 遍历 directory 中的所有文件，并为每个文件执行一次 callback 函数。
 *
 * @param {string} directory
 * @param {function} callback the callback function will be excute that if a sub-file or sub-directory has been found in directory.
 * @param {function} finish the finish function will be excute at the final progress of traversal.
 */
module.exports = function traversal (directory, callback, finish) {
  fs.readdir(directory, function (err, files) {
      (function next(i) {
          if (i < files.length) {
              var pathname = path.join(directory, files[i]);

              fs.stat(pathname, function (err, stats) {
                  if (stats.isDirectory()) {
                      traversal(pathname, callback, function () {
                          next(i + 1);
                      });
                  } else {
                      callback(pathname, function () {
                          next(i + 1);
                      });
                  }
              });
          } else {
              finish && finish();
          }
      }(0));
  });
};