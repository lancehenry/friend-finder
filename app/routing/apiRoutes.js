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
    // console.log(userData);

    // Variable for the users scores
    var userScore = userData.scores;
    // console.log(userScore);

    // Per Jay:
    // Lowest score variable, don't set to anything need to then compare those together. Push the closest friend to an object. This is what will then get returned to the DOM.

    // An array to hold the scores
    var scoreArray = [];
    var totalDifference = 0;

    // Loops through the friends currently in database
    for (var i = 0; i < friends.length; i++) {
      
      // Need to put another loop inside this loop in order to go through the scores array
      for (var j = 0; j < userScore.length; j++) {
        
        totalDifference = Math.abs(parseInt(friends[i].scores[i]) - parseInt(userScore[j]));
        
      }
      scoreArray.push(totalDifference);
      };

    friends.push(userData);
    res.json(true);

  });
};