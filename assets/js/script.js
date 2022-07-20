const buttons = document.getElementsByClassName("selection");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("message");
const choices = ["rock", "paper", "scissors", "lizard", "spock"]


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
 * The main game function. Accepts one parameter, which
 * is the data-choice value of the selected button
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}-image.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}-image.jpg`;
    computerImage.alt = choices[computerChoice];

    const computerChoiceString = choices[computerChoice];
    const playerChoiceString = choices[playerChoice];

     const didPlayerWin = didPlayerWin(playerChoiceString, computerChoiceString);

        if (didPlayerWin) {
           playerScore.innerHTML++;
       }
        else {
            computerScore.innerHTML++;
         }
}

/**
 * This function tells us if the player has won or not
 */
function didPlayerWin(playerChoice, computerChoice) {
    switch (playerChoice) {
        case "rock":
            if (computerChoice == "scissors" || computerChoice == "lizard") {
                return true;
            }
            else {
                return false 
            }
        case "paper":
            if (computerChoice == "rock" || computerChoice == "spock") {
                return true;
            }
            else {
                return false
            }
        case "scissors":
            if (computerChoice == "paper" || computerChoice == "lizard") {
                return true;
            }
            else {
                return false
            }
        case "lizard":
            if (computerChoice == "spock" || computerChoice == "paper") {
                return true;
            } 
            else {
                return false
            }
        case "spock":
            if (computerChoice == "scissors" || computerChoice == "rock") {
                return true;
            } 
            else {
                return false
            }

        default:
            console.error("out of range value was put in")
            break;
    }
}

function incrementYourScore() {
    if (didPlayerWin) {
        player-score.innerText++;
    } 
    else {
        computer-score.innerText++;
    }
}
