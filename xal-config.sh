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
  "extends": "xal-config/tsconfig"
}

END_TEXT

rm -rf tslint.json

cat > tslint.json << END_TEXT

{
  "extends": ["xal-config/tslint"]
}

END_TEXT

# create .prettierc for vscode

touch .prettierrc

file="./node_modules/xal-config/prettier/index.js"
start=`grep -n "module.exports" $file | head -1 | cut -d ":" -f 1`

cat $file | tail -n +$start | sed 's/module.exports = //' > .prettierrc