$(document).ready(function(){

      

    $("#slideHeader").fadeIn(2000, ()=>{
        alert("Move your mouse under the question");
    });

    function askAgain(){
        window.location.reload(); //Keep reloading page each time user clicks no
    }
    
    function startGame(){
        $("#slideHeader").slideUp();
        $("#no").remove();
        $("#yes").remove();
    }


    document.getElementById("no").onclick = function() {askAgain()};
    document.getElementById("yes").onclick = function() {startGame()};

    











});