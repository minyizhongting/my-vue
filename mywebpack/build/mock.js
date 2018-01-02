var PATHS = require('../config/paths');

var jsonServer = require('json-server');
var app = jsonServer.create();
var middlewares = jsonServer.defaults();

var fs = require('fs');
var path = require('path');

var data = {};
var jsonfolder = PATHS.ROOT + '/mock/RESTAPI';
var files = fs.readdirSync(jsonfolder);
// console.log(files);
files.forEach(function(file) {
	var filepath = jsonfolder + '/' + file;
	if (path.extname(filepath) === '.json') {
		Object.assign(data, require(filepath));
	}
});
// console.log(data);

var router = jsonServer.router(data);


app.get('/city/getCityList', function(req, res) {
	res.send(data['getCityList']);
});

app.use(middlewares);
app.use(router);

app.listen(9090, function() {
	console.log('JSON Server is running on port 9090!\n');
});