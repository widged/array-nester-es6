/* jshint esnext: true */

var Timer        = require('./Timer.es6.js');

var benchmarkMethod = (method, n) => {
  var times = [], result;
  for (var i = 0; i < n; i++) {
    var timer = new Timer();
    timer.start();
    var res = method();
    var elapsed = timer.stop();
    times.push(elapsed);
    if(i === 0) {
      result = res;
    }
  }
  return {result, times};
}

export default benchmarkMethod;
