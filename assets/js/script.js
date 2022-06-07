$(function(){
    //Windowの横幅
    var width = $(window).width();

    //navのスムーススクロール
    $(".g_nav li a[href^='#']:not([href='#'])").click(function(){
        let target=$($(this).attr("href")).offset().top;
        $("html,body").animate({scrollTop:target},500);
        return false;
    });

    //totopのスムーススクロール
    $(".totop,.g_nav li a[href='#']").click(function(){
        $("html,body").animate({scrollTop:0},500);
        return false;
    });
    //横幅が480px以下なら.upactiveを削除する
    if(width <= 480) {
        $(".totop p a").removeClass("upactive");
    }

    //バリデーションチェック
    $(function(){
        $(".alert").hide();
        let sendFlag=true;
        $(".submit").click(function(){
            if(!$("#myname").val()){
                $(".name .alert").show();
                sendFlag=false;
            }else{
                $(".name .alert").hide();
            }
            if(!$("#email").val()){
                $(".email .alert").show();
                sendFlag=false;
            }else{
                $(".email .alert").hide();
            }
            if(!$("#coment").val()){
                $(".coment .alert").show();
                sendFlag=false;
            }else{
                $(".coment .alert").hide();
            }
            if(sendFlag===false){
                return false;
            }
        });
    });

    // 紙吹雪
    particlesJS("particles-js",{
        "particles":{
            "number":{
                "value":125,//この数値を変更すると紙吹雪の数が増減できる
                "density":{
                "enable":false,
                "value_area":400
                }
            },
            "color": {
                "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC","#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが出来る
            },
            "shape":{
                "type":"polygon",//形状はpolygonを指定
                "stroke":{
                    "width":0,
                },
                "polygon":{
                    "nb_sides":5//多角形の角の数
                }
            },
            "opacity":{
                "value":1,
                "random":false,
                "anim":{
                    "enable":true,
                    "speed":20,
                    "opacity_min":0,
                    "sync":false
                }
            },
            "size":{
                "value":5.305992965476349,
                "random":true,//サイズをランダムに
                "anim":{
                    "enable":true,
                    "speed":1.345709068776642,
                    "size_min":0.8,
                    "sync":false
                }
            },
            "line_linked":{
                "enable":false,
            },
            "move":{
                "enable":true,
                "speed":5,//この数値を小さくするとゆっくりな動きになる
                "direction":"bottom",//下に向かって落ちる
                "random":false,//動きはランダムにならないように
                "straight":false,//動きをとどめない
                "out_mode":"out",//画面の外に出るように描写
                "bounce":false,//跳ね返りなし
                "attract":{
                    "enable":false,
                    "rotateX":600,
                    "rotateY":1200
                }
            }
        },
        "interactivity":{
            "detect_on":"canvas",
            "events":{
                "onhover":{
                    "enable":false,
                },
                "onclick":{
                    "enable":false,
                },
                "resize":true
            },
        },
        "retina_detect":true
    });


    // テキストが一文字ずつ表示される
    //.appeartextをつける定義
    function EachTextAnimeControl() {
        $('.eachTextAnime').each(function () {
            var elemPos = $(this).offset().top;//指定した要素の位置
            var scroll = $(window).scrollTop();//スクロール量
            var windowHeight = $(window).height();//ウインドウの高さ
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("appeartext");
            }
        });
    }
    //スクロールされたときに実行される処理
    $(window).scroll(function () {
        var elem = $(".eachTextAnime");
        elem.each(function(){
            var text= $(this).text();
            var textbox = "";
            text.split('').forEach(function (element, index) {
                if (element !== " ") {
                    if (index < 10) {//10文字未満ならその文字数の秒数でanimationを実行する
                        textbox += '<span style="animation-delay:' + index + 's;">' + element + '</span>';
                    } else {//10文字以上なら0.1秒ごとにdelayを付与していく
                        var n = index / 10;
                        textbox += '<span style="animation-delay:' + n + 's;">' + element + '</span>';
                    }
                }else{
                    textbox += element;
                }
            });
            $(this).html(textbox);
        });
        EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
    });

    //ドロップダウンメニュー実行関数
    mediaQueriesWin();

    //ドロップダウンの設定
    function mediaQueriesWin(){
        //横幅が480px以下の場合
        if(width <= 480) {
            $(".has-child>a").click(function(){//has-childクラスがついたaタグをクリックしたら
                let parentElem =  $(this).parent();// aタグから見た親要素のliを取得し
                $(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
                $(parentElem).children('ul').stop().slideToggle(200);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
            });
        }else{//横幅が480px以上の場合
            $(".has-child").removeClass('active');//activeクラスを削除
            $('.has-child').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
            //ドロップダウンメニュー
            $(".g_nav").children("li").hover(function(){
            $(this).children("ul").stop().slideToggle(200);
            });
        }
    }


    // 画面をスクロールをしたら動かす
    $(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
    });

    //スクロールした際の動き
    function PageTopAnime() {
       let scroll = $(window).scrollTop();
        if (scroll >= 200){//上から200pxスクロールしたら
            $('.totop').removeClass('DownMove');//.totopについているDownMoveというクラス名を除く
            $('.totop').addClass('UpMove');//.totopについているUpMoveというクラス名を付与
        }else{
            if($('.totop').hasClass('UpMove')){//すでに.totopにUpMoveというクラス名がついていたら
                $('.totop').removeClass('UpMove');//UpMoveというクラス名を除き
                $('.totop').addClass('DownMove');//DownMoveというクラス名を.totopに付与
            }
        }
    }

});


