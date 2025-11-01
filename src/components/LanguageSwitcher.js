import React from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/LanguageSwitcher.css"; // Asegúrate de que la ruta sea correcta

// Importa las imágenes de las banderas
import usFlag from "../assets/us-flag.png"; // Cambia la ruta si es necesario
import esFlag from "../assets/es-flag.png"; // Cambia la ruta si es necesario

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "es" : "en";
    changeLanguage(newLanguage);
  };

  return (
    <button className="language-switcher" onClick={handleLanguageChange}>
      {/* Muestra la bandera correspondiente */}
      <img
        src={language === "en" ? esFlag : usFlag}
        alt={language === "en" ? "Español" : "English"}
        className="flag-icon"
      />
      {language === "en" ? "Español" : "English"} {/* Corrige el texto aquí */}
    </button>
  );
};

export default LanguageSwitcher;
