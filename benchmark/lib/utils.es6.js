/* jshint esnext: true */

var utils = {};

utils.sum = (acc, d) => { return acc + d; };
utils.average = (acc, d, i, arr) => {
  if(i === arr.length) {
    return acc / arr.length;
  } else {
    return acc + d;
  }
};

utils.maxLength = (acc, {name}) => { return Math.max(acc, name.length); };

utils.paddingForMax = (max, char = " ") => {
  char = char.toString();
  return (str) => { return Array.from(new Array(max - str.length)).map(() => { return char; }).join('');  };
};

export default utils;
