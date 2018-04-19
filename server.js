// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Tells node we are creating an express server
var app = express();

// Sets initial port
var PORT = process.env.PORT || 3000;

// Found this on stackoverflow (needs to call the static files for CSS to work)
app.use(express.static('app/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes - This serves as a map of how to respond when users visit or request data
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});