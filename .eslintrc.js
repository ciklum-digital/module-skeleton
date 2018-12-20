module.exports = {
  'extends': 'airbnb-base',
  'env': {
    'es6': true,
    'node': true,
    'browser': true,
    'jest/globals': true
  },
  'globals': {
    'window': true,
    'PKG': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'codeFrame': false,
    'ecmaFeatures': {
      'modules': true,
      'experimentalObjectRestSpread': true
    }
  },
  'plugins': [
    // 'compat',
    'import',
    'jest',
    'babel'
  ],
  'rules': {
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    // 'compat/compat': 'warn',
    'lines-between-class-members': ['error', 'always', {
      'exceptAfterSingleLine': true
    }],
    'class-methods-use-this': 'off',
    'no-fallthrough': 'off',
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'max-lines': ['error', {
      'max': 180,
      'skipBlankLines': false,
      'skipComments': false
    }],
    'semi': [
      'error',
      'never'
    ],
    'space-before-function-paren': [
      'error',
      'always'
    ],
  }
}
