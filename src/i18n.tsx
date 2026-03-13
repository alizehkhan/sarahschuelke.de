import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "./__translations__/de.json";
import en from "./__translations__/en.json";

const resources = {
  en: { translation: en },
  de: { translation: de },
};

const fallbackLanguage = "en";

const detectInitialLanguage = () => {
  return navigator.language?.toLowerCase().startsWith("de")
    ? "de"
    : fallbackLanguage;
};

i18n.use(initReactI18next).init({
  resources,
  lng: detectInitialLanguage(),
  fallbackLng: fallbackLanguage,
  supportedLngs: ["en", "de"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
