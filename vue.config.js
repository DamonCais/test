// https://github.com/vuejs/vue-cli/tree/dev/docs/config
// https://blog.csdn.net/franks_t_d/article/details/80740268

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    lintOnSave: false,
    //baseUrl: '/sub-path/',
    runtimeCompiler: true,
    parallel: require('os').cpus().length > 1,
    configureWebpack: {
        //entry: ["babel-polyfill", "./src/main.js"]
        plugins: [
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(true),
                VERSION: JSON.stringify("5fa3b9"),
                BROWSER_SUPPORTS_HTML5: true,
                TWO: "1+1",
                "typeof window": JSON.stringify("object")
            }),
            new CompressionWebpackPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp(
                    '\\.(' + ['js', 'css'].join('|') +
                    ')$'
                ),
                threshold: 10240,
                minRatio: 0.8
            }),
        ]

    },
    productionSourceMap: false
}