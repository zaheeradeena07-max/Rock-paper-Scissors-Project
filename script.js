let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const choices = ["rock", "paper", "scissors"];

    // Computer chooses randomly
    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    // Display choices
    document.getElementById("playerChoice").textContent =
        "You: " + playerChoice;

    document.getElementById("computerChoice").textContent =
        "Computer: " + computerChoice;

    let result;

    // Check winner
    if (playerChoice === computerChoice) {
        result = "It's a Draw! 🤝";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win! 🎉";
        playerScore++;
    }
    else {
        result = "Computer Wins! 🤖";
        computerScore++;
    }

    // Display result
    document.getElementById("resultText").textContent = result;

    // Update score
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

function resetGame() {

    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;

    document.getElementById("playerChoice").textContent = "You: -";
    document.getElementById("computerChoice").textContent = "Computer: -";
    document.getElementById("resultText").textContent = "Make your choice!";
}