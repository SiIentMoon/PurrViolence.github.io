/* script by Kay * SiIentMoon.tumblr.com *  2021 (c) All Rights Reserved.*/

!function(s){var i=s(window),t=s(".wrapper").children("li").each(function(){0<s(this).next("li").length&&s("<li><span></span></li>").insertAfter(s(this))}),s("ul.chat").children("li").each(function(){s(this).find(".label").each(function(){var t=s(this).text().replace(":","");s(this).text(t)})}



$(function(){
    //oculta al hacer click fuera del elemnto (formulario)
    
    $(document).on("click",function(e) {
       var container = $(".tagscontent");       
            if (!container.is(e.target) && container.has(e.target).length === 0) { 
            //Se ha pulsado en cualquier lado fuera de los elementos contenidos en la variable container
               container.slideUp();               
            }
     });

    //Muestra elento (formulario)
    $("#onmeuwu").on("click", function(event){
        $(".tagscontent").slideToggle();
        event.stopImmediatePropagation();
    });
});
