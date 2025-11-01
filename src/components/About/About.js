// src/components/About.js
import React from "react";
import { useLanguage } from "../../LanguageContext";
import en_about from "./en_about"; // Importar traducciones en inglés
import es_about from "./es_about"; // Importar traducciones en español
import "./About.css";

const translations = {
  en: en_about,
  es: es_about,
};

const About = () => {
  const { language } = useLanguage(); // Obtener el idioma

  return (
    <section id="about" className="about-container">
      <div className="about-background"></div>
      <div className="about-content">
        <h1>{translations[language].title}</h1>
        <p className="center-text">{translations[language].description}</p>
        {/* Agrega cualquier otra información o elementos que desees aquí */}
      </div>
    </section>
  );
};

export default About;
