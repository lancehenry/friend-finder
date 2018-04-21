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

    // An array to hold the scores
    var scoreArray = [];
    var totalDifference = 0;
    var bestFriend = 0;

    // Loops through the friends currently in database
    for (var i = 0; i < friends.length; i++) {
      // Need to put another loop inside this loop in order to go through the scores array
      for (var j = 0; j < userScore.length; j++) {
        totalDifference = Math.abs(
          parseInt(friends[i].scores[i]) - parseInt(userScore[j])
        );
      }
      scoreArray.push(totalDifference);
    }

    // Per Jay:
    // After the totalDifference is set to an array, create another loop to then find the closest match. This is what will then get returned to the DOM.
    for (var i = 0; i < scoreArray.length; i++) {
      if (scoreArray[i] <= scoreArray[bestFriend]) {
        bestFriend = i;
      }
    }

    var bestMatch = friends[bestFriend];
    res.json(bestMatch);
    // console.log(bestMatch.name + '\n' + bestMatch.photo);

    friends.push(userData);
  });
};