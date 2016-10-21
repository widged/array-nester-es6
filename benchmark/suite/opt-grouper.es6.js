var compare        = require('../../test/compare.es6.js');

var Grouper        = require('../../src/Grouper.es6.js');
var GrouperSlower    = require('../alternatives/Grouper-slower.es6.js');

var generateData = require('./generate-data.es6.js');


var suite = ({lineQty}) => {

  var {arr, keys} = generateData(lineQty);

  var run = {};

  run.Grouper = () => {
    var grouper = new Grouper(keys[0].label);
    return grouper.run(arr);
  };

  run.GrouperSlower = () => {
    var grouper = new GrouperSlower(keys[0].label);
    return grouper.run(arr);
  };


  return Object.keys(run).filter((k) => { return !/_skip$/.test(k); }).map((k) => { return {name: k, method: run[k]}; });
}

export default suite
