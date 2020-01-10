module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb'],
  plugins: [
    'babel',
    'import',
    'react',
    'prettier',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'space-before-function-paren': 0,
    'camelcase': 0,

    'max-len': ['error', 120, 2, { ignoreUrls: true, }],
    'no-console': 'error',
    'no-alert': 'error',

    'no-param-reassign': 'off',
    "radix": "off",

    // 'react/require-default-props': 'off', // airbnb использует уведомление об ошибке
    // 'react/forbid-prop-types': 'off', // airbnb использует уведомление об ошибке
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/no-find-dom-node': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,

    "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
    "jsx-a11y/label-has-for": [2, {
      "required": {
        "every": ["id"]
      }
    }],

    'prettier/prettier': ['error'],
  },
};
