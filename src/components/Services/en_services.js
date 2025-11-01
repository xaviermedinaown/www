// src/translations/en_services.js
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

const en_services = {
  title: "Services at Your Disposal",
  description: `A wide range of capabilities and deep knowledge, to tackle any challenge or need that arises`,
  servicesList: [
    {
      title: "Windows Servers",
      description:
        "Complete and specialized solutions for all roles in your Windows environment",
      hoverDescription: `Roles: <ul>
    <li>AD (GPO)</li>
    <li>DNS</li>
    <li>DHCP</li>
    <li>WSUS</li>
    <li>WDS</li>
    <li>IIS</li>
    <li>FS</li>
  </ul>`,
      image: windows, // Use the imported image
    },
    {
      title: "Linux Servers",
      description:
        "Robust and efficient solutions to manage the services in your Linux environment",
      hoverDescription: `Services/Applications: <ul>
      <li>Apache</li>
      <li>Nginx</li>
      <li>Zimbra</li>
      <li>Certbot</li>
      <li>ProxMox AntiSpam</li>
      <li>Apache Guacamole</li>
      </ul>`,
      image: linux, // Use the imported image
    },

    {
      title: "Cloud",
      description: "Management of clouds like Azure or AWS",
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
      image: cloud, // Use the imported image
    },

    {
      title: "Networking",
      description: "Expert in network management and business connectivity",
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
      image: network, // Use the imported image
    },
    {
      title: "Virtualization",
      description:
        "Specialized consulting and efficient management for your virtualized environments",
      hoverDescription: `Virtualizers: <ul>
    <li>VMware (vcenter)</li>
    <li>Hyper-V</li>
    <li>Proxmox</li>
    <li>Docker (Compose)</li>
    <li>Kubernetes</li>
  </ul>`,
      image: virtualization, // Use the imported image
    },
    {
      title: "Development",
      description:
        "Development of custom applications and implementation of popular CMS platforms",
      hoverDescription: `Web Development: <ul>
        <li>HTML</li>
        <li>CSS/Frameworks</li>
        <li>JavaScript</li>
        <li>ReactJS / ReactNative</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        </ul>CMS: <ul>
        <li>WordPress</li>
        <li>Glpi</li>
        <li>Odoo</li>
        </ul>`,
      image: developer, // Use the imported image
    },
    {
      title: "Cybersecurity",
      description:
        "Next-generation protection to secure your technological infrastructure",
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
      image: cybersecurity, // Use the imported image
    },
    {
      title: "Backups",
      description:
        "Data backup solutions that offer peace of mind in the event of disasters",
      hoverDescription: `Tools: <ul>
        <li>Veeam B&R</li>
        <li>Nakivo</li>
        <li>Rsync</li>
        <li>Robocopy</li>
        <li>NAS / SAN</li>
        </ul>`,
      image: backup, // Use the imported image
    },

    {
      title: "IP Telephony",
      description: "Scalable and customized business telephony",
      hoverDescription: `Technologies: <ul>
        <li>Isabela</li>
        <li>FreePBX</li>
        <li>Grandstream</li>
        <li>Yealink</li>
        <li>Zoiper</li>
        </ul>`,
      image: voip, // Use the imported image
    },

    {
      title: "IP Cameras - CCTV",
      description:
        "IP camera technology with recording and smart remote access",
      hoverDescription: `Platforms: <ul>
        <li>Hikvision</li>
        <li>Dahua</li>
        <li>Axis</li>
        <li>DVR</li>
        <li>NVR</li>
        </ul>`,
      image: cctv, // Use the imported image
    },
    {
      title: "Office and Home Devices",
      description: "Advanced technical service for PCs, printers, and devices",
      hoverDescription: `Tasks: <ul>
        <li>Configuration</li>
        <li>Maintenance</li>
        <li>Optimization</li>
        <li>Repair</li>
        <li>Upgrade</li>
        <li>OS Reinstallation</li>
        <li>Antivirus</li>
        </ul>`,
      image: pc, // Use the imported image
    },
    {
      title: "Migrations, Upgrades",
      description:
        "Migration and upgrade of systems, servers, and data with an advanced and secure approach",
      hoverDescription: `Common Cases: <ul>
        <li>Windows-S Roles</li>
        <li>Exchange/Zimbra/O365</li>
        <li>Firewalls / Switches</li>
        <li>Linux Services</li>
        <li>On-Premise > Cloud</li>
        </ul>`,
      image: migration, // Use the imported image
    },
  ],
};

export default en_services;
