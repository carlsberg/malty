import HtmlWebpackPlugin from 'html-webpack-plugin';

// eslint-disable-next-line func-names
export default function (env) {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'eval',

    devServer: {
      open: true,
      historyApiFallback: true
    },

    entry: {
      index: './build/index.js'
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  };
}
