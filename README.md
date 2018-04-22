# friend-finder

Friend Finder is a friend matching survey based on the user's responses to a ten question survey. The user reponds to questions with values from 1 to 5. When the survey is submitted, an existing user with the most similar responses is found and returned. The closest current user is determined by the lowest absolute difference for all ten questions combined. 

The Friend Finder application is meant to simulate a simple dating app. The application is implemented using a Node.js and Express server on the back end and Bootstrap CSS framework on the front end.

# Table of Contents

<!--ts-->
* [Table of Contents](#table-of-contents)
* [Philosophy](#philosophy)
* [Struggles](#struggles)
  <!--te-->

Philosophy
==========
Taking the survey:

* Enter your name and upload a link to a photo.
* After ranking each statement/question from 1 to 5, the closest current user is returned by calculating the absolute difference for all ten questions combined.

Struggles
=========
Some of the challenges I encountered:

* getting the routes to load correctly
* getting the functionality correct to calculate the absolute difference
* getting the "best match" to display in the DOM