
/* jshint esnext: true */

function microtime(get_as_float)
{
  var unixtime_ms = (new Date).getTime();
      var sec = Math.floor(unixtime_ms/1000);
      return get_as_float ? (unixtime_ms/1000) : (unixtime_ms - (sec * 1000))/1000 + ' ' + sec;
}

var microtime = (function() {
  var now, elapsed;
  if (process && process.hrtime) {
    elapsed = (startTime) => {
      var now = process.hrtime(startTime);
      return now[0] + now[1] / 1e9;
    };
    now = () => { return process.hrtime(); }
  } else {
    elapsed = (startTime) => {
      return (new Date() - startTime) / 1000;
    };
    now = () => { return new Date(); }
  }
  return {now, elapsed};
} ())


class Timer {
    constructor() {
      this.state = { time: 0, startTime: undefined };
    }
    start() {
      this.state.startTime = microtime.now();
    }
    stop() {
      var {startTime} = this.state;
      return microtime.elapsed(startTime);
    }
}

var testMethod = (method, n) => {
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


var benchmarkSuite = (suite, n, config) => {
  var sum = (acc, d) => { return acc + d };
  var tests = suite(config);
  var res = tests.map(({method}) => { return testMethod(method, n); });
  var longestName = tests.reduce((acc, {name}) => { return Math.max(acc, name.length); }, 0);
  return tests.map(({name}, i) => {
    var {times, result} = res[i];
    var padding = Array.from(new Array(longestName - name.length)).map(() => { return " "}).join('');
    return {name, padding, average: times.reduce(sum) / n, result};
  });
}

export default benchmarkSuite;
