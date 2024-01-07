let userScore = 0;
let compScore = 0;
let drawScore = 0;
const choices = document.querySelectorAll(".choice");
const msgContainer = document.querySelector(".msgContainer");
const msg = document.querySelector("#msg"); 
const userScorepara  = document.querySelector("#userScore");
const compScorepara  = document.querySelector("#compScore");
const drawScorepara  = document.querySelector("#drawScore");
const resetBtn  = document.querySelector(".resetBtn");

const genCompChoice = () => {
    const options = ["rock","paper","sissors"];
    const randomIndex = Math.floor(Math.random()*options.length);
    return options[randomIndex];
}

const drawGame = () => {
    console.log("Draw!");
    drawScore++;
    drawScorepara.innerHTML = `🤝 ${drawScore}`;
    msg.innerText = "It's a Draw. Play again.";
    msg.style.backgroundColor = "#FFED99";
    msgContainer.style.backgroundColor = "#FFED99";
    msgContainer.style.borderColor = "#AC66CC";
    msgContainer.style.color = "#AC66CC";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerHTML = `😎 ${userScore}`;
        console.log("Win");
        msg.innerText = `Win!😁 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#001C30";
        msgContainer.style.backgroundColor = "#001C30";
        msgContainer.style.borderColor = "#64CCC5";
        msgContainer.style.color = "#64CCC5";
    }
    else{
        console.log("Lose");
        compScore++;
        compScorepara.innerHTML = `🤖 ${compScore}`;
        msg.innerText = `Lose!😓 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#FF004D";
        msgContainer.style.backgroundColor = "#FF004D";
        msgContainer.style.borderColor = "#7E2553";
        msgContainer.style.color = "#7E2553";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    console.log(`computer choice: ${compChoice}`);
    console.log(`user choice: ${userChoice}`);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, sissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, sissors
            userWin = compChoice === "sissors" ? false : true;
        }else{
            //rock, paper
            // userWin = compChoice === "rock"? false : true;
            if(userChoice === "sissors"){
                userWin = compChoice === "rock"? false : true;
            }
            else{
                console.log("Sessors-Else");
            }
        }
        showWinner(userWin,userChoice,compChoice);
    }   
};
resetBtn.addEventListener("click", () => {
    console.log("reset");
    userScore = 0;
    userScorepara.innerHTML = `😎 ${userScore}`;
    compScore = 0;
    compScorepara.innerHTML = `🤖 ${compScore}`;
    drawScore = 0;
    drawScorepara.innerHTML = `🤝 ${drawScore}`;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#7FC7D9";
    msgContainer.style.backgroundColor = "#7FC7D9";
    msgContainer.style.borderColor = "#365486";
    msgContainer.style.color = "#365486";
});

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
