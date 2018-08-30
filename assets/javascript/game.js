$(document).ready(function () {

    // Global variables
    var yourScore = 0;
    var win = 0;
    var loss = 0;
    // var sum = 0;
    // var startGame = function() {

    // Generate random number between 19-120 that user has to guess
    var minNumber = 19;
    var maxNumber = 120;
    var randomNum = randomNumFromRange(minNumber, maxNumber);

    function randomNumFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    console.log(randomNum);

    // // Generate hidden random number between 1-12 for each crystal
    var lozCrystalNum = Math.floor((Math.random() * 12) + 1);
    // console.log(lozCrystalNum);
    var redCrystalNum = Math.floor((Math.random() * 12) + 1);
    var roundCrystalNum = Math.floor((Math.random() * 12) + 1);
    var yellowCrystalNum = Math.floor((Math.random() * 12) + 1);

    // Generate a random number between 1-12 by clicking on a crystal - each crystal generates its own random number

    // After generating random number, need to keep the same number for each crystal (assign this number to the crystal) for the game (until win or lose) -- DONE
    // Use these assigned numbers in a formula that adds the numbers together (sum) -- DONE
    // With each click add the corresponding numbers together with each click (i++ ?) -- DONE
    // If the sum is equal to the random number, user wins - add a win and display a win message
    // If the sum is greater than the random number, user loses - add a loss and display a loss message
    // Restart the game - pick a new random number, etc.

    // Reset the current score
    // Set a new random number between 19 and 120
    // Set different values for each of the crystals between 1 and 12
    // Change the HTML to reflect all of the changes


    // }

    // startGame();
    $("#crystalOne").on("click", function () {
        console.log("Random value for 1st crystal: " + lozCrystalNum);
        total(lozCrystalNum);
    });

    $("#crystalTwo").on("click", function () {
        console.log("Random value for 2nd crystal: " + redCrystalNum);
        total(redCrystalNum);
    });

    $("#crystalThree").on("click", function () {
        console.log("Random value for 3rd crystal: " + roundCrystalNum);
        total(roundCrystalNum);
    });

    $("#crystalFour").on("click", function () {
        console.log("Random value for 4th crystal: " + yellowCrystalNum);
        total(yellowCrystalNum);
    });

    // Function that adds the total value of the crystals together to get user's total score
    function total(crystalClick) {
        yourScore = yourScore + crystalClick;
        document.getElementById("your-score").innerHTML = yourScore;
        console.log("Your Score: " + yourScore);
        checkWin();
        // RESTART GAME FUNCTION HERE?
    }

    // Check to see if the user has won
    function checkWin() {
        if (yourScore > randomNum) {
            $(function () {
                $('#lose-flash').delay(500).fadeIn('normal', function () {
                    $(this).delay(2500).fadeOut();
                });
            });
            // alert("You lost");
            loss++;
            document.getElementById("lossCount").innerHTML = "<strong>Losses:</strong> " + loss;
            restartGame();
        }
        else if (yourScore == randomNum) {
            $(function () {
                $('#win-flash').delay(500).fadeIn('normal', function () {
                    $(this).delay(2500).fadeOut();
                });
            });
            // alert("You won!");
            win++;
            document.getElementById("winCount").innerHTML = "<strong>Wins:</strong> " + win;
            restartGame();
        }
    }

    function restartGame() {
        yourScore = 0;
        document.getElementById("your-score").innerHTML = yourScore;
        console.log("Game over, your score: " + yourScore);
        randomNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        document.getElementById("randomNumber").innerHTML = randomNum;
        console.log("New random number: " + randomNum);
        // reset crystal values
        lozCrystalNum = Math.floor((Math.random() * 12) + 1);
        redCrystalNum = Math.floor((Math.random() * 12) + 1);
        roundCrystalNum = Math.floor((Math.random() * 12) + 1);
        yellowCrystalNum = Math.floor((Math.random() * 12) + 1);
        console.log("New crystal values: " + " Green = " + lozCrystalNum + " red = " + redCrystalNum + " round = " + roundCrystalNum + " yellow = " + yellowCrystalNum);
    }

    // Variables that hold references to the places in the HTML where we want to display things.
    var ranNumLocation = document.getElementById("randomNumber");
    document.getElementById("randomNumber").innerHTML = randomNum;
    document.getElementById("your-score").innerHTML = yourScore;

});