$(document).ready(function(){
    $("nav ul li a").on("mouseenter", function(){
        $(this).css("color", "#ff6600");
    }).on("mouseleave", function(){
        $(this).css("color", "#333");
    });
})