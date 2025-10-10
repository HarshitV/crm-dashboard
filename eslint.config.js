import tsPlugin, { configs } from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { configs as _configs } from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      "dist/**",
      "eslint.config.js",
      "webpack.config.js",
      "tsconfig.json",
    ],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      React,
      "react-hooks": reactHooks,
    },
    rules: {
      ...configs.recommended.rules,
      ..._configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
