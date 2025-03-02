let userScore = 0;
let computerScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const winMsg = document.getElementById("msg");
const userScorePara = document.getElementById("user-score");
const computerScorePara = document.getElementById("comp-score")
const drawScorePara = document.getElementById("draw-score")

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * 3)
    return options[randomIndex];
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        winMsg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`
        winMsg.style.backgroundColor = "green"
    } else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        winMsg.innerText = `You lose! Computer ${computerChoice} beats your ${userChoice}`;
        winMsg.style.backgroundColor = "red"
    }
}

const drawGame = () => {
    drawScore++;
    drawScorePara.innerText = drawScore;
    winMsg.innerText = "Game was Draw.Play again."
    winMsg.style.backgroundColor = "gray"
}

const playGame = (userChoice) => {
    const computerChoice = generateComputerChoice();

    // conditions
    if(userChoice === computerChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        } else{
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id")
        playGame(userChoice)
    })
})