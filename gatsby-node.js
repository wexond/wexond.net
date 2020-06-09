const { resolve } = require('path');

const dev = process.env.NODE_ENV === 'development';

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src'),
        'react-dom': dev ? '@hot-loader/react-dom' : 'react-dom',
      },
    },
  });
};
