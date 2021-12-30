// alert("Working");

// for img1
var randomX=Math.floor(Math.random()*6)+1;
var randomImg1="images/dice"+randomX+".png";
var diceImgElement1=document.querySelectorAll("img")[0];
diceImgElement1.setAttribute("src",randomImg1);
// for image 2
var randomY=Math.floor(Math.random()*6)+1;
var randomImg2="images/dice"+randomY+".png";
var diceImgElement2=document.querySelectorAll("img")[1];
diceImgElement2.setAttribute("src",randomImg2);

// for result

if(randomX>randomY){
  document.querySelectorAll("h1")[1].innerHTML="Winner is Player 1";
}
else if(randomX<randomY){
  document.querySelectorAll("h1")[1].innerHTML="Winner is Player 2";
}
else{
  document.querySelectorAll("h1")[1].innerHTML="Game drawn";
}
