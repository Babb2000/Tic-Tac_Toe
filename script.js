

function IntroController(){
  const userSelection = ()=> {
    const choiceX = "X";
    const choiceO = "O";
    const buttonX = document.querySelector('.X');
  buttonX.addEventListener("click", ()=>{
    return choiceX;
  })
    const buttonO = document.querySelector(".O");
    buttonO.addEventListener("click", ()=>{
      return choiceO;
    })
  }
  
  let catchChoice = userSelection();
  
  
  
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
