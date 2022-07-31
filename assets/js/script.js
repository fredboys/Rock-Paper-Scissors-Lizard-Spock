const buttons = document.getElementsByClassName("selection");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("message");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const restart = document.getElementById("restart");
const modal = document.getElementById("myModal");


/**
 * Add event listener to all the buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * Add event listener to restart button
 */
 restart.addEventListener("click", restartGame);

/**
 *  Activates class active when rules button clicked
 */
function styleModal() {
    modal.classList.toggle("active");
}

/**
 * When the user clicks anywhere outside the modal, close it 
 */
window.onclick = function(event) {
    if (event.target == modal) {
        styleModal();
    }
};

/**
 * The main game function. Accepts one parameter, which
 * is the data-choice value of the selected button
 */
function playGame(playerChoice) {

    //Get a random value for the computer
    let computerChoice = Math.floor(Math.random() * 5);


    //Getting string results for the player and computers from the integer choice, eg "spock", "lizard"
    const computerChoiceString = choices[computerChoice];
    const playerChoiceString = choices[playerChoice];


    //Set the player image to the players choice
    playerImage.src = `assets/images/${choices[playerChoice]}-image.jpg`;
    playerImage.alt = choices[playerChoice];


    //Set the computer image to the computers choice
    computerImage.src = `assets/images/${choices[computerChoice]}-image.jpg`;
    computerImage.alt = choices[computerChoice];

    
    if (playerChoiceString == computerChoiceString) {
        messages.innerText = "DRAW";
        return;
    }

    //Calculate if the player won
    const didPlayerWin = calculateIfPlayerWon(playerChoiceString, computerChoiceString);

    //Increment the scores based on if the player won
    incrementYourScore(didPlayerWin);

}



/**
 * This function tells us if the player has won or not
 */
function calculateIfPlayerWon(playerChoice, computerChoice) {
    switch (playerChoice) {
        case "rock":
            if (computerChoice == "scissors" || computerChoice == "lizard") {
                return true;
            }
            else {
                return false;
            } break;
        case "paper":
            if (computerChoice == "rock" || computerChoice == "spock") {
                return true;
            }
            else {
                return false;
            } break;
        case "scissors":
            if (computerChoice == "paper" || computerChoice == "lizard") {
                return true;
            }
            else {
                return false;
            } break;
        case "lizard":
            if (computerChoice == "spock" || computerChoice == "paper") {
                return true;
            } 
            else {
                return false;
            } break;
        case "spock":
            if (computerChoice == "scissors" || computerChoice == "rock") {
                return true;
            } 
            else {
                return false;
            } break;

        default:
            console.error("out of range value was put in");
            break;
    }
}

/**
 * Gets the current score from the DOM and increments by 1
 */
 function incrementYourScore(didPlayerWin) {

    //Get computer or player html tag, and get the number value of the tag and increment by 1
    if (didPlayerWin) {
        const newScore = Number(playerScore.innerText) + 1;
        playerScore.innerText = newScore;
        messages.innerText = "YOU WIN";
    } 
    else {
        const newScore = Number(computerScore.innerText) +1;
        computerScore.innerText = newScore;
        messages.innerText = "COMPUTER WIN";
    }
}

/**
 * Restarts the game and scores back to 0
 */
 function restartGame() {
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    messages.innerText = "";
    playerImage.src = `assets/images/questionmark-image.jpg`;
    playerImage.alt = "A question mark";
    computerImage.src = `assets/images/questionmark-image.jpg`;
    computerImage.alt = "A question mark";
    alert("Game is Reset");
}