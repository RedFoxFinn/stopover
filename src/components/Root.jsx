
// Author:    RedFoxFinn
// Project:   Stopover
// File:      Root.jsx

// imports

import React, {} from 'react';

import Text from '../tools/Text';

// declarations

// Root is component that will render applications landing page
// on route '/'

const Root = ({lang}) => {
  return <article>
    <p>{Text.intro(lang).text}</p>
  </article>;
};

// exports

export default Root;