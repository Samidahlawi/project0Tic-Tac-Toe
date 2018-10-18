var container       = document.querySelector(".container");
var selectElement   = document.querySelectorAll(".element");
var namePlayerOne   = document.querySelector("#namePlayerOne");
var namePlayerTwo   = document.querySelector("#namePlayerTwo");
var titleOftie      = document.querySelector("#TitleOfTie");
var result          = document.querySelector("#result");

var playerComputer  = document.querySelector("#playerComputer");
var players         = document.querySelector("#players");
players.addEventListener("click",computerPlayer);
playerComputer.addEventListener("click",persons);

var playerOne       = document.querySelector("#playerOne");
var playerTwo       = document.querySelector("#playerTwo");
var playTie         = document.querySelector("#nameTie");
var winner          = document.querySelector("#winner");

var countPlayerX    = 0; // player 1
var countPlayerY    = 0; // player 2
var countTie        = 0; // either player 1 or player 2
var count           = 0; // count number of click on boxs 

playerOne.innerText =   countPlayerY;
playerTwo.innerText =   countPlayerX;
playTie.innerText   =   countTie;

//Sounds 
var xSound      = new Audio('xSound.mov');
var ySound      = new Audio('ySound.mov');
var plusSound   = new Audio('Stapler-SoundBible.com-374581609.wav');

//PlyaerOne turn and playerTwo turn
var yourTurn = true;

//Computer Player  
var isComputer = false;
var thereWinner = false;
function setEvent(arrElement){
    //Change turns
    if(isComputer){
        setTimeout(function () {
            count = 0;
            AddactionOfEvent();
        },200);
    }else if(yourTurn){
    count = 0;
    yourTurn = false;
    }else{
    yourTurn = true;
    count = 1;
    }
    
   
   thereWinner = false;

   // container.removeEventListener("click",function(){setEvent(selectElement)});
  for (var i = 0 ; i < arrElement.length ; i++){
       arrElement[i].className = "element";
       arrElement[i].addEventListener("click",AddactionOfEvent);
  }
}
 
function removeEvent(arrElement)
{
    for(var i = 0; i < arrElement.length; i++){
        arrElement[i].removeEventListener("click",AddactionOfEvent);
    }
}

function AddactionOfEvent (event){
    count += 1;
    console.log(count);
    if(isComputer){
        console.log("Computer played");
        if(count % 2 === 0){
            ySound.play();
            this.classList.toggle("xBox");
            checkWinner(selectElement,"xBox");
            if(!thereWinner){
                setTimeout(function () {
                    AddactionOfEvent(event);
                },300);
            }
        }else{
            xSound.play();
            computer(selectElement);
            checkWinner(selectElement,"circleBox");
        }
    }else{
        if(count % 2 === 0){
            xSound.play();
            this.classList.toggle("circleBox");
            checkWinner(selectElement,"circleBox");
        }else{
            ySound.play();
            this.classList.toggle("xBox");
            checkWinner(selectElement,"xBox");
        }   
    }  
    this.removeEventListener("click",AddactionOfEvent);
    result.innerText = ShowResult();
}



function checkWinner(arrElements,kindBox){
    var checkBoxs = [false,false,false];
    var noOneWin = true;
    var onecWin = true;
    var correctElements = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(var i = 0 ; i < correctElements.length ; i++){
        for(var j = 0; j < 3;j++){
            if(arrElements[correctElements[i][j]].classList.contains(kindBox)){
                checkBoxs[j] = true;
            }else{
                checkBoxs[j] = false;
            }
        }
        if(checkBoxs[0] && checkBoxs[1] && checkBoxs[2] && onecWin){
            noOneWin = false;
            onecWin = false;
            // console.log("Winnnner " + kindBox);
            if(kindBox == "xBox"){ 
            thereWinner =true;
            setTimeout(function(){namePlayerOne.classList.remove("flash");},200);
            namePlayerOne.classList.add("flash");
            // alert("The player 'One' is Winner." );
            countPlayerX++;
            playerOne.innerText = countPlayerX;  
            //    container.addEventListener("click",function(){setEvent(selectElement)});
            removeEvent(selectElement);
            setTimeout(function (){setEvent(selectElement)},1000);
            plusSound.play();
            }else{
            thereWinner =true;
            onecWin = false;
            namePlayerTwo.classList.add("flash");
            setTimeout(function(){namePlayerTwo.classList.remove("flash");},200);
            //alert("The player 'Two' is Winner.");
            countPlayerY++;
            playerTwo.innerText = countPlayerY;
            //   container.addEventListener("click",function(){setEvent(selectElement)});
            removeEvent(selectElement);
            setTimeout(function (){setEvent(selectElement)},1000);
            plusSound.play();
            }
            // checkBox = [false,false,false];
        }
       
    }
    
        if((noOneWin && count === 9 && !yourTurn) || (noOneWin && count === 10 && yourTurn)){
            countTie++;
            playTie.innerText = countTie;
            removeEvent(selectElement);
            setTimeout(function (){setEvent(selectElement)},1000);
            plusSound.play();
        }

}


function computerPlayer(event){
    this.classList.add("hidden");
    playerComputer.classList.remove("hidden");
    namePlayerTwo.innerText = "COMPUTER_2_(o)";
    isComputer = true;
    //computer(selectElement);
    countPlayerX = 0;
    countPlayerY = 0;
    countTie     = 0;
    playerOne.innerText = countPlayerX;  
    playerTwo.innerText = countPlayerY;
    playTie.innerText = countTie;
    AddactionOfEvent();
}

function persons(event){
    this.classList.add("hidden");
    players.classList.remove("hidden");
    namePlayerTwo.innerText = "PLAYER_2_(o)";
    console.log("Player2");
    isComputer = false;
    countPlayerX = 0;
    countPlayerY = 0;
    countTie     = 0;
    playerOne.innerText = countPlayerX;  
    playerTwo.innerText = countPlayerY;
    playTie.innerText = countTie;
    setEvent(selectElement);
  

}

function ShowResult(){
    max = 0;
    var viewResult = ""; 
    if(max < countPlayerX){
        max = countPlayerX;
        viewResult = "The Player_1 is winner";
    }if(max < countPlayerY){
        max = countPlayerY;
        viewResult = "The Player_2 is winner";
    }if(countPlayerX === countPlayerY){
        max = 0;
        viewResult = "All Equal";
        // titleOftie.classList.add("flash");
        // setTimeout(function(){titleOftie.classList.remove("flash");},200);
    }
    return viewResult;
}

setEvent(selectElement);
//hello world I am going to do something
//ddddd
//ddddd