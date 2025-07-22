import { deTranslation, enTranslation } from '@axonivy/smart-neo-client';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export const initTranslation = () => {
  if (i18n.isInitializing || i18n.isInitialized) return;
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      debug: true,
      supportedLngs: ['en', 'de', 'ja'],
      fallbackLng: 'en',
      ns: ['smart-neo-client'],
      defaultNS: 'smart-neo-client',
      resources: {
        en: { 'smart-neo-client': enTranslation },
        de: { 'smart-neo-client': deTranslation }
      },
      detection: {
        order: ['querystring']
      }
    });
};
