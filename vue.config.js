// vue.config.js
const path = require('path');

module.exports = {
    configureWebpack: {
        devServer: {
            contentBase: path.join(__dirname, '/'),
            publicPath: '/'
        },
    },
};
