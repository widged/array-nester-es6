#!/usr/bin/env babel-node

var benchmarkSuite    = require('./lib/benchmark-suite.es6.js');
var release           = require('./suite/release.es6.js');
var optimisations     = require('./suite/optimisations.es6.js');

// var nesters = suite.filter()

var configs = {
  default:      {repetitions: 100, lineQty: 50000,   showResult: false},
  checkResults: {repetitions: 1,   lineQty: 30,      showResult: true},
  tinydata:     {repetitions: 500, lineQty: 100,     showResult: false},
  smalldata:    {repetitions: 100, lineQty: 1000,    showResult: false},
  bigdata:      {repetitions: 10,  lineQty: 1000000, showResult: false}
}

// .filter((k) => {  })

var runConfig = (config, suite, filterFn) => {
  if(typeof filterFn !== 'function') { filterFn = () => { return true; }}
  var {repetitions, lineQty, showResult} = config;
  console.log('-- ' + JSON.stringify(config) + ' -------');
  var tests = suite({lineQty: lineQty}).filter(filterFn);
  benchmarkSuite(tests, repetitions).map(({name, padding, average, result}) => {
    var timeAverage = (Math.round(average * Math.pow(10,6)) / Math.pow(10,3)).toFixed(3);
    var info = showResult? '\n' + JSON.stringify(result) + '\n' : timeAverage;
    console.log(name + padding + '  ', info)
  });
  console.log();
};
runConfig(configs.default, release, ({name}) => {return /nest/i.test(name);})
runConfig(configs.default, release, ({name}) => {return !/nest/i.test(name);})
runConfig(configs.default, optimisations)
runConfig(configs.checkResults, release);
