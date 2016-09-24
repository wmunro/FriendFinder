var friendData 	= require('../data/friends.js');

var path = require('path');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendData);
		
	});
	
	app.post('/api/friends', function(req, res){
		var closestDifference = 100;
		var difference = 0;
		var match;

		friendData.forEach(function(friend) {
				console.log(friend);
				console.log(req.body);

		// .map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.
		difference = eval(friend.scores.map(function (num, index) {

		// Because abs() is a static method of Math, you always use it as Math.abs(), rather than as a method of a Math object you created (Math is not a constructor).
		// Passing an empty object, an array with more than two members, a non-numeric string or undefined/empty variable returns NaN. Passing null, an empty string or an empty array returns 0.
		return Math.abs(num - req.body.scores[index]);
		}).join('+')); 

		if (difference <= closestDifference) {
		closestDifference = difference;
		match = friend;
		}
	});
		  res.json(match);

    friendData.push(req.body);

    });

	};