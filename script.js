

function IntroController(){
  const userSelection = ()=> {
    const choiceX = "X";
    const choiceO = "O";
  
    const buttonX = document.querySelector(".X");
    const buttonO = document.querySelector(".O");

    return new Promise((resolve, reject) =>{
      buttonX.addEventListener("click", ()=>{
        resolve(choiceX);
      })
    

    buttonO.addEventListener("click", ()=> {
      resolve(choiceO);
    })
  })
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
