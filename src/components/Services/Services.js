// src/components/Services/Services.js
import React from "react";
import { useLanguage } from "../../LanguageContext";
import en_services from "./en_services"; // Importar traducciones en inglés
import es_services from "./es_services"; // Importar traducciones en español
import "./Services.css";

// Crear un objeto de traducciones que use los archivos importados
const translations = {
  en: en_services,
  es: es_services,
};

// Función para convertir los saltos de línea "\n" a "<br />"
const convertNewlinesToBreaks = (text) => {
  return text.split("\n").map((str, index) => (
    <span key={index}>
      {str}
      <br />
    </span>
  ));
};

const Services = () => {
  const { language } = useLanguage(); // Obtener el idioma

  return (
    <section id="services" class="box__services">
      <h1>{translations[language].title}</h1>

      <h2>{convertNewlinesToBreaks(translations[language].description)}</h2>

      {/* Contenedor de grid de los servicios */}
      <div className="grid-container">
        {translations[language].servicesList.map((service, index) => (
          <div key={index} className="grid-item">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>

            {/* Texto visible por defecto */}
            <p className="service-description">{service.description}</p>

            {/* Icono centrado debajo de la descripción */}
            <i className="fa-solid fa-circle-arrow-up fa-2xl"></i>

            {/* Texto adicional que aparece cuando el mouse pasa por encima */}
            <div
              className="hover-box"
              dangerouslySetInnerHTML={{ __html: service.hoverDescription }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
