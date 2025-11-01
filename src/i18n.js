// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Aquí puedes agregar tus traducciones
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      // otras traducciones...
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido",
      // otras traducciones...
    },
  },
};

i18n
  .use(initReactI18next) // pasa i18n down to react-i18next
  .init({
    resources,
    lng: "es", // idioma por defecto
    fallbackLng: "en", // idioma a usar si no hay traducción disponible

    interpolation: {
      escapeValue: false, // react ya hace el escape de forma segura
    },
  });

export default i18n;
