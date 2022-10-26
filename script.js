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

        const now = setTimeout(removeChatBox(), 700);
        now;
      }


    function removeChatBox(){
        $(".buttonFlex2").fadeOut(1000);
    }

    $("#slideHeader").fadeIn(2000, ()=>{
        chatBox();
    })


    

      function userData(){
          let holder = document.createElement('div');
          holder.setAttribute("id","realGameBoard");
          holder.style.backgroundColor = "white";
          holder.style.borderRadius = "30px";
          let getter = document.createElement('div');
          getter.setAttribute("id", "gameBoard");
          getter.appendChild(holder);
          document.body.appendChild(getter);

          //Create a way to ask user to pick a marker
          getMarker()
      }

      function getMarker(){
          let holder = document.getElementById("realGameBoard");
         
          let image = document.createElement('img');
          image.src = "Images/X_Icon.png";

          let image2 = document.createElement('img');
          image2.src = "Images/O_Icon.png";

          let div2 = document.createElement('div');
          let div3 = document.createElement('div');

          div2.style.height = "200px";
          div2.style.wdith = "200px";
          div2.setAttribute("id", "moveMouse")
          div3.style.height = "200px";
          div3.style.wdith = "200px";
          div3.setAttribute("id", "moveMouse")

          div2.appendChild(image);
          div3.appendChild(image2);

          let header = document.createElement('h1');
          let divHolder = document.createElement('div');
          divHolder.style.height = "550px";
          divHolder.style.width = "700px";
          divHolder.style.display = "flex";
          divHolder.style.justifyContent = "space-evenly";


          divHolder.appendChild(div2);
          divHolder.appendChild(div3);

          
          header.innerHTML = "Player 1";
          header.style.color = 'black';
          header.style.display = "block";
          header.style.fontSize = "60px";
          header.style.paddingTop = "25px";
          holder.appendChild(header);
          holder.appendChild(divHolder);
      }
      
       function makeBoard(){

        //Store gameboard as an array inside of a gameboard object
        let firstDiv = document.createElement('div');
        firstDiv.setAttribute("id", "gameBoard");
        let secDiv = document.createElement('div');
        secDiv.setAttribute("id", "realGameBoard");
        let table = document.createElement('table');

        let tr1 = document.createElement('tr');
        let tr2 = document.createElement('tr');
        let tr3 = document.createElement('tr');

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');

        let td7 = document.createElement('td');
        let td8 = document.createElement('td');
        let td9 = document.createElement('td');

        
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);

        tr2.appendChild(td4);
        tr2.appendChild(td5);
        tr2.appendChild(td6);

        tr3.appendChild(td7);
        tr3.appendChild(td8);
        tr3.appendChild(td9);

        table.appendChild(tr1);
        table.appendChild(tr2);
        table.appendChild(tr3);

        secDiv.appendChild(table);
        firstDiv.appendChild(secDiv);
        document.body.appendChild(firstDiv);
    }

    


       

    function askAgain(){
        window.location.reload(); //Keep reloading page each time user clicks no
    }
    
    function clearScreen(){
        $("#slideHeader").remove();
        $("#no").remove();
        $("#yes").remove();
        $(".buttonFlex2").remove();
        

       userData();
    }


    document.getElementById("no").onclick = function() {askAgain()};
    document.getElementById("yes").onclick = function() {clearScreen()};



    //Store gameboard as an array inside a Gameboard Object

    /*const gameboard = {
        make
        board: [td1, td2, td3, td4, td5, td6, td7, td8, td9],
    }
    */






    function Player(name, marker) //Factory Function for each player
    {
        this.name = name;
        this.marker = marker;
    }
 

    Player.prototype.sayName = function (){ //Good practice to define functions on prototypes
        console.log(this.name, this.marker);
    }

   

    







});