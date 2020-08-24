module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    devServer: {
      contentBase: './dist',
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
     ]
    },
  };