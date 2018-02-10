module.exports = {
  devtool: 'inline-source-map',
  entry: {
    application: './src/application.ts'
  },
  output: {
    path: './build',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {loader: 'ts-loader'}
        ]
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-2'
      } , {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
}
