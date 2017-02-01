var keys = require("./keys.js");
var request = require('request');
var twitter = require("twitter");
var spotify = require('spotify');
var omdb = require('omdb');


var argument = process.argv[2];
var value = process.argv[3];
var dataText = process.argv[4];




if(argument == "movie-this"){
	var movieName = process.argv[3];
	var movieURL = 'http://www.omdbapi.com/?t=' + movieName + '&plot=short&r=json';
	request(movieURL, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body) // Show the HTML for the Google homepage. 
	  }else{
	  	request("http://www.omdbapi.com/?t=mr+nobody+&y=&plot=short&r=json&tomatoes=true",function(error, response,body){
                console.log(body);
        })
	  }
	})
}