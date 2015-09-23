Ensure that all dependencies are installed

    npm install

To use with nodejs:

    cd array-nester-es6/usage
    babel-node node-demo.es6.js

To use in the browser:

    cd array-nester-es6/usage
    webpack
    open index.html 

For information on webpack and how to use it, read [Using ES6 Modules with Webpack](http://www.zsoltnagy.eu/using-es6-modules-with-webpack/) by Zsolt-Nagy

To test

    cd array-nester-es6
    npm test

or

    cd array-nester-es6
    mocha --compilers js:./test/compiler.js test/*-test.es6.js

