var express = require('express');
var config = require('./server/configure');
var app = express();
//sets the default port for our server
app.set('port', process.env.PORT || 3000);
//sets the directory for views (pages)
app.set('views', __dirname + '/views');
//uses our server configuration file (required as a module)
app = config(app);

var server = app.listen(app.get('port'), function() {
	console.log('Server up: http://localhost:' + app.get('port'));
});