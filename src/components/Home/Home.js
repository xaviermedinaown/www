// src/components/Home.js
import React from "react";
import "./Home.css"; // Asegúrate de importar los estilos CSS
import { useLanguage } from "../../LanguageContext";
import en_home from "./en_home"; // Importar traducciones en inglés
import es_home from "./es_home"; // Importar traducciones en español
import videoSrc from "../../assets/video_home.mp4"; // Importa el video

const translations = {
  en: en_home,
  es: es_home,
};

const Home = () => {
  const { language } = useLanguage(); // Obtener el idioma

  return (
    <section id="home" className="home-section">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      {/* Div para el fondo oscuro */}
      <div className="overlay-video"></div>

      <div className="content">
        <h1>{translations[language].welcome}</h1>
        <h2>{translations[language].your_one_stop_solution}</h2>
      </div>
    </section>
  );
};

export default Home;
