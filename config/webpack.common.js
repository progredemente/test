const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader',
          /*options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },*/
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
