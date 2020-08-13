console.log(document.getElementById("button1"));
window.onload = function(){

var button1 = document.getElementById("button1");
var cart = document.getElementById("cart");
var amount = 0;

button1.onclick=function(){
  document.getElementById("button1").style.backgroundColor = "rgba(255, 255, 255, 0)";
  document.getElementById("button1").style.color = "white";
  document.getElementById("button1").style.border = "white 2px solid";
  document.getElementById("button1").innerHTML = "Added To Cart";

amount = amount +1;
cart1.innerHTML = amount;

}
}
 
