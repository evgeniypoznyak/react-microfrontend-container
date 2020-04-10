module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['react-app'],
  rules: {
    'max-len': ['error', 80, 2, {
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: false,
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'no-else-return': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'no-unused-vars': 'warn',
    yoda: ['error', 'never', { exceptRange: true }],
  },
};
