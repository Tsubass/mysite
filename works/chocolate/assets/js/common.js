$(function(){
  //ページ遷移時にフェードイン
  $('body').fadeIn(1500);
  
  //ハンバーガーボタンを押したらボタンが×になる/トグルメニューが表示される
  $(".ham").click(function () {
    $(this).toggleClass('active');
    $("header .sp_nav").slideToggle(400);
  });

    //カートに入れる
    var itemname;
    var itemprice;
    datalist = JSON.parse(sessionStorage.getItem("jsonsitem"));
    if(datalist === null){
      datalist=[];
    }
    dataprice = JSON.parse(sessionStorage.getItem("jsonsprice"));
    if(dataprice === null){
      dataprice=[];
    }
    // sessionStorage.clear();

      $(".item .btn li a").click(function(){
        var dir = confirm("カートに追加しますが、よろしいですか？");
          if(dir===true){
            alert("カートに追加しました。");
            itemname=$(this).parents(".item").find("dt").html();
            //値段の文字列のみを取得（疑似要素は無視される）
            itemprice=$(this).parents(".item").find("dd").html().slice(0,-4);
          }else{
            return false;
          }
            sessionStorage.setItem("products",`${itemname}`);
            sessionStorage.setItem("price",`${itemprice}`);
            //クリックした商品を順番に追加していく
            datalist.push(sessionStorage.getItem("products"));
            dataprice.push(sessionStorage.getItem("price"));
            //取得した配列をJSON形式(配列ではない)でsessionStorageに格納する
            var jstr_item=JSON.stringify(datalist);
            var jstr_price=JSON.stringify(dataprice);
            sessionStorage.setItem("jsonsitem",jstr_item);
            sessionStorage.setItem("jsonsprice",jstr_price);
            //sessionStorageから読み込んだJSON文字列を配列に戻す
            arr_item=JSON.parse(sessionStorage.getItem("jsonsitem"));
            arr_price=JSON.parse(sessionStorage.getItem("jsonsprice"));
          });


  // 以下の処理はウィンドウサイズが 481px以上(PCサイズ)の場合に有効にする
  if(window.matchMedia( "(min-width: 481px)" ).matches) {
    //スクロースしたらヘッダーがリサイズされる
      $(window).scroll(function(){
        if($(window).scrollTop() >100){
          $("header").addClass("small");
        }else{
          $("header").removeClass("small");
        }
      });
    //main_visualのスライドショー
    var count=$(".main_visual ul li").length;
    var current =1;
    var next =2;
    var interval =5000;
    var duration =500;
  var timer;
  $(".main_visual ul li:not(:first-child)").hide();
  timer =setInterval(slideTimer,interval);
  function slideTimer(){
    $(`.main_visual ul li:nth-child(${current})`).fadeOut(duration);
    $(`.main_visual ul li:nth-child(${next})`).fadeIn(duration);
    current=next;
    next=++next;
    if(next>count){
      next=1;
    }
  }

  //.recをホバーすると詳細を見るが右からにゅっと出てくる
  $(".rec").hover(function(){
    var k =$(".rec").index(this);
    $("main section .detail").eq(k).stop().animate({"marginRight":"240px"},200);
  },function(){
    var k =$(".rec").index(this);
    $("main section .detail").eq(k).stop().animate({"marginRight":"0"},200);
  });

}else{

}


});