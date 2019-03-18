import articleAPI from './article'
import $store from '@/store'

// import travelJSON from '@/utils/travelJSON'

/*
* return a new object with the same keys as given object and undefined property values.
*/
// function copyObjectKeys (obj) {
//   let newObj = {}
//   for (const iterator of Object.keys(obj)) {
//     newObj[iterator] = undefined
//   }
//   return newObj
// }

//  -> /api/index.js

let handler = function (api) {
  return {
    get (cache, requestName ) {
      if (cache[requestName]) {
        return cache[requestName]
      } 
      else if (api[requestName]) {
        api[requestName].get().then(res => {
          cache[requestName] = res
          $store.commit('UPDATE_STATE', {api, cache}) // notify dependencies to get new data.
        })
        return api[requestName].placeholder
      }
      else {
        return cache[requestName]
      }
    }
  }
}

let store = {
  state: {
    article: new Proxy({}, handler(articleAPI))
  },
  mutations: {
    UPDATE_STATE (state, {api, obj}) {
      state[api.NAME] = new Proxy(obj, handler(api))
    },
    UPDATE_CACHE (state, {data, obj, prop}) {
      try {
        Reflect.set(obj, prop, data)
      } catch (e) {
        window.console.log('obj:', obj)
        window.console.log('prop:', prop)
        window.console.log('data:', data)
        throw e
      }
    }
  },
  actions: {

  },
  getters: {
    // article ({cachedRequests: {article}}) {
    //   return query => {
    //     window.console.log('article',article)
    //     if (article && !article[query]) {
    //       articleAPI[query]().then(response => { $store.commit('UPDATE_CACHE', {
    //         obj: article,
    //         prop: query,
    //         data: response
    //       }) })
    //     }
    //     return article ? article[query] : null
    //   }
    // }
  }
}

export default store

// let cachedRequests = {
//   article: copyObjectKeys(api_article)
// }

// // let vuex observe given json
// let commitChangesToVuex = () => {
//   return {
//     set (obj, prop, val) {
//       if (obj[prop] === val) return ;
//       if (typeof val === 'object') { // 如果新指定的值是对象类型，就观察该对象
//         observeJson(val, commitChangesToVuex).then(data => {
//           $store.commit('UPDATE_CACHE', {data, obj, prop})
//         })
//       }
//       else {
//         $store.commit('UPDATE_CACHE', {data: val, obj, prop})
//       }
//     }
//   }
// }

// let observeJson = async (json, observer) => {
//   let processedJson = await travelJSON({
//     json,
//     onMeetNode: ({
//       element,
//       propName,
//       parentObject
//     }) => {
//       if (element && typeof element === 'object') {
//         let tmp = new Proxy(element, observer());
//         parentObject[propName] = tmp
//       }
//     }
//   })
//   return processedJson
// }

// observeJson(cachedRequests, commitChangesToVuex).then(json => {
//   $store.commit('UPDATE_CACHE', {obj: store.state, prop: 'cachedRequests', data: json})
// })



