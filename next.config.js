// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
// module.exports = withSass();
module.exports = withSass(withCss());

// module.exports = withSass(withCss({
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
//       loader: 'url-loader?limit=100000',
//       exclude: './node_modules/semantic-ui-css'
//     })
//     return config

//   }
// }));
