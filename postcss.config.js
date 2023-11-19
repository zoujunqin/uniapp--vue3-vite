const tailwindcss = require('tailwindcss')
const autoprefixer = require("autoprefixer");
const postcssImportPlugin = require('postcss-import')
const cssnanoPlugin = require("cssnano");

const plugins = [postcssImportPlugin(), tailwindcss(), autoprefixer()]

if (process.env.NODE_ENV === 'production') {
  plugins.push(cssnanoPlugin())
}
plugins.push(require('weapp-tailwindcss/css-macro/postcss'))

module.exports = {
  plugins
}
