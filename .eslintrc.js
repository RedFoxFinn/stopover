module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'never'
    ],
    'arrow-spacing': [
      'error', {'before': true, 'after': true}
    ],
    'no-console': 0,
    'react/prop-types': 1,
    'react/sort-prop-types': [2, {
      'callbacksLast': true,
      'ignoreCase': true,
      'requiredFirst': true,
      'sortShapeProp': true,
      'noSortAlphabetically': false
    }],
    'react/jsx-equals-spacing': [2, 'always']
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
};
