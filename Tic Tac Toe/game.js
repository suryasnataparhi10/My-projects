let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");




// PlayerX and playerO variable
let turnO = true;


// Winning Patterns using 2D array
let winArr = [
    [0 , 1 , 2] , 
    [0 , 3 , 6] ,
    [0 , 4 , 8] , 
    [1 , 4 , 7] , 
    [2 , 5 , 8] , 
    [2 , 4 , 6] , 
    [3 , 4 , 5] , 
    [6 , 7 , 8]
];
boxes.forEach ( (box) => {
    box.addEventListener ("click" ,() => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
       }
       box.disabled = true;
       checkWinner();
    });
 });


 const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
    const enableBoxes = () => {
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
 }
 const showWinner = (winner) => {
    msg.innerText = `Congratulations! , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 }

 const draw = () => {
    msg.innerText = `Oops! It Was a Draw try Again`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 }

const checkWinner = (winner) => {
    for(let pattern of winArr) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != ""  && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }    
 }

 const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

 }
 newGame.addEventListener("click" ,resetGame);
 reset.addEventListener("click" ,resetGame);