
/* jshint esnext: true */

var benchmarkMethod  = require('./benchmark-method.es6.js');
var {sum,average,maxLength, paddingForMax} = require('./utils.es6.js');

var benchmarkSuite = (tests, n) => {
  var results = tests.map(({method}) => { return benchmarkMethod(method, n); });
  var padding = paddingForMax(tests.reduce(maxLength, 0), " ");
  return results.map(({times, result}, i) => {
    var {name} = tests[i];
    return {name, padding: padding(name), average: times.reduce(sum) / n, result};
  });
}

export default benchmarkSuite;
