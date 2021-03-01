/* script by Kay * SiIentMoon.tumblr.com *  2021 (c) All Rights Reserved.*/

!function(s){var i=s(window),t=s(".wrapper").children("li").each(function(){0<s(this).next("li").length&&s("<li><span></span></li>").insertAfter(s(this))}),s("ul.chat").children("li").each(function(){s(this).find(".label").each(function(){var t=s(this).text().replace(":","");s(this).text(t)})}

jQuery(document).ready(function()

});
             
//almacenando el div y el boton en unas variables
var div = document.getElementByClass('tagscontent');
var but = document.getElementById('onmeuwu');

//la funcion que oculta y muestra
function showHide(e){
e.preventDefault();
e.stopPropagation();
if(div.style.display == "none"){
div.style.display = "block";
} else if(div.style.display == "block"){
div.style.display = "none";
}
}
//al hacer click en el boton
but.addEventListener("click", showHide, false);

//funcion para cualquier clic en el documento
document.addEventListener("click", function(e){
console.log('clic');
//obtiendo informacion del DOM para  
var clic = e.target;
console.log(clic);
if(div.style.display == "block" && clic != div){
 div.style.display = "none";
}
}, false);
