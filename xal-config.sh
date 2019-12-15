#!/bin/bash

cat > commintlint.config.js << END_TEXT
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
  "extends": "x-tsconfig/tsconfig/index.json"
}

END_TEXT

rm -rf tslint.json

cat > tslint.json << END_TEXT

{
  "extends": ["xal-tslint/tslint/index.json"]
}

END_TEXT
