/*eslint-disable no-console, no-var */
var express = require('express');

var app = express();
var fs = require('fs');
var path = require('path');

app.use(express.static(__dirname));
app.use('/abcui/',express.static(__dirname + '/node_modules/airbitz-core-js-ui/')); 
app.listen(3000, function () {
  console.log('Server listening on http://localhost:3000, Ctrl+C to stop')
});
