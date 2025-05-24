let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let turndisplay=document.querySelector(".turn");

let turn="X";
turndisplay.innerText="Player X's turn";
const winning=[[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(box.innerText=="")
        {
            box.innerText=turn;
            turn=(turn=="X")?"O":"X";
        
        box.disabled=true;
        turndisplay.innerText=`Player ${turn}'s turn`;
        checkWinner();
        }
    });
});
const checkWinner = () => {
  for (let win of winning) {
    const [a, b, c] = win;
    let val1 = boxes[a].innerText;
    let val2 = boxes[b].innerText;
    let val3 = boxes[c].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      turndisplay.innerText = `Player ${val1} wins`;
      boxes.forEach((box)=>{box.disabled = true;
      });
      [a, b, c].forEach(i => boxes[i].style.backgroundColor = "lightgreen");
      return;
    }
  }
};

resetbtn.addEventListener("click",()=>{
    boxes.forEach((box) => {
    box.disabled=false;
    box.innerText="";
    turn="X";
    turndisplay.innerText=`Player ${turn}'s turn`;
    });
});


