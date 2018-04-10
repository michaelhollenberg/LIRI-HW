require("dotenv").config();
var fs = require("fs"); 
var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require ("spotify");
var liriArgument = process.argv[2];

// Here we would put the code to import the keys.js File. 


// Here we would set the commands for my tweets, spotify and movie. 
// We would do this by using process.argv[2] + what user types
// a possible movie function would look something like this. 


function movieThis(){
    var movie = process.argv[3];
    if(!movie){
        movie = "rounders";
    }
    params = movie
    request("http://www.omdbapi.com/?t=" + params + "&y=&plot=short&r=json&tomatoes=true", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var movieObject = JSON.parse(body);
           
            var movieResults =
            "------------------------------ begin ------------------------------" + "\r\n"
            "Title: " + movieObject.Title+"\r\n"+
            "Year: " + movieObject.Year+"\r\n"+
            "Imdb Rating: " + movieObject.imdbRating+"\r\n"+
            "Country: " + movieObject.Country+"\r\n"+
            "Language: " + movieObject.Language+"\r\n"+
            "Plot: " + movieObject.Plot+"\r\n"+
            "Actors: " + movieObject.Actors+"\r\n"+
            "Rotten Tomatoes Rating: " + movieObject.tomatoRating+"\r\n"+
            "Rotten Tomatoes URL: " + movieObject.tomatoURL + "\r\n" + 
            "------------------------------ fin ------------------------------" + "\r\n";
            console.log(movieResults);
            log(movieResults); 
        } else {
            console.log("Error :"+ error);
            return;
        }
    });


    // here we would write simimliar functions as the one above only for twitter and spotify apis. 