import type { Config } from "stylelint";

export default {
  ignoreFiles: ["dist/**"],

  extends: ["stylelint-config-standard", "stylelint-config-css-modules"],

  rules: {
    /* Deprecated */
    "selector-no-deprecated": true,

    /* Invalid */
    "at-rule-prelude-no-invalid": [true, { ignoreAtRules: ["mixin"] }],
    "selector-no-invalid": true,

    /* Unknown */
    "at-rule-no-unknown": [true, { ignoreAtRules: ["mixin"] }],

    /* Pattern */
    "selector-class-pattern": null,
  },
} satisfies Config;
