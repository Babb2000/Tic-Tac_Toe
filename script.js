

function IntroController(){
  const choiceX = "X";
  const choiceO = "O";

  const userSelection = ()=> {
  
  
    const buttonX = document.querySelector(".X");
    const buttonO = document.querySelector(".O");

   
   buttonX.addEventListener("click", buttonXClick);
   buttonO.addEventListener("click", buttonOClick);
}
  
const buttonXClick = () =>{
  playerAssign(choiceX);
}

const buttonOClick = () =>{
  playerAssign(choiceO);
}


  
userSelection().then((choice) =>{
  let catchChoice = choice;
  playerAssign(catchChoice);
})
  
  
  
  //Factory function to assign player name and token
  function playerAssign(choice){
  
  const player = {
    choice: choice,
  }

  console.log(player);
  
  return player;
  }
  
  playerAssign(catchChoice);
}


IntroController();

function makeBoard(){
  for(let i = 0; i < 10; i++){
    const div = document.createElement("div");
    div.classList.add('edit');
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







