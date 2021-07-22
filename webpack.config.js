const path = require('path')
const MyWebpackPlugin = require('./plugin/plugin1.js')
// const MyWebpackPlugin = require('./plugin/plugin2.js')
// const MyWebpackPlugin = require('./plugin/genMarkdownPlugin.js')

module.exports = {
  entry: {
    index: path.join(__dirname, './main.js'),
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
  },
  plugins: [new MyWebpackPlugin({ msg: 'hello foobarovo' })],
}