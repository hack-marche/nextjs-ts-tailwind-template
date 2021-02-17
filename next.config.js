/* eslint-disable */
const { merge } = require('webpack-merge')
module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }
    return merge(config, {
      resolve: {
        alias: {
          firebaseui: 'firebaseui-ja',
        },
      },
    })
  },
  images: {
    domains: [],
  },
}
