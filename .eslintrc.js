const path = require("path")

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-empty-function': 'off',
    'global-require': 'off',
    "prettier/prettier": "error",
    "react/prop-types": "off", 
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    '@typescript-eslint/no-empty-function': "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};