import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import ptTranslation from './locales/pt.json';

const resources = {
  en: {
    translation: enTranslation
  },
  pt: {
    translation: ptTranslation
  }
};

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Passa o i18n para o react-i18next
  .init({
    resources,
    fallbackLng: 'pt', // Idioma padrão caso a detecção falhe
    interpolation: {
      escapeValue: false // React já protege contra XSS
    }
  });

export default i18n;