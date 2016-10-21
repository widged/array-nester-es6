# Overview

Utilities to group, index, and nest data (transpiled from es6, browser+nodejs).

## Examples

###  Grouper

      var group = Grouper(({foo}) => { return (foo % 2 === 0) ? 'even' : 'odd'; });
      var gps = group([{foo: 1}, {foo: 2}, {foo: 3}]);
      /*
      [
        {"k":"odd","v":[{"foo":1},{"foo":3}]},
        {"k":"even","v":[{"foo":2}]}
      ];
      */

### Indexer

    var cv = (d) => { return /[aeiou]/i.test(d) ? 'v' : 'c'; };
    var index = Indexer([
            {label: function(d) { return cv(d[0]); }, sort: compare.ascendingStrings },
            {label: function(d) { return cv(d[1]); }, sort: compare.descendingStrings },
    ]);
    var indexed = index("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium".split(/\W+/));
    /*
      [
        {"k":["c","v"],"v":["vero","dignissimos","ducimus","qui"]},
        {"k":["c","c"],"v":["blanditiis","praesentium"]},
        {"k":["v","v"],"v":["eos","iusto"]},
        {"k":["v","c"],"v":["At","et","accusamus","et","odio"]}
      ];
    */

### Nester

    var nest = Nester([
      {label: function(d) { return d[0]; } },
      {label: function(d) { return d[1]; } }
    ]);
    var nested = nest([[0, 1], [0, 2], [1, 1], [1, 2], [0, 2]]);
      /*
      [ {
        "key":0,"values":[
          {"key":1,"values":[[0,1]]},
          {"key":2,"values":[[0,2],[0,2]]}
        ]}, {
        "key":1,"values":[
          {"key":1,"values":[[1,1]]},
          {"key":2,"values":[[1,2]]}
        ]}
      ];
      */

# Performance compared to d3.collection.nest

Benchmarking suites are available in the benchmark folder.

Our Nester class is more efficient than d3nest on tiny and small datasets.

    {repetitions: 100, lineQty: 1000}
    Nester         0.060
    IndexAndNest   0.171
    d3nest         0.446

Even more so on Medium datasets.

    {repetitions: 100, lineQty: 50000}
    Nester         1.889
    IndexAndNest   3.933
    d3nest         18.013

Using Indexer and IndexNester is much more efficient on big data sets, as it avoids multiple iterations over the
data lines.

    {repetitions: 10,  lineQty: 1000000}
    IndexAndNest    98.330
    Nester         329.570
    d3nest         345.846

# Installing and Running

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
