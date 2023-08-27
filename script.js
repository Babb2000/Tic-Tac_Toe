

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
  let firstElem = document.getElementsByClassName("X")[0];
  let secondElem = document.getElementsByClassName("O")[0];

  firstElem.remove();
  secondElem.remove();
}
  
const checkBothButtonsClicked = ()=>{
  if(button1Clicked && button2Clicked){
    clearScreen();
  
  }
}


  userSelection();



  
}

IntroController();



const gameBoard = ()=>{

  const body = document.body;
  body.style.backgroundColor = "black";
  const firstDiv = document.createElement("div");
  console.log(firstDiv);
  firstDiv.classList.add("grid-container");

  for(let i = 0; i < 9; i++){
    const div = document.createElement("div");
    div.classList.add('edit');
    firstDiv.appendChild(div);
  }



  


}


function clickElement(e){
 
  let current = e.target;
    

  let holder = document.createElement('div');
    
  let p = document.createElement('p');
   let markerX = 
       document.createTextNode("X");
    
  p.appendChild(markerX);
  p.style.fontSize = "100px";
  p.style.textShadow = "1px 1px 4px white";
  p.style.textAlign = "center";
    
  holder.classList.add("flex");
  holder.appendChild(p);
  
  current.appendChild(holder);
  
  
}



