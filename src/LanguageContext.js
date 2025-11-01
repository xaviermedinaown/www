// src/LanguageContext.js
import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const LanguageContext = createContext();

// Crear un proveedor de contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Idioma por defecto

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Crear un hook para usar el contexto
export const useLanguage = () => {
  return useContext(LanguageContext);
};
