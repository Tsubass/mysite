$(function(){
  //slick
  $(".gal").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  // ウィンドウサイズが 481px以上の場合に有効にする処理
  if (window.matchMedia("(min-width: 481px)").matches) {
  //commingsoonのところ
  $(window).scroll(function () {
    var elemOffset = $(".commingsoon .inner").offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();
    if (scrollPos > elemOffset - wh + (wh / 2)) {
      $.when(
        $("#com").addClass("com-anime"), $("#son").addClass("son-anime")
      ).done(function () {
        setTimeout(function () {
          $("#com").remove();
          $("#son").remove();
          $("#workshop").html("work shopを開催予定!");
        }, 5000);
      });
    }
  });
  }else{
      //ページがロードされたときにポップアップ広告が表示される
    //ポップアップ広告を取得
    const popup = document.querySelector('.popup');
    //ポップアップ広告の閉じるボタンを取得
    const popupClose = document.querySelector('.popup-close');
    //body要素を取得
    const body = document.body
    // //表示位置を指定（下記はbody要素の真中辺り）
    const position = body.clientHeight / 2;
    //ページがロードされたときの処理
    window.onload = function () {
      //sessionStorageにtrueがない場合
      if (sessionStorage.getItem("open") !== "true") {
        //ポップアップ広告表示
        popup.classList.add('open');
        //ポップアップ広告の表示フラグを表示済みに設定
        sessionStorage.setItem('open', true);
        //bodyのスクロールバーを非表示
        body.style.overflowY = 'hidden';
      } else {
        //bodyのスクロールバーを表示
        body.style.overflowY = 'auto';
      }
    };
    //ポップアップ広告の閉じるボタンがクリックされた場合の処理
    popupClose.addEventListener('click', () => {
      //openのclassを削除
      popup.classList.remove('open');
      //bodyのスクロールバーを表示
      body.style.overflowY = 'auto';
    });
  }

});