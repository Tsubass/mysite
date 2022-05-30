$(function () {

  //toggleメニュー-----------------

  $(".hum_btn").click(function () {

    $(".g_nav").slideToggle(200);

  });

  //toggleメニューここまで----------


  //main_visual fadeInOut--------------

  if (window.matchMedia('(min-width: 641px)').matches) {

    var count = $("#slide li").length;
    var current = 1;
    var next = 2;
    var interval = 5000;
    var duration = 500;
    var timer;

    $("#slide li:not(:first-child)").hide();

    timer = setInterval(slideTimer, interval);

    function slideTimer() {
      $("#slide li:nth-child(" + current + ")").fadeOut(duration);

      $("#slide li:nth-child(" + next + ")").fadeIn(duration);

      current = next;

      next = ++next;

      if (next > count) {
        next = 1;
      }

      $("#button li a").removeClass("target");
      $("#button li:nth-child(" + current + ") a").addClass("target");
    }

    $("#button li a").click(function () {

      next = $(this).html();

      clearInterval(timer);
      timer = setInterval(slideTimer, interval);

      slideTimer();

      return false;

    });

  } else {
    $("#slide li:not(:first-child)").hide();
  }

  //fadeInOutここまで-----------------------


  //totopのスムーススクロール----------------
  $("#totop p a").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  //totopここまで----------------


  //pickup itemのランダム表示----------------

  //リンク
  var pickupLinkArray = ["shop_cloth_04", "shop_cloth_03", "shop_food_02", "shop_sanitary_01", "shop_toy_01", "shop_toy_02"];
  //画像
  var pickupArray = ["pickup_item01", "pickup_item02", "pickup_item03", "pickup_item04", "pickup_item05", "pickup_item06"];


  var num = Math.random();
  num = num * 6;
  num = Math.floor(num);

  //リンク
  $("#pickup_img a").attr("href", 'shop/' + pickupLinkArray[num] + ".html")
  //画像
  $("#pickup_img img").attr("src", "assets/images/top/" + pickupArray[num] + ".jpg");


  //pickup itemここまで-----------------------

//カートに入れるクリックしたらカウントが増えていく
var countNum=sessionStorage.getItem("number")

if(countNum==null){
  countNum=0;
}

$(".cartin").click(function(){
  var dir=confirm("カートに追加しますか?");
  if(dir==true){
    countNum++;
    if(countNum<=9){
      $("#num").html(`${countNum}`).css({"top":"38px","left":"84px"});
    }else{
      $("#num").html("9⁺").css({"top":"39px","left":"81px"});
    }
  }
  else{
    return false;
  }
  //セッションを開いている間のみ値が保持される
  sessionStorage.setItem("number",countNum);
});

// カートのカウント数を表示したままにする
Countif();
function Countif(){
  if(sessionStorage.getItem("number")==null){
    $("#num").html("0");
  }else if(sessionStorage.getItem("number")>=10){
    $("#num").html("9⁺").css({"top":"39px","left":"81px"});
  }else{
    $("#num").html(sessionStorage.getItem("number"));
  }
}


});