"use strict";

module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "color-hex-length": "long",
    "color-hex-case": "lower",
    "no-empty-source": null,
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      { message: "Class name must be kebab-case style" }
    ],
    "number-leading-zero": "never",
    "number-no-trailing-zeros": true,
    "number-max-precision": 3,
    "length-zero-no-unit": true,
    "declaration-empty-line-before": [
      "never",
      { ignore: ["after-declaration"] }
    ],
    "rule-empty-line-before": [
      "always",
      { except: ["after-single-line-comment", "first-nested"] }
    ],
    "block-closing-brace-empty-line-before": ["never"],
    "max-empty-lines": 1,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "block-opening-brace-space-before": "always"
  }
};
