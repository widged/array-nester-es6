var Grouper        = require('../../src/Grouper.es6.js');

var {pick,compose}  = require('../../src/fn.es6.js');

var indexify      = (d,i) => { return {d,i}; };

var pickK         = pick('k');
var pickV         = pick('v');

/*
  Benchmarking show that a more functional style of coding, relying heavily on map and reduce
  is much slower.
  -- {"repetitions":100,"lineQty":50000,"showResult":false} -------
  Indexer     4.091
  IndexerFn   44.969
*/

var encoder = {};
encoder.stringify = (arr) => { return arr.join(';'); };
encoder.parse = (str) => { return str.split(';'); };

class Indexer {

  constructor(keys, rollup)  {
    if (typeof rollup !== 'function') { rollup = (d) => { return d; }; }
    this.state = {keys, rollup};
  }

  run(lines, maxDepth) {
    var {keys, rollup} = this.state;
    if(!keys || !keys.length) { return (lines) => { return rollup(lines); }; }
    if(!maxDepth || maxDepth > keys.length) { maxDepth = keys.length; }
    keys = keys.slice(0,maxDepth);
    var computeLabels  = (line) => { return keys.map(({label}) => { return (typeof label === 'function') ? label(line) : line; }); }
    var grouper = new Grouper(compose(computeLabels, encoder.stringify));
    var sortOnAllKeys = (a,b) => {
              return keys.reduce((acc, {sort}, i) => { return (acc === 0) ? sort(a[i],b[i]) : acc; }, 0);
    };
    var gps = grouper.run(lines);
    return gps.map(compose(pickK,encoder.parse))
                .map((d,i) => { return {k: d, v: gps[i].v}; })
                .sort((a,b) => { return sortOnAllKeys(a.k, b.k); });

  }
}

export default Indexer;
