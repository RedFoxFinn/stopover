
const header = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: 'Otsikko', lang: lang};
  case 'en': return {text: 'Header', lang: lang};
  default: return {text: 'Header', lang: 'en'};
  }
};

const footer = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: 'Alaotsikko', lang: lang};
  case 'en': return {text: 'Footer', lang: lang};
  default: return {text: 'Footer', lang: 'en'};
  }
};

const home = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: 'Etusivu', lang: lang};
  case 'en': return {text: 'Home', lang: lang};
  default: return {text: 'Home', lang: 'en'};
  }
};

const configure = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: 'Asetukset', lang: lang};
  case 'en': return {text: 'Configure', lang: lang};
  default: return {text: 'Configure', lang: 'en'};
  }
};

const stoptimes = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: 'Aikataulut', lang: lang};
  case 'en': return {text: 'Stop times', lang: lang};
  default: return {text: 'Stop times', lang: 'en'};
  }
};

export default {
  configure, footer, header, home, stoptimes
};