// initialize win-loss-tie record for user and computer
var userRecord = {
    wins: 0,
    losses: 0
};

var ties = 0;
// initialize wantsToPlay = true
var wantsToPlay = true;

// while wantsToPlay = true 
while (wantsToPlay) {
    // call play function
    if (!play()) {
        wantsToPlay == false;
    }
    
    // ask user if they want to play again
    if (wantsToPlay && confirm("Play Again?")) {
        wantsToPlay = true;
        // display win-loss-tie record
        displayRecord();
    // if no, set wantsToPlay = false
    } else {
        wantsToPlay = false;
    }
}

// play function:
function play() {
    // store the user input
    var userRPS = getUserRPS();
    if (!userRPS) {
        return false;
    }
    console.log("User picked: " + userRPS);
    // generate the computer's r, p, or s and record it
    var computerRPS = getComputerRPS();
    console.log("Computer picked: " + computerRPS);
    
    // if user and computer input is the same
    if (userRPS == computerRPS){
        // record a tie
        displayResult(computerRPS, "tie")
    // else if user chose rock... 
    } else if (userRPS == "rock") {
        // if computer chose scissors record a user win 
        if (computerRPS == "scissors") {
            displayResult(computerRPS, "win");
        }
        // if computer chose paper record a computer win
        if (computerRPS == "paper") {
            displayResult(computerRPS, "lose");
        }
    // else if user chose scissors...
    } else if (userRPS == "scissors") {
        // if computer chose paper record a user win
        if (computerRPS == "paper") {
            displayResult(computerRPS, "win");
        }
        // if comptuer chose rock record a computer win
        if (computerRPS == "rock") {
            displayResult(computerRPS, "lose");
        }
    // else if user chose paper...
    } else if (userRPS == "paper") {
        // if computer chose rock record a user win
        if (computerRPS == "rock") {
            displayResult(computerRPS, "win");
        }
        // if computer chose scissors record a computer win
        if (computerRPS == "scissors") {
            displayResult(computerRPS, "lose");
        }
    }   
    // end play function
    return;
}

function getUserRPS() {
    // ask the user rock, paper, or scissors
    var userInput = prompt("Enter Rock(R), Paper(P), or Scissors(S)");
    if (userInput == null) {
        return false;
    }
    userInput = userInput.toLowerCase();
    // console.log(userInput);
    if (userInput == "r" || userInput == "rock") {
        return "rock";
    } else if (userInput == "p" || userInput == "paper") {
        return "paper";
    } else if (userInput == "s" || userInput == "scissors") {
        return "scissors";
    } else {
        alert("Invalid Entry, try again")
        return getUserRPS();
    }
}

function getComputerRPS() {
    var randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        return "rock";
    } else if (randomNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function displayResult(compRPS, result) {
    if (result == "win"){
        alert("Computer picked " + compRPS + ". You win!");
        userRecord.wins = userRecord.wins + 1;
    } else if (result == "lose") {
        alert("Computer picked " + compRPS + ". You lose!");
        userRecord.losses = userRecord.losses + 1;
    }
    else {
        alert("Computer picked " + compRPS + ". It's a tie!");
        ties = ties + 1;
    } 
}

function displayRecord () {
    if (userRecord.wins == 1) {
        winString = "You have " + userRecord.wins + " win\n"; 
    } else {
        winString = "You have " + userRecord.wins + " wins\n"; 
    } if (userRecord.losses == 1) {
        lossString = userRecord.losses + " loss\n";
    } else {
        lossString = userRecord.losses + " losses\n";
    } if (ties == 1) {
        tieString = "and " + ties + " tie.";
    } else {
        tieString = "and " + ties + " ties";
    }
    alert(winString + lossString + tieString);
}




