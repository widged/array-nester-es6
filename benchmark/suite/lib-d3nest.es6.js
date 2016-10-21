
var {nest: d3nest} = require('../alternatives/d3-collection.js');

var generateData = require('./generate-data.es6.js');

var suite = ({lineQty}) => {

  var {arr, keys} = generateData(lineQty);

  var run = {};
  run.d3nest = () => {
    return d3nest().key(keys[0].label).key(keys[1].label).entries(arr.slice())
  };

  return Object.keys(run).map((k) => { return {name: k, method: run[k]}; });
}

export default suite;
