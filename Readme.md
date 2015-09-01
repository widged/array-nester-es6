Ensure that all dependencies are installed

    npm install

To use with nodejs:

    cd array-nester-es6
    babel-node usage/node-demo.es6.js

To use in the browser:

    cd array-nester-es6
    cd usage
    webpack
    open index.html 

To test

    cd array-nester-es6
    npm test

or

    cd array-nester-es6
    mocha --compilers js:./test/compiler.js test/*-test.es6.js

