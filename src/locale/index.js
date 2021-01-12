import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhCNLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementNlLocale from 'element-ui/lib/locale/lang/nl'
import enLocale from './en'
import nlLocale from './nl'
import zhCNLocale from './zh-CN'
import { getLocale } from '../util/tools'

Vue.use(VueI18n)

const messages = {
    en: {
      ...enLocale,
      ...elementEnLocale
    },
    zh_CN: {
      ...zhCNLocale,
      ...elementZhCNLocale
    },
    nl: {
      ...nlLocale,
      ...elementNlLocale
    }
  },

  i18n = new VueI18n({
  // set locale
  // options: en | zh | nl
    locale: getLocale(),
    // set locale messages
    messages
  })

export default i18n
