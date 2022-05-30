$(function(){
  //バリデーションチェック
  $(function(){
    $(".alert").hide();
    $("#loginbtn").click(function(){
      var sendFlag=true;
      if(!$("#email").val()){
        $(".mail .alert").show();
          sendFlag=false;
      }else{
        $(".mail .alert").hide();
      }
      if(!$("#password").val()){
        $(".pass .alert").show();
        sendFlag=false;
      }else{
        $(".pass .alert").hide();
      }
      if(sendFlag==false){
        return false;
      }
    });
  })


});