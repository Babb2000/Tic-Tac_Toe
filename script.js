
function IntroController(){









}




const placeMarker = () =>{

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

const createBoard = () =>{
    
}