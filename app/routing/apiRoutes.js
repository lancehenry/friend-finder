// Load Data - Linking our routes to "data" sources.
// Reference "Hot Restaurants class exercise"
var friends = require('../data/friends');

// Routing - API Get Requests
module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function(req, res) {
      friends.push(req.body);
      res.json(true);
  });
};

// Need to write a for loop to go through friends and calculate the scores from input and compare those to the other friends scores in the friends.js file, return closest
for (var i = 0; i < friends.length; i++) {

}
