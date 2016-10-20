var Grouper  = require('./Grouper.es6.js');

var {pick,compose,indexify}  = require('./utils.es6.js');

var pickK         = pick('k');
var pickV         = pick('v');


var Indexer = (keys, rollup) => {
  if (typeof rollup !== 'function') { rollup = (d) => { return d; }; }
  if(!keys || !keys.length) { return (lines) => { return rollup(lines); } }
  var computeLabels  = (line) => { return keys.map(({label}) => { return (typeof label === 'function') ? label(line) : line; }); }
  var group = Grouper(compose(computeLabels, JSON.stringify));
  var sortOnAllKeys = (a,b) => {
            return keys.reduce((acc, {sort}, i) => { return (acc === 0) ? sort(a[i],b[i]) : acc; }, 0);
  };
  return (lines, maxDepth) => {
      var gps = group(lines);
      var flat = ({d,i}) => { return {k: d, v: gps[i].v}; };
      return gps.map(compose(pickK,JSON.parse))
                  .map(indexify)
                  .sort((a,b) => { return sortOnAllKeys(a.d, b.d); })
                  .map(flat);
  };
};

export default Indexer;
