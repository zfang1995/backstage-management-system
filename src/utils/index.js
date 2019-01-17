
// import {componentsPathMap} from './componentsPathMap'
import cloneDeep from '../../node_modules/lodash.clonedeep/index.js'
import travelObjectTree from './travelObjectTree.js'

export function generateRoutes (routes) {
  let newRoutes = cloneDeep(routes)
  travelObjectTree(newRoutes, function generateComponentPath (value, key, object) {
    if (key === 'name') {
      let tmp;
      object['component'] = tmp
    }
  })
  return newRoutes
}
