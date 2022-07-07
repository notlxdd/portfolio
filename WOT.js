$(".chinese").hide();
$("#cabout-me").hide();
$("#cprojects").hide();
$("#ccontact").hide();
$(".ctp").hide();
$("#cam").hide();
$(".cam-text").hide();
$(".ccol").hide();
$(".chiss-animation").hide();
$(".ctranslate").click(function(){
    $(".english").fadeOut();
    $("#about-me").fadeOut();
    $("#projects").fadeOut();
    $("#contact").fadeOut();
    $("#am").fadeOut();
    $(".ss-animation").fadeOut();
    $(".slideshow").fadeOut();
    $("#cheader").fadeIn();
    $("#cabout-me").fadeIn();
    $("#cprojects").fadeIn();
    $("#ccontact").fadeIn();
    $(".ctp").fadeIn();
    $(".chinese").fadeIn();
    $("#cam").fadeIn();
    $(".cam-text").fadeIn();
    $(".ccol").fadeIn();
    $(".cslideshow").fadeIn();
    $(".chiss-animation").fadeIn();
});
$(".etranslate").click(function(){
    $(".chinese").fadeOut();
    $("#cabout-me").fadeOut();
    $("#cprojects").fadeOut();
    $("#ccontact").fadeOut();
    $("#cam").fadeOut();
    $(".cslideshow").fadeOut();
    $(".cam-text").fadeOut();
    $(".ccol").fadeOut();
    $(".chiss-animation").fadeOut();
    $("#header").fadeIn();
    $("#about-me").fadeIn();
    $("#projects").fadeIn();
    $("#contact").fadeIn();
    $(".tp").fadeIn();
    $(".english").fadeIn();
    $("#am").fadeIn();
    $(".slideshow").fadeIn();
    $(".ss-animation").fadeIn();
    
});
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);

setInterval(function() { 
    $('#cslideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#cslideshow');
  }, 3000);