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


      
      function makeBoard(){
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

        td1.style.backgroundColor = "white";
        td2.style.backgroundColor = "white";
        td3.style.backgroundColor = "white";
        td4.style.backgroundColor = "white";
        td5.style.backgroundColor = "white";
        td6.style.backgroundColor = "white";
        td7.style.backgroundColor = "white";
        td8.style.backgroundColor = "white";
        td9.style.backgroundColor = "white"

    
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


    $("#slideHeader").fadeIn(2000, ()=>{
        chatBox();
    });

    function askAgain(){
        window.location.reload(); //Keep reloading page each time user clicks no
    }
    
    function clearScreen(){
        $("#slideHeader").slideUp();
        $("#no").remove();
        $("#yes").remove();
        $(".buttonFlex2").remove();

        makeBoard();
    }


    document.getElementById("no").onclick = function() {askAgain()};
    document.getElementById("yes").onclick = function() {clearScreen()};

    testX();

    

    function testX (){
       let holder =  document.getElementsByTagName("td")[0];
        holder.addEventListener("click", function(){
        
            let marker = document.createElement('div');
            let img = document.createElement('img');
            img.src = "Images/Untitled design (2).png";
            marker.appendChild(img);
    
            holder.appendChild(marker);
        });
    }
    










});