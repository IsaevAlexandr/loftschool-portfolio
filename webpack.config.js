const webpack           = require('webpack'); 
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin');
const path              = require('path');

const PATH = {
  source: {
    about: path.join(__dirname, 'src/scripts/about.js'),
    index: path.join(__dirname, 'src/scripts/index.js'),
    'my-works': path.join(__dirname, 'src/scripts/my-works.js'),
    blog: path.join(__dirname, 'src/scripts/blog.js'),
  },
  build: path.join(__dirname, 'src/scripts')
};


const config = {
  entry: PATH.source,
  output: {
    filename: 'main.min.js'
  },
  output: {
    path: PATH.build,
    filename: '[name].min.js',
},
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;
