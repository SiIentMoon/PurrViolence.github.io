$(function(){
       $(".chatcitos .label").each(function(){
          $(this).html($(this).html()
             .replace(":", " ")
            );
       });  
   });
