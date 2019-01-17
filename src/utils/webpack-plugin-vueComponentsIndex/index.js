// -> prepare dependency
let fs = require('fs')
let path = require('path')
let componentsPathMap = {};
let componentsIndex = ''

/**
 * 遍历 directory 中的所有文件，并为每个文件执行一次 callback 函数。
 *
 * @param {string} directory
 * @param {function} callback the callback function will be excute that if a sub-file or sub-directory has been found in directory.
 * @param {function} finish the finish function will be excute at the final progress of traversal.
 */
let traversal = function (directory, callback, finish) {
      fs.readdir(directory, function (err, files) {
          global.console.log(files);
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
let buildComponentsPath = function (rootPath) {
  traversal(rootPath, (pathname, next) => {
      if (path.extname(pathname) === '.vue') {
          // modify componentsPathMap
          let basename = path.basename(path.dirname(pathname)),
              _path = pathname.replace(/\\/g, '/').replace(/src/, '@')
          componentsPathMap[basename] = _path
          // modify componentsIndex
          componentsIndex = componentsIndex.concat(`export let ${basename} = () => import('${_path}') \n`)
      }
      next()
  }, () => {
      fs.writeFile(
        `${rootPath.replace(/\\/g, '/')}/index.js`, 
          componentsIndex, 
          err => {if (err) throw err}
      )
  })
}
  
class vueComponentsIndex {
  constructor(options = {rootPath: './src/components'}) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.afterEnvironment.tap('vueComponentsIndex', () => {
      buildComponentsPath(this.options.rootPath)
    });
  }
}

// -> progress
module.exports = vueComponentsIndex;