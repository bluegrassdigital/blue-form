var webpack = require('webpack')

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: './dist/',
    filename: 'blue-form.js',
    libraryTarget: 'var',
    library: 'blueForm'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
