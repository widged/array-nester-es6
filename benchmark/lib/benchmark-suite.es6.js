
/* jshint esnext: true */

var benchmarkMethod  = require('./benchmark-method.es6.js');
var {sum,average,maxLength, paddingForMax} = require('./utils.es6.js');



var inSeconds = (time) => {
  return (Math.round(time * Math.pow(10,6)) / Math.pow(10,3)).toFixed(3);
}

var benchmarkSuite =  (config, suite, filterFn) => {
  if(typeof filterFn !== 'function') { filterFn = () => { return true; }}
  var {repetitions, lineQty} = config;
  var showResult = (repetitions === 1);
  var tests = suite({lineQty: lineQty}).filter(filterFn);

  var results = tests.map(({method}) => { return benchmarkMethod(method, repetitions); });
  var names = tests.map(({name}) => {return name; });
  // var names   = tests.map(({name}) => { return name; });
  var pad = paddingForMax(names.reduce(maxLength, 0), " ");
  var lines = results.map(({times, result}, i) => {
    var name = names[i];
    var average = times.reduce(sum) / repetitions;
    var res = showResult? ' ' + JSON.stringify(result) + '\n' : '';
    var avg =   showResult? '' : ` : ${inSeconds(average)}`;
    return `${name + pad(name)}${avg}${res}`;
  });
  var printout = `-- ${JSON.stringify(config)}  -------
${lines.join('\n')}
`;
 console.log(printout);
};


export default benchmarkSuite;
