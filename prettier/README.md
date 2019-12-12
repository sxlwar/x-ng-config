# Prettier

## Usage

Install the package first, run:

```bash
npm install --save-dev x-prettier
```

Create a .prettier.config.js at the root folder of the project, add the content below:

```js
module.exports = {
  ...require('x-prettier'),
  // other rules you want to override.
}
```
