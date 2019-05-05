module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    "@typescript-eslint",
    "react"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": ["error", 2],
    "import/prefer-default-export": 0,
    "indent": 0,
    "lines-between-class-members": 0,
    "max-len": 0,
    "no-return-assign": 0,
    "no-shadow": 0,
    "object-curly-newline": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "react/jsx-indent": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/no-did-update-set-state": 0,
    "react/no-unescaped-entities": 0,
    "react/no-unused-state": 1,
    "react/sort-comp": 0,
    "semi": ["error", "never"],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
};
