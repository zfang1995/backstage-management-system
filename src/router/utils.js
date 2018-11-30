import fs from 'fs'
import path from 'path'

let componentsPath = {};
(function buildComponentsPath (rootPath) {
    traversal(rootPath, (pathname, next) => {
        let basename = path.basename(pathname)
        if (basename !== 'components') {
            componentsPath[basename] = pathname + '/' + basename + '.vue'
        }
        next()
    }, () => {})
})('../components')

export let getComponentPath = function (componentName) {
    return componentsPath[componentName]
}

function traversal (directory, callback, finish) {
/**
 * 
 *
 * @param {string} directory
 * @param {function} callback the callback function will be excute that if a sub-file or sub-directory has been found in directory.
 * @param {function} finish the finish function will be excute at the final progress of traversal.
 */
    fs.readdir(directory, function (err, files) {
        (function next(i) {
            if (i < files.length) {
                var pathname = path.join(directory, files[i]);

                fs.stat(pathname, function (err, stats) {
                    if (stats.isdirectory()) {
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
}



