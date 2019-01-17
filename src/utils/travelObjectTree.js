import _forEach from '../../node_modules/lodash/forEach.js'

export default function travelObjectTree (object, callback) {
  _forEach(object, (value ,key) => {
    if (typeof value !== 'object') {
      try {
        callback(value, key, object)
      } catch (error) {
        window.console.log(value, object)
        throw error
      }
    } else {
      travelObjectTree(value, callback)
    }
  })
}