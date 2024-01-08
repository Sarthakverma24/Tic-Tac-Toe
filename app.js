let boxes=document.querySelectorAll(".btn");
let resetButton=document.querySelector("#reset");
let newGameBtn=document.querySelector("#newBtn");
let msgCont=document.querySelector(".classMessage")
let message=document.querySelector("#msg");

let turnO=true;

const winningPattern=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
const resetgame=()=>{
    turnO=true;
    enabButton();
    msgCont.classList.add("hide");

}

const disButton=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabButton=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
boxes.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("button was pressed");
        if (turnO){
            btn.innerText="O";
            turnO=false;
        }
        else{
            btn.innerText="X";
            turnO=true;
        }
        btn.disabled=true;
        checkpattern();
    })
})
const showWinner=(Winner)=>{
    msg.innerText=`Congratulaton!,winner is ${Winner}`;
    msgCont.classList.remove("hide");
    disButton();
}
const checkpattern=()=>{
    for(let pattern of winningPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }

}
newGameBtn.addEventListener("click",resetgame);
resetButton.addEventListener("click",resetgame);