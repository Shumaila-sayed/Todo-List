const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: "./src/template.html",
      favicon: "./src/assets/priority_24dp_F02424_FILL1_wght400_GRAD0_opsz24.png",
    }),
  ],
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource", 
      },
      {
        test: /\.svg$/i,
        type: "asset/inline", 
      },
    ],
  },
};