
let counter2 = 0;
function IntroController(){

  const choiceX = "X";
  const choiceO = "O";
  let button1Clicked = false;
  let button2Clicked = false;
  const playerHolder = [];

  const buttonX = document.querySelector(".X");
  buttonX.addEventListener("click", ()=>{
  buttonX.style.animationPlayState = 'paused';
   })

  const buttonO = document.querySelector(".O");
  buttonO.addEventListener("click", ()=>{
  buttonO.style.animationPlayState = 'paused';
  })

  //Contructor to set user marker in an object
  function Playerassign(marker){ 
    this.marker = marker;
  }

  const buttonXClick = () =>{
    const player1 = new Playerassign(choiceX); //Create object instance player 1 which has a key value pair of marker: X
    playerHolder.push(player1);
    button1Clicked = true;
    checkBothButtonsClicked();
  }
  
  const buttonOClick = () =>{
    const player2 = new Playerassign(choiceO); //Create object instance player2 which has a key value pair of marker: O
    playerHolder.push(player2);
    button2Clicked = true;
    checkBothButtonsClicked();
  }

  function userSelection(){
  
  
    const buttonX = document.querySelector(".X");
    const buttonO = document.querySelector(".O");

   
   buttonX.addEventListener("click", buttonXClick);
   buttonO.addEventListener("click", buttonOClick);
  }
  
  const clearScreen = ()=> {
  let firstElem = document.getElementsByClassName("X")[0];
  let secondElem = document.getElementsByClassName("O")[0];

  firstElem.remove();
  secondElem.remove();

  displayBoard(playerHolder);
  } 
  
  const checkBothButtonsClicked = ()=>{
  if(button1Clicked && button2Clicked){
    clearScreen();
  
  }
  }

userSelection();

}

IntroController();


//Constructor function to create the board 
function Gameboard(){ 
  const rows = 3;
  const columns = 3;
  const board = [];

  //Use nested for-loop to create a 2D array which holds the entire gameBoard
  for(let i = 0; i < rows; i++){ 
    board[i] = [];
    for(let j = 0; j < columns; j++){
     board[i].push(Cell()); //Each element in the 2D array has a cell object                           
    }
  }

 


  const getBoard = ()=> board;


  

  return{
    getBoard
  }
}


function Cell(){
  

  const addMarker = (player)=>{
  value = player;
  }

  const getValue = ()=> value;

  const addDiv = ()=>{
    const div = document.createElement("div");
    div.classList.add("edit");
    div.style.display = "block";

    return div;
  }


  return{
    addMarker,
    getValue,
    addDiv
  }
}


function Toggleboard(){
  

  const addXmarker = (cellDiv)=>{
    
  let p = document.createElement('p');
  let markerX = document.createTextNode("X");
    
  p.appendChild(markerX);
  p.style.fontSize = "20px";
  p.style.textShadow = "1px 1px 4px white";
  p.style.textAlign = "center";
   
  cellDiv.appendChild(p);
  }

  const addOmarker = (cellDiv)=>{

    let p = document.createElement('p');
    let markerX = document.createTextNode("O");
      
    p.appendChild(markerX);
    p.style.fontSize = "20px";
    p.style.textShadow = "1px 1px 4px white";
    p.style.textAlign = "center";

    cellDiv.appendChild(p);
  }

  return{
    addXmarker,
    addOmarker,
    
  }
}

function checkWinner(arr){

if(arr.length === 3){
  compareWinnerCombo(arr);
}
  
           
}



function displayBoard(playArr){
  
  const tempArr = [];
  let counter = 0;
  const changeMarker = (playArr)=>{
    if(playArr[0].marker === "X"){
      playArr[0].marker = "O";
    }
    else {
      playArr[0].marker = "X";
    }
  }

  const cellProp = Cell();
  
  const board = Gameboard();
  const realBoard = board.getBoard();
  const doc = document.body;
  const containerDiv = document.querySelector(".flex");
  containerDiv.style.display = "grid";
  doc.appendChild(containerDiv);
  
  realBoard.forEach((row)=>{
    row.forEach((cell, index)=>{
      ++counter;
      const cellDiv = cell.addDiv();
      cellDiv.style.display = "flex";
      cellDiv.dataset.number = `${counter}`;
      containerDiv.appendChild(cellDiv);

      cellDiv.addEventListener("click", function(e){
      const toggle = Toggleboard();
      if(playArr[0].marker === "X"){
        toggle.addXmarker(cellDiv);
        let currentElem = e.currentTarget;
        let strId = currentElem.getAttribute("data-number");
        let num = parseInt(strId);
        tempArr.push(num);
        cellProp.addMarker("X");
        changeMarker(playArr);
      }
      else if(playArr[0].marker === "O")
      {
        toggle.addOmarker(cellDiv);
        cellProp.addMarker("O");
        changeMarker(playArr);
      }
      checkWinner(tempArr);
      })
  })
})
}

const compareWinnerCombo = (arr)=>{
  const winningCombos = [[1,2,3],
                          [1,4,7],
                          [1,5,9],
                          [1,5,8],
                          [3,5,7],
                          [3,6,9],
                          [4,5,6],
                          [7,8,9], 
]

for(const element of winningCombos){
  let sortedElement = element.sort();
  let sortedArr = arr.sort();
  for(let i = 0; i < sortedArr.length; i++){
    if(sortedElement[i] != sortedArr[i]){
      return false;
    }
    else{
      console.log("Player 1 is the winner");
    }
  }
}

}




