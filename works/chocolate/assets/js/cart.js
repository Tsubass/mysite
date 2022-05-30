$(function(){
    //ストレージから読み込んだJSON文字列を配列に戻す
    var arr_item=JSON.parse(sessionStorage.getItem("jsonsitem"));
    var arr_price=JSON.parse(sessionStorage.getItem("jsonsprice"));
    if(arr_item==null){
        $(".cartinside").prepend("<p>現在カート内に商品はございません。</p>");
        $(".products").css("display","none");
        $("#privacy").css("display","none");
        $(".purchase").css("display","none");
    }else{
        //商品の配列の要素分だけ処理を繰り返す
        for(let i=0;i<arr_item.length;i++){
            $(".productsbox").append(`<dd>${arr_item[i]}</dd>`);
            $(".pricebox").append(`<dd>${arr_price[i]}</dd>`);
            // arr_priceの中身を全て数値型に変換する
            var arr_num = arr_price.map(Number);
            //配列の中身をすべて足す（アロー関数）
            var arr_total =arr_num.reduce((sum,element)=> sum + element,0);
            $(".cartinside #total").html(`小計：￥${arr_total}`);
        }
    }

});