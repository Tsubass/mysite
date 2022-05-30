$(function () {

  //フォームのバリデーションチェック-----------
  $(".alert").hide();
  $(".pwalert").hide();
  $(".petAlert").hide();

  $("#submit_btn").click(function () {

    var sendFlag = true;

    //テキスト-----------------------
    //お名前
    if (!$("#nameSection input").val()) {
      $("#nameSection .alert").show();
      sendFlag = false;
    } else {
      $("#nameSection .alert").hide();
    }

    //お名前フリガナ
    if (!$("#nameSection2 input").val()) {
      $("#nameSection2 .alert").show();
      sendFlag = false;
    } else {
      $("#nameSection2 .alert").hide();
    }

    //郵便番号

    var postNum = String($("#numSection input").val()).length;

    if (postNum != 7) {
      $("#numSection .alert").show();
      sendFlag = false;
    } else {
      $("#numSection .alert").hide();
    }

    //市区町村
    if (!$("#addSection input").val()) {
      $("#addSection .alert").show();
      sendFlag = false;
    } else {
      $("#addSection .alert").hide();
    }

    //番地・建物名
    if (!$("#addSection2 input").val()) {
      $("#addSection2 .alert").show();
      sendFlag = false;
    } else {
      $("#addSection2 .alert").hide();
    }

    //メールアドレス
    if (!$("#emailSection input").val()) {
      $("#emailSection .alert").show();
      sendFlag = false;
    } else {
      $("#emailSection .alert").hide();
    }

    //電話番号
    if (!$("#telSection input").val()) {
      $("#telSection .alert").show();
      sendFlag = false;
    } else {
      $("#telSection .alert").hide();
    }

    //パスワード
    if (!$("#pwSection input").val()) {
      $("#pwSection .alert").show();
      sendFlag = false;
    } else {
      $("#pwSection .alert").hide();
    }

    //パスワード2
    if (!$("#pwSection2 input").val()) {
      $("#pwSection2 .alert").show();
      sendFlag = false;
    } else {
      $("#pwSection2 .alert").hide();
    }

    //パスワード入力値チェック
    var pass1 = $("#pwSection input").val();
    var pass2 = $("#pwSection2 input").val();

    if (pass1 != pass2) {
      $("#pwSection2 .pwalert").show();
      sendFlag = false;
    } else {
      $("#pwSection2 .pwalert").hide();
    }

    //セレクト-----------------------
    //都道府県
    if ($("#selectSection select").val() == "") {
      $("#selectSection .alert").show();
      sendFlag = false;
    } else {
      $("#selectSection .alert").hide();
    }

    //チェックボックス-----------------
    //飼ってるペット

    var chkboxchk = $('input[name="pet"]:checked').length;
    var petTextchk = $('.antchk:checked').length;

    if (chkboxchk == 0) {
      $("#checkSection .alert").show();
      sendFlag = false;
    } else if (chkboxchk >= 1 && (petTextchk == 1 && !$("#checkSection input[name='petText']").val())) {
      $("#checkSection .petAlert").show();
      sendFlag = false;
    } else {
      $("#checkSection .alert").hide();
      $("#checkSection .petAlert").hide();
    }

    //利用規約チェックボックス

    var acceptchkbox = $("input[name='accept']:checked").length;

    if (acceptchkbox == 0) {
      $("#acceptSection .alert").show();
      sendFlag = false;
    } else {
      $("#acceptSection .alert").hide();
    }




    //送信チェック-----------
    if (sendFlag == false) {
      location.href = "#";
      return false;
    }


  });


});