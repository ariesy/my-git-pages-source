var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./js/navigation.js",
    output: {
        path: path.resolve(__dirname,'build'),
        filename: "js/navigation.bundle.js"
    },
    module: {
        loaders: [{
          test: /navigation\\*\.js$/, // Transform all .js files required somewhere within an entry point...
          loader: 'babel', // ...with the specified loaders...
          exclude: path.join(__dirname, '/node_modules/') // ...except for the node_modules folder.
        }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({  // Also generate a test.html 
      filename: 'navigation.html',
      template: 'navigation.html'
    })
    ]
};