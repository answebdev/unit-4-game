$(document).ready(function () {

    // Global variables
    var yourScore = 0;
    var win = 0;
    var loss = 0;
    var sum = 0;
    // var startGame = function() {

    // Generate random number between 19-120 that user has to guess
    var minNumber = 19;
    var maxNumber = 120;
    var randomNum = randomNumFromRange(minNumber, maxNumber);

    function randomNumFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    console.log(randomNum);
    // $("#randomNumber").prepend("<br><hr>" + lottoNumber);
    // document.getElementById("randomNumber").innerHTML = randomNum;
    // document.getElementById("your-score").innerHTML = yourScore;

    // // Generate hidden random number between 1-12 for each crystal
    var lozCrystalNum = Math.floor((Math.random() * 12) + 1);
    // console.log(lozCrystalNum);
    var redCrystalNum = Math.floor((Math.random() * 12) + 1);
    var roundCrystalNum = Math.floor((Math.random() * 12) + 1);
    var yellowCrystalNum = Math.floor((Math.random() * 12) + 1);
    // Push random crystal number into an array to assign it to the crystal for the game
    // var assignedNum1 = [];
    // var assignedNum2 = [];
    // var assignedNum3 = [];
    // var assignedNum4 = [];

    // Generate a random number between 1-12 by clicking on a crystal - each crystal generates its own random number

    // After generating random number, need to keep the same number for each crystal (assign this number to the crystal) for the game (until win or lose)
    // Use these assigned numbers in a formula that adds the numbers together (sum)
    // With each click add the corresponding numbers together with each click (i++ ?)
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
        // console.log("It worked!");
        // var result;
        // lozCrystalNum = Math.floor((Math.random() * 12) + 1);
        console.log("Random value for 1st crystal: " + lozCrystalNum);
        total(lozCrystalNum);

        // assignedNum1.push(lozCrystalNum);
        // Console and use only the first random number of index 0
        // console.log("Random number in index 0 position: " + assignedNum1[0]);
        // console.log("Type of: " + typeof assignedNum1[0]);
        // var an1 = assignedNum1[0];
        // console.log("var: " + an1);

        // result += assignedNum1[0];
        // console.log("Total: " + result);
    });

    $("#crystalTwo").on("click", function () {
        // console.log("It worked!");
        // redCrystalNum = Math.floor((Math.random() * 12) + 1);
        console.log("Random value for 2nd crystal: " + redCrystalNum);
        // console.log(redCrystalNum);

        // assignedNum2.push(redCrystalNum);
        // Console and use only the first random number of index 0
        // console.log(assignedNum2[0]);
        total(redCrystalNum);
        // console.log("Sum: " + sum);
    });

    $("#crystalThree").on("click", function () {
        // console.log("It worked!");
        // roundCrystalNum = Math.floor((Math.random() * 12) + 1);
        console.log("Random value for 3rd crystal: " + roundCrystalNum);
        // console.log(roundCrystalNum);

        // assignedNum3.push(roundCrystalNum);
        // Console and use only the first random number of index 0
        // console.log(assignedNum3[0]);
        total(roundCrystalNum);
    });

    $("#crystalFour").on("click", function () {
        // console.log("It worked!");
        // yellowCrystalNum = Math.floor((Math.random() * 12) + 1);
        console.log("Random value for 4th crystal: " + yellowCrystalNum);
        // console.log(yellowCrystalNum);

        // assignedNum4.push(yellowCrystalNum);
        // Console and use only the first random number of index 0
        // console.log(assignedNum4[0]);
        total(yellowCrystalNum);
    });

    // var addedValues = function () {
    //     sum1 = assignedNum1[0] += assignedNum1[0];
    //     console.log("sum: " + sum1);
    // }

    function total(crystalClick) {
        // sum = lozCrystalNum + redCrystalNum + roundCrystalNum + yellowCrystalNum;
        sum = sum + crystalClick
        console.log("Sum: " + sum);
    }

    // var sum = (assignedNum1[0] + assignedNum2[0] + assignedNum3[0] + assignedNum4[0]);
    // console.log("The total is " + sum);
    // console.log("Type of: " + typeof assignedNum1[0]);

    // Call the checkWin() function here:

    //*******************************************************************

    // Check to see if the user has won
    // var checkWin = function () {
    //     if (yourScore > randomNum) {
    //         alert("You lost");
    //         loss++;
    //         document.getElementById("lossCount").innerHTML = "<strong>Losses:</strong> " + loss;
    //         startGame();
    //     }
    //     else if (yourScore == randomNum) {
    //         alert("You won!");
    //         win++;
    //         document.getElementById("winCount").innerHTML = "<strong>Wins:</strong> " + win;
    //         startGame();
    //     }
    // }

    //*******************************************************************

    // Variables that hold references to the places in the HTML where we want to display things.
    var ranNumLocation = document.getElementById("randomNumber");
    document.getElementById("randomNumber").innerHTML = randomNum;
    document.getElementById("your-score").innerHTML = yourScore;
    // document.getElementById("winCount").innerHTML = "<strong>Wins:</strong> " + win;
    // document.getElementById("lossCount").innerHTML = "<strong>Losses:</strong> " + loss;
    // var yourScore = document.getElementById("your-score");


    // document.getElementById("randomNumber").innerHTML = ranNumLocation;

    // $("#your-score".html(yourScore);


// RESTART THE GAME:
// Set the current score AND your score back to 0
// Change the HTML
// Set the random number and the new random values for the crystals
// So code: after a win/loss has been added (win++/loss++,), and after the HTML has changed, restart the game
    // Need to make a startGame function - already being called above in the code that checks if the user has won

});