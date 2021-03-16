import React, {} from 'react';

import Style from '../tools/Style';
import Text from '../tools/Text';

const Header = (props) => {
  const {lang} = props;
  return <header style={Style.inline()}>
    <p style={Style.appName()}>{Text.header(lang).text}</p>
  </header>;
};

export default Header;