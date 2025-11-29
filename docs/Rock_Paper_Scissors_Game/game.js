let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genComputerChoice = () => {
    let options=["rock","paper","scissors"];
    const random = Math.floor(Math.random()*3);
    return options[random];
}
const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "game was draw";
};
const showWinner = (userWin) =>{
    if(userWin){
        console.log("You win!");
        msg.innerText = "You win!"
    }
    else{
        console.log("You lose")
        msg.innerText = "You lose";
    }
}
const playGame = (userChoice) =>{
       console.log("User Choice =",userChoice);
       const computerChoice = genComputerChoice();
       console.log("Computer choice =",computerChoice);

       if(userChoice === computerChoice){
        drawGame();
       }
       else{
        let userWin = true;
        if(userChoice==="rock"){
             userWin = computerChoice==="paper"? false : true ;
        }
        else if(userChoice==="paper"){
            userWin = computerChoice==="scissors" ? false : true ;
        }
        else{
            userWin = computerChoice==="rock" ? false : true ;
        }
        showWinner(userWin);
       }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
            console.log("Choice was clicked",userChoice);
            playGame(userChoice);
    })
})