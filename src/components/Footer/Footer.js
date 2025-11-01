// src/components/Footer.js
import React from "react";
import { useLanguage } from "../../LanguageContext";
import en_footer from "./en_footer"; // Importar traducciones en inglés
import es_footer from "./es_footer"; // Importar traducciones en español
import "./Footer.css"; // Asegúrate de tener estilos para el foote

// Crear un objeto de traducciones que use los archivos importados
const translations = {
  en: en_footer,
  es: es_footer,
};

const Footer = () => {
  const { language } = useLanguage(); // Obtener el idioma actual

  return (
    <footer className="footer">
      <p>{translations[language].copyright}</p>
    </footer>
  );
};

export default Footer;
