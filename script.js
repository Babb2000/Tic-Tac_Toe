

function IntroController(){

  const choiceX = "X";
  const choiceO = "O";
  let button1Clicked = false;
  let button2Clicked = false;

  //Contructor to set user marker in an object
  function Playerassign(marker){ 
    this.marker = marker;
  }

  const buttonXClick = () =>{
    const player1 = new Playerassign(choiceX); //Create object instance player 1 which has a key value pair of marker: X
    console.log(player1);
    button1Clicked = true;
    checkBothButtonsClicked();
  }
  
  const buttonOClick = () =>{
    const player2 = new Playerassign(choiceO); //Create object instance player2 which has a key value pair of marker: O
    console.log(player2);
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
    console.log("Inside clearScreen");
  let firstElem = document.getElementsByClassName("X")[0];
  let secondElem = document.getElementsByClassName("O")[0];

  firstElem.remove();
  secondElem.remove();

  displayBoard();
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
 let value = "NA";

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
  const addXmarker = (e)=>{
  let current = e.target;
    

  let holder = document.createElement('div');
    
  let p = document.createElement('p');
  let markerX = document.createTextNode("X");
    
  p.appendChild(markerX);
  p.style.fontSize = "100px";
  p.style.textShadow = "1px 1px 4px white";
  p.style.textAlign = "center";
    
  holder.classList.add("flex");
  holder.appendChild(p);
  
  current.appendChild(holder);
  }

  const addOmarker = (e)=>{
    let current = e.target;
    

    let holder = document.createElement('div');
      
    let p = document.createElement('p');
    let markerX = document.createTextNode("X");
      
    p.appendChild(markerX);
    p.style.fontSize = "100px";
    p.style.textShadow = "1px 1px 4px white";
    p.style.textAlign = "center";
      
    holder.classList.add("flex");
    holder.appendChild(p);
    
    current.appendChild(holder);
  }

  return{
    addXmarker,
    addOmarker
  }
}





function displayBoard(){
  console.log("Inside display board");
  const board = Gameboard();
  const realBoard = board.getBoard();
  const doc = document.body;

  
  realBoard.forEach((row)=>{
    row.forEach((cell, index)=>{
      doc.appendChild(cell.addDiv());
    
    })
  })

}




