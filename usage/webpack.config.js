module.exports = {
    entry  : './browser-demo.es6.js',
    output : {
        path     : __dirname,
        filename : 'browser-demo.es5.js'
    },
    module : {
        loaders: [ { 
                test   : /.js$/,
                loader : 'babel-loader' 
            }
        ]
    }
};