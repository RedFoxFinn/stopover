import React, {} from 'react';

import Style from '../tools/Style';
import Text from '../tools/Text';

const Footer = (props) => {
  const {lang} = props;
  return <footer>
    <p>{Text.footer(lang).text}</p>
  </footer>;
};

export default Footer;