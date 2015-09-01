/* jshint esnext: true */

var app = document.getElementById('app');
var out = require('./NesterDemo.es6.js').run();
app.innerHTML = `<pre>${out}</pre>`;
