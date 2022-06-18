$(document).ready(function(){

      function chatBox(){
          let holder1 = document.createElement('div');
          holder1.classList.add("buttonFlex2");

          let holder2 = document.createElement('div');
          holder2.classList.add("imageHolder");
          
          

          let image = document.createElement('img');
          image.src = "Images/SEEK LIFE. (200 × 200 px).png";
          holder1.appendChild(holder2);
          holder2.appendChild(image);
          document.body.appendChild(holder1);
      }


    $("#slideHeader").fadeIn(2000, ()=>{
        chatBox();
    });

    function askAgain(){
        window.location.reload(); //Keep reloading page each time user clicks no
    }
    
    function startGame(){
        $("#slideHeader").slideUp();
        $("#no").remove();
        $("#yes").remove();
        $(".buttonFlex2").remove();
    }


    document.getElementById("no").onclick = function() {askAgain()};
    document.getElementById("yes").onclick = function() {startGame()};

    











});