$(function(){
//要素がふわっと出てくる
$(window).scroll(function() {
      $('.hide,.hide2').each(function() {
        var hTop = $(this).offset().top;
        var wTop = $(window).scrollTop();
        var wHeight = $(window).height();
        if (wTop > hTop - wHeight/2){
          $(this).css('opacity', '1');
          }
        });
    });




})