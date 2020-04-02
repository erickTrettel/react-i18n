  
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import pt from './lang/pt'
import en from './lang/en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translations: pt
      },
      en: {
        translations: en
      }
    },
    fallbackLng: 'pt',
    debug: true,

    // namespace
    ns: ['translations'],
    defaultNS: 'translations',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
