var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var config = require('./webpack.base.conf.js')
var devEnv = require('../config/dev.env.js')

config = Object.assign({}, config)

// add hot-reload related code to entry chunk
Object.keys(config.entry).forEach(function (name) {
    config.entry[name] = [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        'webpack/hot/only-dev-server'].concat(config.entry[name])
})

config.plugins = config.plugins.concat([

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    new BrowserSyncPlugin({
        host: '127.0.0.1',
        port: devEnv.browserPort,
        proxy: 'http://127.0.0.1:' + devEnv.renderPort + devEnv.autoOpen,
        logConnections: false,
        notify: false
    }, {
        reload: false
    }),

])

module.exports = config