

//Event listener to gather user selection
const userSelection = ()=> {
  
  const buttonX = document.querySelector('.X');
buttonX.addEventListener("click", ()=>{
  alert("You chose to be X!!!");
})
  const buttonO = document.querySelector(".O");
  buttonO.addEventListener("click", ()=>{
    alert("You chose to be O!!!");
  })

}


userSelection();











