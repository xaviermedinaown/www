// src/components/About.js
import React from "react";
import { useLanguage } from "../../LanguageContext";
import en_products from "./en_products"; // Importar traducciones en inglés
import es_products from "./es_products"; // Importar traducciones en español
import "./products.css";

// Importar las imágenes locales
import windows from "../../assets/logo_win11.svg";
import linux_ubuntu from "../../assets/logo_ubuntu.png";
import linux_debian from "../../assets/logo_debian.png";
import linux_rocky from "../../assets/logo_rocky.png";
import linux_oracle from "../../assets/logo_oracle.png";
import zimbra from "../../assets/logo_zimbra.png";
import proxmox from "../../assets/logo_proxmox.png";
import vmware from "../../assets/logo_vmware.png";
import hyper_v from "../../assets/logo_hyper-v.png";
import docker from "../../assets/logo_docker.png";
import kubernetes from "../../assets/logo_kubernetes.png";
import amazon_aws from "../../assets/logo_aws.png";
import azure from "../../assets/logo_azure.png";
import fortinet from "../../assets/logo_fortinet.png";
import sophos from "../../assets/logo_sophos.png";
import watchguard from "../../assets/logo_watchguard.png";
import mikrotik from "../../assets/logo_mikrotik.svg";
import cisco from "../../assets/logo_cisco.png";
import meraki from "../../assets/logo_meraki.png";
import pfsense from "../../assets/logo_pfsense.png";
import opnsense from "../../assets/logo_opnsense.png";
import ubiquiti from "../../assets/logo_ubiquiti.png";
import hp from "../../assets/logo_hp.png";
import huawei from "../../assets/logo_huawei.png";
import tplink from "../../assets/logo_tp-link.jpg";
import o365 from "../../assets/logo_o365.png";
import html from "../../assets/logo_html.png";
import css from "../../assets/logo_css.png";
import javascript from "../../assets/logo_javascript.png";
import react from "../../assets/logo_react.png";
import mysql from "../../assets/logo_mysql.png";
import postgresql from "../../assets/logo_postgresql.png";
import wordpress from "../../assets/logo_wordpress.png";
import glpi from "../../assets/logo_glpi.png";
import odoo from "../../assets/logo_odoo.png";
import kali from "../../assets/logo_kali.png";
import nmap from "../../assets/logo_nmap.png";
import burpsuit from "../../assets/logo_burpsuit.png";
import openvas from "../../assets/logo_openvas.png";
import snort from "../../assets/logo_snort.png";
import veeam from "../../assets/logo_veeam.png";
import nakivo from "../../assets/logo_nakivo.jpg";
import issabel from "../../assets/logo_issabel.png";
import freepbx from "../../assets/logo_freepbx.png";
import hikvision from "../../assets/logo_hikvision.png";
import dahua from "../../assets/logo_dahua.png";

// Definir las imágenes como variables
const images = [
  windows,
  linux_ubuntu,
  linux_debian,
  linux_rocky,
  linux_oracle,
  zimbra,
  proxmox,
  vmware,
  hyper_v,
  docker,
  kubernetes,
  amazon_aws,
  azure,
  fortinet,
  sophos,
  watchguard,
  mikrotik,
  cisco,
  meraki,
  pfsense,
  opnsense,
  ubiquiti,
  hp,
  huawei,
  tplink,
  o365,
  html,
  css,
  javascript,
  react,
  mysql,
  postgresql,
  wordpress,
  glpi,
  odoo,
  kali,
  nmap,
  burpsuit,
  openvas,
  snort,
  veeam,
  nakivo,
  issabel,
  freepbx,
  hikvision,
  dahua,
];

const translations = {
  en: en_products,
  es: es_products,
};

const Products = () => {
  const { language } = useLanguage(); // Obtener el idioma

  return (
    <section id="products" className="products-container">
    <div className="products-background"></div>
    <div className="products-content">
      <h1>{translations[language].title}</h1>
      <p className="center-text">{translations[language].description}</p>
  
      {/* Carousel Section */}
      <div className="carousel-container">
        <div className="slider">
          <div className="slide-track">
            {/* Duplicamos las imágenes para el efecto continuo */}
            {[...images, ...images].map((src, index) => (
              <div className="slide" key={index}>
                <img
                  src={src}
                  height="100"
                  width="250"
                  alt={`Slide ${index + 1}`}
                />
                <div className="texto">
                  <p>{translations[language].text[index % images.length]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Products;
