import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import en_US from 'ant-design-vue/lib/locale-provider/en_US'
import enLocale from './en'
import zhLocale from './zh'
import localforage from 'localforage'

export  let i18n_store = {
  state: {
    userPreferedLanguage:  window.navigator.language
  },
  getters: {
    locale (state) {
      return state.userPreferedLanguage === 'zh-CN' ? zh_CN : en_US
    }
  }
}

export const messages = {
  en: {
    ...enLocale,
  },
  zh: {
    ...zhLocale,
  }
};

(async function (defaultLanguage = window.navigator.language) {
  /* get userPreferedLanguage from localstroge
  */
  i18n_store.state.userPreferedLanguage = (await localforage.getItem('language')) || defaultLanguage
})()
