let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg")
const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#comp-score")

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIndx = Math.floor(Math.random() *3);
    return options[randIndx]
}

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin) =>{
    if(userwin){
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        userscore += 1;
        userScore.innerText = userscore;
    }else{
        msg.innerText = "You Lose.";
        msg.style.backgroundColor = "red";
        compscore += 1;
        compScore.innerText = compscore
    }
}

const playgame = (userChoice) =>{
    const compChoice = genComputerChoice();

    if(userChoice === compChoice) {
        drawGame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false :true;
        }else if(userChoice === "paper"){
            userwin = compChoice === "scissors" ? false :true;
        }else{
            userwin = compChoice === "rock" ? false :true;
        }
        showWinner(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id");
        playgame(choiceid)
    })
})