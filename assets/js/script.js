$(function(){
    //Windowの横幅
    var width = $(window).width();

    //Profileのところのクイズの表示
    let parent1=$(".profile");
    let Q1 = [
            'Q.ラーメンのどんぶりの縁に書かれている渦巻き模様は、何を意味している？','雷','竜巻','渦潮','1',
            'Q.食パンの袋についている四角の留め具の名前は？','バッグ・クロージャー','ファスナー・ブレッド','アタッチ・クロース','6',
            'Q.カルピスの、ラベルの水玉が表しているのは？','雨上り','青春の記憶','天の川','13',
            'Q.トートバックは当初何のためのものだった？','汚物を運ぶためのもの','鉱石を運ぶためのもの','氷を運ぶためのもの','18',
            'Q.マスクメロンの「マスク」とはどんな意味？','香り','仮面','偽物','21',
            ];
    //配列に関して
    let p_r_1=Q1.length / 5;
    let p_r_2=Math.floor(Math.random() * p_r_1);
    let R1=p_r_2 * 5;
    //ランダムで選ばれた問題文と解答のボタンが設置される
    $(".question1").text(`${Q1[R1]}`);
    parent1.find(".btn1").text(`${Q1[R1+1]}`);
    parent1.find(".btn2").text(`${Q1[R1+2]}`);
    parent1.find(".btn3").text(`${Q1[R1+3]}`);
    //ボタンをクリックしたときの処理
    parent1.find("button").click(function(){
        if(confirm("ファイナルアンサー？")===true){
            let text1= $(this).text();
            let val1=Q1.indexOf(text1);
            Check1(val1);
        }
    
    });
    //Check関数の処理
    function Check1(oxq1){
        //表示された問題の答えと選択したボタンのインデックスが等しい場合の処理
        if (oxq1==Q1[R1+4]){
            parent1.find(".quizbox").css({"display":"none"});
            parent1.children(".quiz").append("<p class='right'>正解！では、私の生い立ちをご覧ください。</p>");
            setTimeout(function(){
                parent1.find(".hide").fadeIn(1000);
                parent1.find(".right").hide();
            },2000);
        //表示された問題の答えと選択したボタンのインデックスが等しくない場合の処理
        }else{
            parent1.find(".quizbox").css({"display":"none"});
            parent1.children(".quiz").append("<p class='false'>残念！正解するまでコンテンツは表示されません。</p>");
            parent1.children(".quiz").append("<button class='nextbtn'>再挑戦する</button>");
            //次の問題ボタンがクリックされた時の処理
            parent1.find(".nextbtn").click(function(){
            parent1.find(".nextbtn,.false").remove();
            parent1.find(".quizbox").css({"display":"block"});
                p_r_1=Q1.length / 5;
                p_r_2=Math.floor(Math.random() * p_r_1);
                R1=p_r_2 * 5;
            $(".question1").text(`${Q1[R1]}`);
            $(".select1 .btn1").text(`${Q1[R1+1]}`);
            $(".select1 .btn2").text(`${Q1[R1+2]}`);
            $(".select1 .btn3").text(`${Q1[R1+3]}`);
            });
        }
    };

    //My skillsのところのクイズの表示
    let parent2=$(".myskills");
    let Q2 = [
            'Q.くしゃみの時速はどの程度？','新幹線（300km/h）程度','チーター（120km/h）程度','自動車（60km/h）程度','1',
            'Q.宇宙に行くと、身長はどうなる？','伸びる','変わらない','縮む','6',
            'Q.冷たいものを食べたときに頭が痛くなる現象の正式名は？','かき氷頭痛','シャーベット頭痛','アイスクリーム頭痛','13',
            'Q.アインシュタインは、ノーベル賞の賞金全額を何に使ったか？','研究費','一軒家の購入','離婚の慰謝料','18',
            'Q.指紋鑑定のきかっけとなったのは？','東京で見つかった土器','ナポレオンの遠征','凶悪な殺人事件','21',
            ];
    //配列に関して
    let s_r_1=Q2.length / 5;
    let s_r_2=Math.floor(Math.random() * s_r_1);
    let R2=s_r_2 * 5;
    //ランダムで選ばれた問題文と解答のボタンが設置される
    $(".question2").text(`${Q2[R2]}`);
    parent2.find(".btn1").text(`${Q2[R2+1]}`);
    parent2.find(".btn2").text(`${Q2[R2+2]}`);
    parent2.find(".btn3").text(`${Q2[R2+3]}`);
    //ボタンをクリックしたときの処理
    parent2.find("button").click(function(){
        if(confirm("ファイナルアンサー？")===true){
            let text2= $(this).text();
            let val2=Q2.indexOf(text2);
            Check2(val2);
        }
    });
    //Check関数の処理
    function Check2(oxq){
        //表示された問題の答えと選択したボタンのインデックスが等しい場合の処理
        if (oxq==Q2[R2+4]){
            parent2.find(".quizbox").css({"display":"none"});
            parent2.children(".quiz").append("<p class='right'>正解！では、私が現在持っているスキルをご覧ください。</p>");
            setTimeout(function(){
                parent2.find(".hide").fadeIn(1000);
                parent2.find(".right").hide();
            },2000);
        //表示された問題の答えと選択したボタンのインデックスが等しくない場合の処理
        }else{
            parent2.find(".quizbox").css({"display":"none"});
            parent2.children(".quiz").append("<p class='false'>残念！正解するまでコンテンツは表示されません。</p>");
            parent2.children(".quiz").append("<button class='nextbtn'>再挑戦する</button>");
            //次の問題ボタンがクリックされた時の処理
            parent2.find(".nextbtn").click(function(){
            parent2.find(".nextbtn,.false").remove();
            parent2.find(".quizbox").css({"display":"block"});
                s_r_1=Q2.length / 5;
                s_r_2=Math.floor(Math.random() * s_r_1);
                R2=s_r_2 * 5;
                $(".question2").text(`${Q2[R2]}`);
                $(".select2 .btn1").text(`${Q2[R2+1]}`);
                $(".select2 .btn2").text(`${Q2[R2+2]}`);
                $(".select2 .btn3").text(`${Q2[R2+3]}`);
            });
        }
    };

    //Worksのところのクイズの表示
    let parent3=$(".works");
    let Q3 = [
            'Q.高速のPAの駐車線が斜めなのはなぜ？','逆走を防ぐため','スペースを広く使うため','ナンバーを見やすくするため','1',
            'Q.次のうち、世界共通の音は？','ファックスを送るときの音','コンビニに入るときの音','電話をかけるときの音','6',
            'Q.数珠は何のためのもの？','怨霊を縛るためのもの','玉を魂に見立てて、成仏を祈願するためのもの','念仏を唱えた回数を数えるためのもの','13',
            'Q.世界の都市で、歩行者の歩く速度が最も速いのは？','ジャマイカ','サンフランシスコ','シンガポール','18',
            'Q.豆まきをしなくてよいとされる苗字の人は？','わたなべ','かとう','すずき','21',
            ];
    //配列に関して
    let w_r_1=Q3.length / 5;
    let w_r_2=Math.floor(Math.random() * w_r_1);
    let R3=w_r_2 * 5;
    //ランダムで選ばれた問題文と解答のボタンが設置される
    $(".question3").text(`${Q3[R3]}`);
    parent3.find(".btn1").text(`${Q3[R3+1]}`);
    parent3.find(".btn2").text(`${Q3[R3+2]}`);
    parent3.find(".btn3").text(`${Q3[R3+3]}`);
    //ボタンをクリックしたときの処理
    parent3.find("button").click(function(){
        if(confirm("ファイナルアンサー？")===true){
            let text3= $(this).text();
            let val3=Q3.indexOf(text3);
            Check3(val3);
        }
    });
    //Check関数の処理
    function Check3(oxq){
        //表示された問題の答えと選択したボタンのインデックスが等しい場合の処理
        if (oxq==Q3[R3+4]){
            parent3.find(".quizbox").css({"display":"none"});
            parent3.children(".quiz").append("<p class='right'>正解！では、私が作った作品達をご覧ください。</p>");
            setTimeout(function(){
                parent3.find(".hide").fadeIn(1000);
                parent3.find(".right").hide();
            },2000);
        //表示された問題の答えと選択したボタンのインデックスが等しくない場合の処理
        }else{
            parent3.find(".quizbox").css({"display":"none"});
            parent3.children(".quiz").append("<p class='false'>残念！正解するまでコンテンツは表示されません。</p>");
            parent3.children(".quiz").append("<button class='nextbtn'>再挑戦する</button>");
            //次の問題ボタンがクリックされた時の処理
            parent3.find(".nextbtn").click(function(){
            parent3.find(".nextbtn,.false").remove();
            parent3.find(".quizbox").css({"display":"block"});
                w_r_1=Q3.length / 5;
                w_r_2=Math.floor(Math.random() * w_r_1);
                R3=w_r_2 * 5;
                $(".question3").text(`${Q3[R3]}`);
                $(".select3 .btn1").text(`${Q3[R3+1]}`);
                $(".select3 .btn2").text(`${Q3[R3+2]}`);
                $(".select3 .btn3").text(`${Q3[R3+3]}`);
            });
        }
    };

    //navのスムーススクロール
    $(".g_nav li a[href^='#']:not([href='#'])").click(function(){
        let target=$($(this).attr("href")).offset().top;
        $("html,body").animate({scrollTop:target},500);
        return false;
    });

    //totopの処理
    //totopのスムーススクロール
    $(".totop").click(function(){
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
                        textbox += '<span style="animation-delay:.' + index + 's;">' + element + '</span>';
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
        //横幅が480px以下の場合 $(".has-child>a").off('click');	//has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
        if(width <= 480) {
            $(".has-child>a").click(function(){//has-childクラスがついたaタグをクリックしたら
                let parentElem =  $(this).parent();// aタグから見た親要素のliを取得し
                $(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
                $(parentElem).children('ul').stop().slideToggle(200);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
            });
        }else{//横幅が480px以上の場合
            $(".has-child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
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


