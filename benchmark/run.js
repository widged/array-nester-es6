#!/usr/bin/env babel-node

var benchmarkSuite  = require('./benchmark-suite.es6.js');
var suite           = require('./suite.es6.js');

var configs = {
  default:      {repetitions: 100, lineQty: 50000,   showResult: false},
  tinydata:     {repetitions: 500, lineQty: 100,    showResult: false},
  smalldata:    {repetitions: 100, lineQty: 1000,    showResult: false},
  bigdata:      {repetitions: 10,  lineQty: 1000000, showResult: false},
  checkResults: {repetitions: 1,   lineQty: 30,      showResult: true}
}

var runConfig = (config) => {
  var {repetitions, lineQty, showResult} = config;
  console.log('-- ' + JSON.stringify(config) + ' -------');
  benchmarkSuite(suite, repetitions, {lineQty: lineQty}).map(({name, padding, average, result}) => {
    var timeAverage = (Math.round(average * Math.pow(10,6)) / Math.pow(10,3)).toFixed(3);
    var info = showResult? '\n' + JSON.stringify(result) + '\n' : timeAverage;
    console.log(name + padding + '  ', info)
  });
  console.log();
};
runConfig(configs.default)
runConfig(configs.checkResults);
