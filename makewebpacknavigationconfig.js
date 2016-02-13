var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./js/navigation.js",
    output: {
        path: path.resolve(__dirname,'build'),
        filename: "js/navigation.bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({  // Also generate a test.html 
      filename: 'navigation.html',
      template: 'navigation.html'
    })
    ]
};