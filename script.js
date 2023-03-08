const buttonHOLD = document.getElementById("playerHold");
const buttonDICE = document.getElementById("playerDICE");
const reset=document.querySelector(".reset");
const img=document.querySelector("img");
const container1=document.querySelector("#first");
const container2=document.querySelector("#second");


var GlobalJ1=  document.querySelector(".Globalj1 p");
var GlobalJ2=  document.querySelector(".Globalj2 p");

var Roundj1=  document.querySelector(".roundj1 p");
var Roundj2=  document.querySelector(".roundj2 p");
console.log(reset.innerHTML);
//pour savoir c'est au tour de qui !!!
var player1=true;
//function HOLD 
function HOLD(){
  if(player1==true){
    GlobalJ1.innerHTML=parseInt(Roundj1.innerHTML)+ parseInt(GlobalJ1.innerHTML); 
    player1=false;
    console.log(parseInt(Roundj1.innerHTML)+ parseInt(GlobalJ1.innerHTML));
    Roundj1.innerHTML=0;
    win();
  }else{
    GlobalJ2.innerHTML=parseInt(Roundj2.innerHTML) + parseInt(GlobalJ2.innerHTML);
    player1=true;
    console.log(GlobalJ2.innerHTML)
    Roundj2.innerHTML=0;
    win();
  }
  setbackground();
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
    DICE(scoreTemp);
    setbackground();
  }

//function RESET GAME
  function resetgame(){
    player1=true;
    Roundj1.innerHTML=0;
    Roundj2.innerHTML=0;
    GlobalJ1.innerHTML=0;
    GlobalJ2.innerHTML=0;
    buttonDICE.removeAttribute("disabled")
    buttonHOLD.removeAttribute("disabled")

  }

//wining condition 
function win(){
if(GlobalJ1.innerHTML>=100){
  alert("Félicitation Joueur 1 vous avez gagné");
  buttonDICE.setAttribute("disabled","true");
  buttonHOLD.setAttribute("disabled","true");
}
if(GlobalJ2.innerHTML>=100){
  alert("Félicitation Joueur 2 vous avez gagné");
  buttonDICE.setAttribute("disabled","true");
  buttonHOLD.setAttribute("disabled","true");
}
}
//dés a afficher
function DICE(des){
switch (des) {
  case 1:
    img.src="image/Dice-1.png"
    break;
  
  case 2:
    img.src="image/Dice-2.png"
    break;
  
  case 3:
    img.src="image/Dice-3.png"
    break;
  
  case 4:
    img.src="image/Dice-4.png"
    break;
  
  case 5:
    img.src="image/Dice-5.png"

    break;
  
  case 6:
    img.src="image/Dice-6.png"
    break;


  default:
    console.log(img.innerHTML);
    break;
}
}
function setbackground(){
  if(player1==true){
    container1.style.backgroundColor="lightgray"
    container2.style.backgroundColor="whitesmoke"
    console.log("changé")
  }else{
    container1.style.backgroundColor="whitesmoke"
    container2.style.backgroundColor="lightgray"
    console.log("changé")
  }


}
//creation des events 
buttonHOLD.addEventListener('click',HOLD);
buttonDICE.addEventListener('click',ROLL);
reset.addEventListener('click',resetgame);
