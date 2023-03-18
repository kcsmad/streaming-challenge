import merge from 'webpack-merge';
import commonConfig from './webpack.common';

const prodConfig = merge(commonConfig, {
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  }
});

export default prodConfig;
