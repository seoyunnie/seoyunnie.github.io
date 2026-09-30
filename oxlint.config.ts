import { baseConfig, reactConfig } from "@seoyunnie/oxc-config/oxlint";
import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: ["src/route-tree.gen.ts"],
  options: {
    reportUnusedDisableDirectives: "warn",
    typeAware: true,
    typeCheck: true,
  },

  env: {
    builtin: true,
    node: true,
    es2023: true,
  },

  extends: [baseConfig, reactConfig],

  overrides: [
    {
      files: ["**/*.tsx"],

      jsPlugins: [
        { name: "tanstack-router", specifier: "@tanstack/eslint-plugin-router" },
        "eslint-plugin-perfectionist",
      ],
      rules: {
        /* @tanstack/eslint-plugin-router */
        "tanstack-router/create-route-property-order": "error",
        "tanstack-router/route-param-names": "error",

        /* eslint-plugin-perfectionist */
        "perfectionist/sort-jsx-props": ["error", { type: "natural" }],
      },
    },

    {
      files: ["src/**/*"],

      env: {
        node: false,
        browser: true,
      },

      rules: {
        /* Style */
        "import/no-nodejs-modules": "warn",
      },
    },
    {
      files: ["src/main.tsx"],

      rules: {
        /* Pedantic */
        "unicorn/prefer-query-selector": "off",
      },
    },
    {
      files: ["src/routes/**/*.tsx"],

      plugins: ["react"],
      rules: {
        /* Style */
        "unicorn/filename-case": "off",

        /* Restriction */
        "eslint/no-use-before-define": ["error", { functions: false }],
        "react/only-export-components": "off",
      },
    },
  ],
});
