// Dependencies - Path package to get correct file path for HTML
var path = require('path');

// Routing - HTML Get Requests
module.exports = function(app) {
    
    // Get request displays the surver.html page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // Get request displays home.html is matching route is found
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
};