
import uiTexts from '../settings/uiTexts.json';

const header = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: uiTexts.navigation.header.fi.toString(), lang: lang};
  case 'en': return {text: uiTexts.navigation.header.en.toString(), lang: lang};
  default: return {text: uiTexts.navigation.header.en.toString(), lang: 'en'};
  }
};

const footer = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: uiTexts.navigation.footer.fi.toString(), lang: lang};
  case 'en': return {text: uiTexts.navigation.footer.en.toString(), lang: lang};
  default: return {text: uiTexts.navigation.footer.en.toString(), lang: 'en'};
  }
};

const home = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: uiTexts.navigation.home.fi.toString(), lang: lang};
  case 'en': return {text: uiTexts.navigation.home.en.toString(), lang: lang};
  default: return {text: uiTexts.navigation.home.en.toString(), lang: 'en'};
  }
};

const configure = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: uiTexts.navigation.configure.fi.toString(), lang: lang};
  case 'en': return {text: uiTexts.navigation.configure.en.toString(), lang: lang};
  default: return {text: uiTexts.navigation.configure.en.toString(), lang: 'en'};
  }
};

const stoptimes = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: uiTexts.navigation.stoptimes.fi.toString(), lang: lang};
  case 'en': return {text: uiTexts.navigation.stoptimes.en.toString(), lang: lang};
  default: return {text: uiTexts.navigation.stoptimes.en.toString(), lang: 'en'};
  }
};

export default {
  configure, footer, header, home, stoptimes
};