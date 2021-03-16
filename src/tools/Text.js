
import uiTexts from '../settings/uiTexts.json';

const header = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: uiTexts.navigation.header.fi, lang: lang};
  case 'en': return {text: uiTexts.navigation.header.en, lang: lang};
  default: return {text: uiTexts.navigation.header.en, lang: 'en'};
  }
};

const footer = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: uiTexts.navigation.footer.fi, lang: lang};
  case 'en': return {text: uiTexts.navigation.footer.en, lang: lang};
  default: return {text: uiTexts.navigation.footer.en, lang: 'en'};
  }
};

const home = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: uiTexts.navigation.home.fi, lang: lang};
  case 'en': return {text: uiTexts.navigation.home.en, lang: lang};
  default: return {text: uiTexts.navigation.home.en, lang: 'en'};
  }
};

const configure = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: uiTexts.navigation.configure.fi, lang: lang};
  case 'en': return {text: uiTexts.navigation.configure.en, lang: lang};
  default: return {text: uiTexts.navigation.configure.en, lang: 'en'};
  }
};

const stoptimes = (lang = 'en') => {
  switch (lang) {
  case 'fi': return {text: uiTexts.navigation.stoptimes.fi, lang: lang};
  case 'en': return {text: uiTexts.navigation.stoptimes.en, lang: lang};
  default: return {text: uiTexts.navigation.stoptimes.en, lang: 'en'};
  }
};

export default {
  configure, footer, header, home, stoptimes
};