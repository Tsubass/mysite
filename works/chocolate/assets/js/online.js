$(function(){
  //ホバーすると詳細を見るが右からにゅって出てくる
  $(".item").hover(function(){
    var k =$(".item").index(this);
    $("main .item .detail").eq(k).stop().animate({"marginRight":"240px"},200);
  },function(){
    var k =$(".item").index(this);
    $("main .item .detail").eq(k).stop().animate({"marginRight":"0"},200);
  });

  //フィルタリング
  $(".category p a").click(function(){
    var target=$(this).attr("name");
    $(".item").each(function(){
      $(this).animate({"opacity" : 0},300,function(){
        $(this).hide();
        if($(this).hasClass(target) || target=="all"){
          $(this).show();
          $(this).animate({"opacity" : 1},300);
        }
      });
    });
    return false;
  });


});