import type { Config } from "stylelint";

export default {
  ignoreFiles: ["dist/**"],

  extends: ["stylelint-config-standard", "stylelint-config-css-modules"],

  rules: {
    /* Deprecated */
    "selector-no-deprecated": true,

    /* Invalid */
    "selector-no-invalid": true,

    /* Unknown */
    "at-rule-no-unknown": [true, { ignoreAtRules: ["mixin", "value"] }],

    /* Pattern */
    "selector-class-pattern": null,
  },
} satisfies Config;
