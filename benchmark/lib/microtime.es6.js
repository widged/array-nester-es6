/* jshint esnext: true */

var now, elapsed;

if (process && process.hrtime) {

  elapsed = (startTime) => {
    var now = process.hrtime(startTime);
    return now[0] + now[1] / 1e9;
  };

  now = () => { return process.hrtime(); };

} else {

  elapsed = (startTime) => {
    return ((new Date()).getTime() - startTime) / 1000;
  };

  now = () => { return (new Date()).getTime(); };

}

export {now, elapsed};
