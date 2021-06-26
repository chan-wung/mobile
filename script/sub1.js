$(function(){

  $(".tabs li a:first").addClass("on");
  $(".con2 div").hide();
  $(".con2 div:first").show();
  $(".tabs li").click(function(){
    $(".tabs li a").removeClass("on");
    $(".con2 div").hide();
    $(this).find("a").addClass("on");
    var a = $(this).find("a").attr("href");
    $(a).show();
    return false;
  });

  $(".tabsMobile li a:first").addClass("on");
  $(".con2 div").hide();
  $(".con2 div:first").show();
  $(".tabsMobile li").click(function(){
    $(".tabsMobile li a").removeClass("on");
    $(".con2 div").hide();
    $(this).find("a").addClass("on");
    var a = $(this).find("a").attr("href");
    $(a).show();
    return false;
  });
  // $("#content").css("height","680px");
  $(window).resize(function() {
    if ( parseInt($('header').css('width')) > 800 ) $(".tabs > li").eq(0).click(function(){
      $("#content").css("height","680px");
    });
    if ( parseInt($('header').css('width')) > 800 ) $(".tabs > li").eq(1).click(function(){
      $("#content").css("height","1280px");
    });
    if ( parseInt($('header').css('width')) > 800 ) $(".tabs > li").eq(2).click(function(){
      $("#content").css("height","1080px");
    });
    if ( parseInt($('header').css('width')) > 800 ) $(".tabs > li").eq(3).click(function(){
      $("#content").css("height","1180px");
    });
    if ( parseInt($('header').css('width')) > 800 ) $(".tabs > li").eq(4).click(function(){
      $("#content").css("height","980px");
    });
  });
});
