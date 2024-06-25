import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/named": "error",
      "import/namespace": "error",
      "import/default": "error",
      "import/export": "error",
      "no-confusing-arrow": "error",
      "no-duplicate-imports": "error",
      "no-useless-constructor": "error",
      "no-undef": "off",
      "no-console": "off",
      "no-case-declarations": "off",
      "no-extra-boolean-cast": "off",
    },
  },
];
