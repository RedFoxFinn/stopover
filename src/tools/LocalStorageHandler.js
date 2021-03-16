
const checkLang = () => {
  const lang = window.localStorage.getItem('rff.stopover.lang');
  if (lang === null || lang === undefined) {
    window.localStorage.setItem('rff.stopover.lang', 'en');
    return {setLang: 'en', status: 'autoSetLang'};
  } else {
    return {setLang: lang, status: 'loadSetLang'};
  }
};

const setLang = (lang = undefined) => {
  switch (lang.toLowerCase()) {
  case 'fi': {
    window.localStorage.setItem('rff.stopover.lang', lang);
    return {setLang: lang, status: 'userSetLang'};
  }
  case 'en': {
    window.localStorage.setItem('rff.stopover.lang', lang);
    return {setLang: lang, status: 'userSetLang'};
  }
  default: return {setLang: lang, status: 'setLangFail'};
  }
};

export default {
  checkLang, setLang
};