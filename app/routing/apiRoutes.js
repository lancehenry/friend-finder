// Load Data - Linking our routes to "data" sources.
// Reference "Hot Restaurants class exercise"
var friends = require("../data/friends");

// Routing - API Get Requests
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    // Set variables from users input fields
    var userData = req.body;

    // Loops through the friends currently in database
    for (var i = 0; i < friends.length; i++) {
      var scoreDifference = Math.abs(parseInt(userData.scores[i]) - parseInt(friends.scores[i]));

      console.log(scoreDifference);
      
      };

    friends.push(userData);
    res.json(true);

  });
};