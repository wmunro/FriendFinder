// npm packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 8080; // Sets port.

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



// points server to a series of "route" files.
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);



// listener to start our server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});