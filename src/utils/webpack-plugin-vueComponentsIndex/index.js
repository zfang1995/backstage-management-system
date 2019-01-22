// -> declare presets
let fs = require('fs')
let path = require('path')
let componentsPathsTable = {};
let rootPath = './src/components'
let _debounce = require('lodash.debounce')
let generateComponentsIndex = _debounce(function () {
    let componentsIndex = ''
    for (const basename in componentsPathsTable) {
        if (componentsPathsTable.hasOwnProperty(basename)) {
            const _path = componentsPathsTable[basename];
            componentsIndex = componentsIndex.concat(`export let ${basename} = () => import('${_path}') \n`)
        }
    }
    fs.writeFile(
        `${rootPath.replace(/\\/g, '/')}/index.js`,
        componentsIndex,
        err => { if (err) throw err }
    )
}, 5000, { leading: true, trailing: true })
let pathsTableBuilder = (resourcePath, event, callback) => {
    if (path.extname(resourcePath) === '.vue') {
        // modify componentsPathsTable
        let handlerLookupTable = {
           add () {
                let basename = path.basename(resourcePath) === 'index' ? path.basename(path.dirname(resourcePath)) : path.basename(resourcePath),
                    _path = resourcePath.replace(/\\/g, '/').replace(/^.*src/, '@')
                componentsPathsTable[basename] = _path
           },
           unlink () {
                delete componentsPathsTable[path.basename(path.dirname(resourcePath))]
           }
        }
        handlerLookupTable[event]()
        callback()
    }
}
let chokidar = require('chokidar')


// -> main progress
module.exports = class vueComponentsIndex {
    constructor(options = {rootPath: './src/components'}) {
      this.options = options;
    }
    apply(compiler) {
      compiler.hooks.afterEnvironment.tap('vueComponentsIndex', () => {
        chokidar.watch(rootPath)
            .on('add', resourcePath => {
                pathsTableBuilder(resourcePath, 'add', generateComponentsIndex)
            })
            .on('unlink', resourcePath => {
                pathsTableBuilder(resourcePath, 'unlink', generateComponentsIndex)
            })
      });
    }
  }
