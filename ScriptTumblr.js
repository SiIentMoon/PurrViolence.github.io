/* script by Kay * SiIentMoon.tumblr.com *  2021 (c) All Rights Reserved.*/

!function(s){var i=s(window),t=s(".wrapper").children("li").each(function(){0<s(this).next("li").length&&s("<li><span></span></li>").insertAfter(s(this))}),s("ul.chat").children("li").each(function(){s(this).find(".label").each(function(){var t=s(this).text().replace(":","");s(this).text(t)})}
