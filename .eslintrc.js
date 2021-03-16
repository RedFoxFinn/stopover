module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'jest'
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
    'no-unused-vars': 'warn',
    'no-empty': 'warn',
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
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  'settings': {
    'react': {
      'version': 'detect'
    },
    'jest': {
      'version': 26
    }
  }
};
