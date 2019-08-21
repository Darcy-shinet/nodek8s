var express = require('express');

var PORT = 8888;

var app = express();
app.get('/', function (req, res) {
	let os = require('os');
	let hostname = os.hostname();
  res.send(`Hello world, host-name, fix two, add node, host name = ${hostname} \n`);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
