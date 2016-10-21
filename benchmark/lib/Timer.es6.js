/* jshint esnext: true */

var microtime        = require('./microtime.es6.js');

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

export default Timer;
