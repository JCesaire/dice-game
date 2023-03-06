const buttonHOLD = document.getElementById("playerHold");
const buttonDICE = document.getElementById("playerDICE");

var GlobalJ1=  document.querySelector(".Globalj1 p");
var GlobalJ2=  document.querySelector(".Globalj2 p");

var Roundj1=  document.querySelector(".roundj1 p");
var Roundj2=  document.querySelector(".roundj2 p");

//pour savoir c'est au tour de qui !!!
var player1=true;
//function HOLD 
function HOLD(){
  if(player1==true){
    GlobalJ1.innerHTML=parseInt(Roundj1.innerHTML)+ parseInt(GlobalJ1.innerHTML); 
    player1=false;
    console.log(parseInt(Roundj1.innerHTML)+ parseInt(GlobalJ1.innerHTML));
    Roundj1.innerHTML=0;
  }else{
    GlobalJ2.innerHTML=parseInt(Roundj2.innerHTML) + parseInt(GlobalJ2.innerHTML);
    player1=true;
    console.log(GlobalJ2.innerHTML)
    Roundj2.innerHTML=0;
  }
}
  //function ROLL DICE
function ROLL(){
    var scoreTemp=Math.floor(Math.random()*5)+1;
    console.log(scoreTemp);
    if(scoreTemp==1){
      if(player1==true){
        
         Roundj1.innerHTML=0;
         player1=false;
      }else{
        
        Roundj2.innerHTML=0;
        player1=true;

      }

    }else{
      if(player1==true){
        Roundj1.innerHTML=parseInt(Roundj1.innerHTML)+scoreTemp;

      }else{ Roundj2.innerHTML=parseInt(Roundj2.innerHTML)+scoreTemp;}
    }
  }
//creation de levent HOLD
buttonHOLD.addEventListener('click',HOLD);
buttonDICE.addEventListener('click',ROLL);