module.exports = {
  entry: {
    application: './src/application.js'
  },
  output: {
    path: './build',
    filename: '[name].bundle.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-2'
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
// Contact GitHub API Training Shop Blog About
