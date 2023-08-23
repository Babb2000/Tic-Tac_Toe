

function IntroController(){

  const choiceX = "X";
  const choiceO = "O";
  let button1Clicked = false;
  let button2Clicked = false;


  const buttonXClick = () =>{
    playerAssign(choiceX);
    button1Clicked = true;
    checkBothButtonsClicked();
  }
  
  const buttonOClick = () =>{
    playerAssign(choiceO);
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
    makeBoard();
  }
}


  
  //Factory function to assign player name and token
  const playerAssign = (choice)=>{

 
    const player = {
      choice: choice,
    }

    
  


    
  
  return player
  }
  
  userSelection();
  








}
IntroController();

function makeBoard(){

  const body = document.body;
  body.style.backgroundColor = "black";

  for(let i = 0; i < 10; i++){
    const div = document.createElement("div");
    div.classList.add('edit');
    body.appendChild(div);
  }



  let grabber = document.querySelector("div").addEventListener("click", clickElement);

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
}







