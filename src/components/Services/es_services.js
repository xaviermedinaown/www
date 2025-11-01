// src/translations/es_services.js
import windows from "../../assets/service_win.svg"; // Importar las imágenes
import linux from "../../assets/service_linux.png"; // Importar las imágenes
import cloud from "../../assets/service_cloud.png"; // Importar las imágenes
import network from "../../assets/service_network.png"; // Importar las imágenes
import virtualization from "../../assets/service_virtualization.png"; // Importar las imágenes
import developer from "../../assets/service_developer.png"; // Importar las imágenes
import cybersecurity from "../../assets/service_cybersecurity.png"; // Importar las imágenes
import backup from "../../assets/service_backup.png"; // Importar las imágenes
import voip from "../../assets/service_voip.png"; // Importar las imágenes
import cctv from "../../assets/service_cctv.png"; // Importar las imágenes
import pc from "../../assets/service_pc.png"; // Importar las imágenes
import migration from "../../assets/service_migration.png"; // Importar las imágenes

const es_services = {
  title: "Servicios a tu disposición",
  description: `Un amplio abanico de capacidades y conocimientos profundos, para afrontar cualquier reto y necesidad que surja`,
  servicesList: [
    {
      title: "Servidores windows",
      description:
        "Soluciones completas y especializadas para todos los roles de tu entorno Windows",
      hoverDescription: `Roles: <ul>
    <li>AD (GPO)</li>
    <li>DNS</li>
    <li>DHCP</li>
    <li>WSUS</li>
    <li>WDS</li>
    <li>IIS</li>
    <li>FS</li>
  </ul>`,
      image: windows, // Usar la imagen importada
    },
    {
      title: "Servidores linux",
      description:
        "Soluciones robustas y eficientes para gestionar los servicios de tu entorno Linux",
      hoverDescription: `Servicios/Aplicativos: <ul>
      <li>Apache</li>
      <li>Nginx</li>
      <li>Zimbra</li>
      <li>Certbot</li>
      <li>ProxMox AntiSpam</li>
      <li>Apache Guacamole</li>
      </ul>`,
      image: linux, // Usar la imagen importada
    },

    {
      title: "Nube",
      description: "Administracion de nubes como Azure o AWS",
      hoverDescription: `Amazon AWS: <ul>
      <li>EC2</li>
      <li>S3</li>
      <li>VPC</li>
      <li>VPN</li>
    </ul>Microsoft Azure: <ul>
      <li>Entra ID (AAD)</li>  
      <li>VMs</li>
      <li>Blob Storage</li>
      <li>VNet</li>
      <li>VPN</li>
      <li>Office 365</li>
    </ul>`,
      image: cloud, // Usar la imagen importada
    },

    {
      title: "Redes",
      description:
        "Experto en administración de redes y conectividad empresarial",
      hoverDescription: `Firewalls: <ul>
      <li>Fortinet</li>
      <li>Sophos</li>
      <li>Watchguard</li>
      <li>Mikrotik</li>
      <li>Cisco/Meraki</li>
      <li>PfSense</li>
      </ul>Switches / Wifi: <ul>
      <li>Ubiquiti</li>
      <li>Aruba/HP/HPE</li>
      <li>Huawei</li>
      </ul>`,
      image: network, // Usar la imagen importada
    },
    {
      title: "Virtualizacion",
      description:
        "Asesoría especializada y gestión eficiente para tus ambientes virtualizados",
      hoverDescription: `Virtualizadores: <ul>
    <li>VMware (vcenter)</li>
    <li>Hyper-V</li>
    <li>Proxmox</li>
    <li>Docker (Compose)</li>
    <li>Kubernetes</li>
  </ul>`,
      image: virtualization, // Usar la imagen importada
    },
    {
      title: "Desarrollo",
      description:
        "Desarrollo de aplicaciones personalizadas e implementación de CMS populares",
      hoverDescription: `Desarrollo web: <ul>
        <li>HTML</li>
        <li>CSS/Frameworks</li>
        <li>JavaScript</li>
        <li>ReactJS / ReactNative</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        </ul>CMS: <ul>
        <li>Wordpress</li>
        <li>Glpi</li>
        <li>Odoo</li>
        </ul>`,
      image: developer, // Usar la imagen importada
    },
    {
      title: "Ciberseguridad",
      description:
        "Protección de última generación para blindar tu infraestructura tecnológica",
      hoverDescription: `Red-Purple-Black / HAT: <ul>
        <li>Nmap</li>
        <li>Burp Suite</li>
        <li>Hydra</li>
        <li>Aircrack-ng</li>
        <li>Nikto</li>
        <li>John the Ripper</li>
        <li>Metasploit Framework</li>
        <li>SQLmap</li>
        <li>OpenVAS</li>
        <li>Maltego</li>
        <li>Snort</li>
        </ul>`,
      image: cybersecurity, // Usar la imagen importada
    },
    {
      title: "Respaldos",
      description:
        "Copia de seguridad de datos que ofrecen tranquilidad ante desastres",
      hoverDescription: `Herramientas: <ul>
        <li>Veeam B&R</li>
        <li>Nakivo</li>
        <li>Rsync</li>
        <li>Robocopy</li>
        <li>NAS / SAN</li>
        </ul>`,
      image: backup, // Usar la imagen importada
    },

    {
      title: "Telefonía IP",
      description: "Telefonía empresarial escalable y personalizada",
      hoverDescription: `Tecnologias: <ul>
        <li>Isabela</li>
        <li>FreePBX</li>
        <li>Grandstream</li>
        <li>Yealink</li>
        <li>Zoiper</li>
        </ul>`,
      image: voip, // Usar la imagen importada
    },

    {
      title: "Cámaras IP - CCTV",
      description:
        "Tecnología de cámaras IP con grabación y acceso remoto inteligente",
      hoverDescription: `Plataformas: <ul>
        <li>Hikvision</li>
        <li>Dahua</li>
        <li>Axis</li>
        <li>DVR</li>
        <li>NVR</li>
        </ul>`,
      image: cctv, // Usar la imagen importada
    },
    {
      title: "Dispositivos de oficina y hogar",
      description:
        "Servicio técnico avanzado para PCs, impresoras y dispositivos",
      hoverDescription: `Tareas: <ul>
        <li>Configuración</li>
        <li>Mantenimiento</li>
        <li>Optimización</li>
        <li>Reparación</li>
        <li>Actualización</li>
        <li>Reinstalacion de SO</li>
        <li>Antivirus</li>
        </ul>`,
      image: pc, // Usar la imagen importada
    },
    {
      title: "Migraciones, Actualizaciones",
      description:
        "Migración y actualización de sistemas, servidores y datos con un enfoque avanzado y seguro",
      hoverDescription: `Casos comunes: <ul>
        <li>Roles de Windows-S</li>
        <li>Exchange/Zimbra/O365</li>
        <li>Firewalls / Switches</li>
        <li>Servicios de Linux</li>
        <li>On-Premise > Nube</li>
        </ul>`,
      image: migration, // Usar la imagen importada
    },
  ],
};

export default es_services;
