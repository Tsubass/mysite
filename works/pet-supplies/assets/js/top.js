$(function () {

  function ashiatoAnime() {

    $(".cover").each(function () {

      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll >= elemPos - windowHeight / 2) {
        $(this).addClass("nikukyu_anime");
      }

    });

  }

  $(window).scroll(function () {
    ashiatoAnime();
  });

});