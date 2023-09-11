import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const savedLanguage = localStorage.getItem('i18nextLng');
const defaultLanguage = savedLanguage || 'en';

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .on('languageChanged', (locale) => {
      let direction = i18n.dir(locale)
      document.dir = direction
  })
  .init({
    lng: defaultLanguage,
    fallbackLng: "en",
    localeDetection: true,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "htmlTag", "cookie"],
      caches: ["localStorage"]
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
});

export default i18n