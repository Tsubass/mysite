$(function(){

//totopのスムーススクロール----------------
$("#totop p a").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
//totopここまで----------------


  // スクロールすると要素がふわっと出てくる----------------
  $(window).scroll(function(){
    $(".js_scroll").each(function(){
      var scroll=$(window).scrollTop();
      var windowHeight=$(window).height();
      var triggerTop=$(this).offset().top;
      if(scroll>triggerTop-windowHeight/2){
        $(this).addClass("js_show");
      }
    })
  });

})