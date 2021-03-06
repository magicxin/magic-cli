const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
  //entry:[
  //  './src/main.js',
  //  './src/home.js'
  //],
  entry: {
    main: './src/main.js',
    home: './src/home.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    //  filename: 'bundle.js'
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'assets':path.resolve(__dirname,'./src/assets'),
      'pages':path.resolve(__dirname,'./src/pages'),
      'router':path.resolve(__dirname,'./src/router')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    port: 8088,
    noInfo: true, // 当前环境 下未生效  node v10.5.0  webpack 4.17.0 webpack-dev-server 3.1.0
    historyApiFallback: true, // 任何404 返回index.html
    compress: true, // gzip压缩 
//  overlay: {
//    warnings: true,
//    errors: true
//  }
  },
  performance: {
    hints: false
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    },{
      test: /\.css$/,
      use: ['vue-style-loader','css-loader']
    },
    {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  plugins: [
    new VueLoaderPlugin()
//  new HtmlWebpackPlugin()
  ]
}

module.exports = config