import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": 1,
  },
  languageOptions: {
    globals: globals.browser,
  },
  ...pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
};
