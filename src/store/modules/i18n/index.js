import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import en_US from 'ant-design-vue/lib/locale-provider/en_US'
import enLocale from './en'
import zhLocale from './zh'
import localforage from 'localforage'
import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

export let i18n_store = {
  state: {
    userLanguage: window.navigator.language,
    languageLookupTable: {
      'zh-CN': '简体中文',
      'en-US': 'english'
    },
    languageContext: ''
  },
  getters: {
    locale (state) {
      return state.userLanguage
    },
    languagePackage (state) {
      return state.userLanguage === 'zh-CN' ? zh_CN : en_US
    },
    internationalize(state) {
      return function (title) {
        try {
          this.$te('c')
        } catch (e) {
          window.console.log('this', this)
        }
        const hasKey = this.$te(state.languageContext + title)

        if (hasKey) {
          // $t :this method from vue-i18n, inject in @/lang/index.js
          const translatedText = this.$t(state.languageContext + title)

          return translatedText
        }
        return title
      }
    }
  },
  mutations: {
    CHANGE_LOCALE (state, payload) {
      state.userLanguage = payload
      i18n.locale = payload
    },
    changeLanguageContext (state, payload) {
      state.languageContext = payload
    }
  },
  actions: {
    async getPreferedLanguage (context) {
      let storedOption = await localforage.getItem('language')
      context.commit('CHANGE_LOCALE', storedOption || context.state.userLanguage)
    }
  }
}

export const messages = {
  'en-US': {
    ...enLocale,
  },
  'zh-CN': {
    ...zhLocale,
  }
};

export let i18n = new VueI18n({
  locale: i18n_store.state.userLanguage,
  messages
});

