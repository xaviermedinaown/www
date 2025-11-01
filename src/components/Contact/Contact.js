// src/components/Contact.js
import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext";
import en_contact from "./en_contact";
import es_contact from "./es_contact";
import HCaptcha from "@hcaptcha/react-hcaptcha"; // Importar hCaptcha
import "./Contact.css";
import videoSrc from "../../assets/video_contact.mp4"; // Asegúrate de que la ruta sea correcta
import Footer from "../Footer/Footer";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Importa los estilos de la librería

const translations = {
  en: en_contact,
  es: es_contact,
};

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null); // Estado para el valor del captcha
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar errores
  const [isButtonVisible, setIsButtonVisible] = useState(false); // Estado para controlar la visibilidad del botón

  // Estados para las validaciones
  const [validationErrors, setValidationErrors] = useState({
    phone: "",
    email: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario está en la sección de Contact, mostramos el botón
      const contactSection = document.getElementById("contact");
      const rect = contactSection.getBoundingClientRect();
      // Mostrar el botón cuando el top de la sección de contacto esté a 100 píxeles del fondo de la pantalla
      setIsButtonVisible(
        rect.top <= window.innerHeight - 100 && rect.bottom >= 0
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar al cargar la página

    return () => window.removeEventListener("scroll", handleScroll); // Limpiar el evento al desmontar el componente
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validación en tiempo real al escribir
    if (name === "phone") {
      validatePhone(value);
    } else if (name === "email") {
      validateEmail(value);
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); // Guardar el valor del captcha
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });

    // Validación del teléfono en tiempo real
    validatePhone(value);
  };

  const validatePhone = (phone) => {
    // Si el teléfono tiene más de 20 caracteres, mostrar el error
    if (phone && phone.length > 20) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        phone: translations[language].phone_error,
      }));
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        phone: "",
      }));
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email && !emailPattern.test(email)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: translations[language].email_error,
      }));
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setErrorMessage("Please complete the captcha."); // Mensaje de error si el captcha no está completo
      return;
    }

    try {
      // Enviar los datos del formulario al servidor usando fetch
      const response = await fetch("http://localhost:5000/send_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captcha: captchaValue, // Incluir el valor del captcha en la solicitud
        }),
      });

      // Manejar la respuesta del servidor
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(data.message);
        setIsSubmitted(true);
        handleReset(); // Limpiar el formulario después de enviar
      } else {
        throw new Error(
          data.message || "There was a problem sending your message."
        ); // Manejar errores
      }
    } catch (error) {
      setErrorMessage(error.message); // Mensaje de error
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setIsSubmitted(false);
    setSuccessMessage("");
    setErrorMessage(""); // Limpiar el mensaje de error
    setCaptchaValue(null); // Reiniciar el valor del captcha
  };

  return (
    <section id="contact" className="contact">
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

      <div className="content">
        <h1 className="box__contact">{translations[language].title}</h1>
        <p>{translations[language].description}</p>
        <form onSubmit={isSubmitted ? handleReset : handleSubmit}>
          <label>
            {translations[language].name}:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            {translations[language].phone}:
            <div className="phone-input-container">
              <PhoneInput
                international
                defaultCountry="US" // Puedes cambiar esto según el país por defecto
                value={formData.phone}
                onChange={handlePhoneChange} // Usamos nuestra función personalizada aquí
                required
                title="Please enter a valid phone number (e.g. 1234567890)" // Mensaje de ayuda para el usuario
              />
              {validationErrors.phone && (
                <p className="error-message">{validationErrors.phone}</p>
              )}
            </div>
          </label>
          <label>
            {translations[language].email}:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {validationErrors.email && (
              <p className="error-message">{validationErrors.email}</p>
            )}
          </label>
          <label>
            {translations[language].message}:
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </label>

          <HCaptcha
            sitekey="cf040522-8f3c-46ee-8246-19b0a2e00bb0"
            onVerify={handleCaptchaChange}
          />

          <button type="submit">
            {isSubmitted
              ? translations[language].clear_form
              : translations[language].send_message}
          </button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>

      {/* Botón de Telegram flotante */}
      {isButtonVisible && (
        <a
          href="https://t.me/xaviermedinausa"
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-button"
        >
          <i className="fab fa-telegram-plane"></i>
        </a>
      )}

      <Footer />
    </section>
  );
};

export default Contact;
