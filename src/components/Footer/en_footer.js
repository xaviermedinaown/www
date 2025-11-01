const currentYear = new Date().getFullYear();
const startYear = 2024;

const es_footer = {
  copyright: `©${startYear}${
    currentYear > startYear ? ` - ${currentYear}` : ""
  } | Medina Edge Pro | All rights reserved | info@medinaedgepro.com`,
};

export default es_footer;
