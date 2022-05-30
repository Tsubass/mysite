$(function(){

//要素がふわっと出てくる
$(window).scroll(function() {
  $('.hide').each(function() {
    var hTop = $(this).offset().top;
    var wTop = $(window).scrollTop();
    var wHeight = $(window).height();
    if (wTop > hTop - wHeight/2){
      $(this).css('opacity', '1');
      }
    });
});

  // 以下の処理はウィンドウサイズが 481px以上(PCサイズ)の場合に有効にする
  if(window.matchMedia( "(min-width: 481px)" ).matches) {
    $(window).scroll(function() {
      $('.hide1').each(function() {
        var hTop = $(this).offset().top;
        var wTop = $(window).scrollTop();
        var wHeight = $(window).height();
        if (wTop > hTop - wHeight/2){
          $(this).css('opacity', '1');
          }
        });
    });
  }



});