"use strict";

module.exports = {
  extends: [
    "tslint:recommended",
    "tslint-plugin-prettier",
    "tslint-config-prettier"
  ],
  rules: {
    "array-type": false,
    "arrow-parens": false,
    "component-class-suffix": true,
    "component-selector": [true, "element", "app", "kebab-case"],
    "contextual-lifecycle": true,
    "cyclomatic-complexity": [true, 5],
    deprecation: {
      severity: "warning"
    },
    "directive-class-suffix": true,
    "directive-selector": [true, "attribute", "app", "camelCase"],
    forin: true,
    "import-blacklist": [true, "rxjs/Rx"],
    "interface-name": false,
    "max-classes-per-file": false,
    "max-line-length": [true, 120],
    "member-access": false,
    "no-any": true,
    "no-conflicting-lifecycle": true,
    "no-consecutive-blank-lines": false,
    "no-console": [true, "debug", "info", "time", "timeEnd", "trace"],
    "no-empty": false,
    "no-host-metadata-property": true,
    "no-inferrable-types": [true, "ignore-params"],
    "no-input-rename": true,
    "no-inputs-metadata-property": true,
    "no-magic-numbers": true,
    "no-name-space": true,
    "no-non-null-assertion": true,
    "no-output-native": true,
    "no-output-on-prefix": true,
    "no-output-rename": true,
    "no-outputs-metadata-property": true,
    "no-redundant-jsdoc": true,
    "no-switch-case-fall-through": true,
    "no-unnecessary-callback-wrapper": true,
    "no-var-keyword": true,
    "no-var-requires": false,
    "object-literal-key-quotes": [true, "as-needed"],
    "object-literal-sort-keys": false,
    "one-variable-per-declaration": true,
    "only-arrow-functions": true,
    "ordered-imports": true,
    "prefer-conditional-expression": [true, "check-else-if"],
    "prefer-const": true,
    prettier: true,
    quotemark: [true, "single"],
    radix: true,
    "template-banana-in-box": true,
    "template-no-negated-async": true,
    "trailing-comma": [
      true,
      {
        multiline: "always",
        singleline: "never"
      }
    ],
    "use-lifecycle-interface": true,
    "use-pipe-transform-interface": true
  },
  rulesDirectory: ["codelyzer"]
};