$(function(){

//   var slideCount = 0,
//       slideDotCount = 0,
//       slideBtn = $(".arrow1"),
//       slideBoolean = false,
//       slideList = $(".slideList"),
//       slideListImg = $(".slideList .slideImg"),
//       slideImg = $(".slideImg"),
//       slideImgWi = $(".slideList .slideImg").width(),
//       slideDot = $(".slideBtn > ul > li");
//   var slideBooleanFunc = function(){
//     slideBoolean = false;
//   };
//
//   function slideBtn1(){
//     slideBtn.on("click", function(){
//       if(slideCount <=slideListImg.length-1 && slideBoolean===false){
//         slideCount++;
//         slideBoolean = true;
//         if(slideCount > slideListImg.length-1){
//           slideCount = 0;
//         }
//
//         slideList.animate({
//           left: -slideImgWi * slideCount
//         }, 500, slideBooleanFunc);
//         // console.log(slideCount);
//         $(slideDot).find("a").removeClass("on");
//         $(".slideBtn > ul > li").siblings().eq(slideCount).find("a").addClass("on");
//       }
//     });
//   }
// slideBtn1();
//
//   function slideBtnDot1(){
//     slideDot.on("click", function(){
//       if(slideBoolean===false){
//         slideBoolean = true;
//         var slideDotIndex = $(this).index();
//         $(slideDot).find("a").removeClass("on");
//         $(".slideBtn > ul > li").siblings().eq(slideDotIndex).find("a").addClass("on");
//
//         slideCount = slideDotIndex;
//         console.log(slideDotIndex)
//         slideList.animate({
//           left: -slideImgWi * slideCount
//         }, 500, slideBooleanFunc);
//       }
//     });
//   }
// slideBtnDot1();

$(".reTabs > li > a:first").addClass("on");
$(".reBlock > div").hide();
$(".reBlock > div:first").show();
$(".reTabs li").click(function(){
  $(".reTabs li a").removeClass("on");
  $(".reBlock > div").hide();
  $(this).find("a").addClass("on");
  var b = $(this).find("a").attr("href")
  $(b).fadeIn();
  return false;
});

$(".weeklyTab > li > a:first").addClass("on");
$(".weeklyBlock div").hide();
$(".weeklyBlock div:first").show();
$(".weeklyTab li").click(function(){
  $(".weeklyTab li a").removeClass("on");
  $(".weeklyBlock div").hide();
  $(this).find("a").addClass("on");
  var b = $(this).find("a").attr("href")
  $(b).show();
  return false;
});

$(".rentalTab > li > a:first").addClass("on");
// $(".rentalTab > li:first").addClass("on");
$(".rentalBlock > div").hide();
var asd = $(".rentalTab > li:nth(2)").html();
console.log(asd);
$(".rentalTab > li:first").html(asd);
$(".rentalTabShow").html(asd);
$(".rentalBlock > div:first").show();
$(".rentalTab:last li").click(function(){
  $(".rentalTab li a").removeClass("on");
  // $(".rentalTab li").removeClass("on");
  $(".rentalBlock > div").hide();
  $(this).find("a").addClass("on");
  $(this).addClass("on");
  var a = $(this).html();
  $(".rentalTab > li:first").html(a);
  var b = $(this).find("a").attr("href");
  $(b).fadeIn();
  return false;
});
$(".rentalTab:first li").click(function(){
  return false;
});
$(".rightBtn").click(function(){
  $(".webzineSlideList").animate({left:-720+"px"},1000,function(){
    $(".webzineSlideList div:first-child").appendTo(".webzineSlideList");//1번 사진을 3번 뒤로 붙이기
    $(".webzineSlideList").css('left','0');
  });
});

$(".leftBtn").click(function(){
  $(".webzineSlideList div:last-child").prependTo(".webzineSlideList");
  $(".webzineSlideList").css('left','-720px');
  $(".webzineSlideList").animate({left:0+"px"},1000);
});
});
