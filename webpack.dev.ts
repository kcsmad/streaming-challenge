import * as path from "path";
import merge from 'webpack-merge';
import commonConfig from './webpack.common';

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
    hot: true,
    host: process.env.HOST || 'localhost',
    compress: true,
    port: 3000,
    historyApiFallback: { index: "index.html" },
  },
})

export default devConfig
