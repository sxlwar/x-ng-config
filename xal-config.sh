#!/bin/bash

cat > commitlint.config.js << END_TEXT
const { commitlint } = require('xal-config');

module.exports = commitlint;

END_TEXT

cat > .prettier.config.js << END_TEXT
const { prettier } = require('xal-config');

module.exports = prettier;

END_TEXT

cat > .stylelint.config.js << END_TEXT
const { stylelint } = require('xal-config');

module.exports = stylelint;
END_TEXT

rm -rf tsconfig.json

cat > tsconfig.json << END_TEXT
{
  "extends": "xal-config/tsconfig/index.json"
}

END_TEXT

rm -rf tslint.json

cat > tslint.json << END_TEXT

{
  "extends": ["xal-config/tslint/index.json"]
}

END_TEXT
