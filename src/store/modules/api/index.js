import api_article from './article'
import $store from '@/store'
import travelJSON from '@/utils/travelJSON'

/*
* return a new object with the same keys as given object and undefined property values.
*/
function copyObjectKeys (obj) {
  let newObj = {}
  for (const iterator of Object.keys(obj)) {
    newObj[iterator] = undefined
  }
  return newObj
}

let cachedRequests;
travelJSON({
  article: copyObjectKeys(api_article)
}, (element, parentObject) => {
  if (typeof element === 'object') {
    parentObject[element] = new Proxy(cachedRequests.article, {
      set (obj, prop, val, receiver) {
        if (obj[prop] === val) return ;
        $store.commit('UPDATE_ARTICLE', {
          modulePath: prop,
          data: val,
          receiver
        })
      }
    })
  } 
})

export default {
  state: {
    article: {}
  },
  mutations: {
    UPDATE_ARTICLE (state, {modulePath, data}) {
      cachedRequests.article[modulePath] = data
    }
  },
  actions: {

  },
  getters: {
    article ({article}) {
      return query => {
        if (!article[query]) {
          api_article[query]().then(response => { $store.commit('UPDATE_ARTICLE', {
            modulePath: query,
            data: response
          }) })
        }
        return article[query]
      }
    }
  }
}