// src/components/Navbar.js
import React, { useState, useEffect } from "react"; // Importa useState y useEffect
import { useLanguage } from "../../LanguageContext";
import en_navbar from "./en_navbar"; // Importar traducciones en inglés
import es_navbar from "./es_navbar"; // Importar traducciones en español
import LanguageSwitcher from "../LanguageSwitcher"; // Importa el componente de cambio de idioma
import logo from "../../assets/logo_medina.png"; // Importa la imagen del logo
import "./Navbar.css"; // Archivo CSS para estilos del navbar

const translations = {
  en: en_navbar,
  es: es_navbar,
};

const Navbar = () => {
  const { language } = useLanguage(); // Obtener el idioma
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manejar el estado del menú
  const [scrolled, setScrolled] = useState(false); // Estado para el scroll

  // Función para manejar el evento de scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true); // Si hay desplazamiento, activa la clase 'scrolled'
    } else {
      setScrolled(false); // Si no hay desplazamiento, desactiva la clase
    }
  };

  // Usamos useEffect para agregar el listener de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {" "}
      {/* Agregar clase 'scrolled' al navbar */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a href="#home">{translations[language].home}</a>
          </li>
          <li>
            <a href="#about">{translations[language].about}</a>
          </li>
          <li>
            <a href="#services">{translations[language].services}</a>
          </li>
          <li>
            <a href="#products">{translations[language].products}</a>
          </li>
          <li>
            <a href="#contact">{translations[language].contact}</a>
          </li>
        </ul>
        <div className="language-switcher-container">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
