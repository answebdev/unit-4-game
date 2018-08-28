$(document).ready(function () {

    // Generate random number between 19-120 that user has to guess
    var minNumber = 19;
    var maxNumber = 120;
    var randomNum = randomNumFromRange(minNumber, maxNumber);

    function randomNumFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    console.log(randomNum);
    // $("#randomNumber").prepend("<br><hr>" + lottoNumber);
    document.getElementById("randomNumber").innerHTML = randomNum;

    // // Generate hidden random number between 1-12 for each crystal
    // var lozCrystalNum = Math.floor((Math.random() * 12) + 1);
    // console.log(lozCrystalNum);
    // var redCrystalNum = Math.floor((Math.random() * 12) + 1);
    // var roundCrystalNum = Math.floor((Math.random() * 12) + 1);
    // var yellowCrystalNum = Math.floor((Math.random() * 12) + 1);

    // Generate a random number between 1-12 by clicking on a crystal - each crystal generates its own random number
    $("#crystalOne").on("click", function () {
        // console.log("It worked!");
        var lozCrystalNum = Math.floor((Math.random() * 12) + 1);
        console.log(lozCrystalNum);
    });

    $("#crystalTwo").on("click", function () {
        // console.log("It worked!");
        var redCrystalNum = Math.floor((Math.random() * 12) + 1);
        console.log(redCrystalNum);
    });

    $("#crystalThree").on("click", function () {
        // console.log("It worked!");
        var roundCrystalNum = Math.floor((Math.random() * 12) + 1);
        console.log(roundCrystalNum);
    });

    $("#crystalFour").on("click", function () {
        // console.log("It worked!");
        var yellowCrystalNum = Math.floor((Math.random() * 12) + 1);
        console.log(yellowCrystalNum);
    });


    // Variables that hold references to the places in the HTML where we want to display things.
    var ranNumLocation = document.getElementById("randomNumber");

    // document.getElementById("randomNumber").innerHTML = ranNumLocation;



});