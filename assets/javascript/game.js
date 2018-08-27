// Generate random number between 19-120 that user has to guess
var minNumber = 19;
var maxNumber = 120;
var randomNum = randomNumFromRange(minNumber, maxNumber);

function randomNumFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNum);

// Generate hidden random number between 1-12 for each crystal
var lozCrystalNum = Math.floor((Math.random() * 12) + 1);
var redCrystalNum = Math.floor((Math.random() * 12) + 1);
var roundCrystalNum = Math.floor((Math.random() * 12) + 1);
var yellowCrystalNum = Math.floor((Math.random() * 12) + 1);


// Variables that hold references to the places in the HTML where we want to display things.
var ranNumLocation = document.getElementById("randomNumber");

// document.getElementById("randomNumber").innerHTML = ranNumLocation;
