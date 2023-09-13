import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations from "./locales/translations.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translations.en,
    },
    hi: {
      translation: translations.hi,
    },
    mr: {
      translation: translations.mr,
    },
  },
  fallbackLng: "en", // Default language
  debug: true, // Enable debug mode for development
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
