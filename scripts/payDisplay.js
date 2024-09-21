function chooseCard(){
  $("#payCash").hide();
  $("#payPal").hide();
  $("#creditCardPay").show();

}

function choosePayPal(){
  $("#payCash").hide();
  $("#payPal").show();
  $("#creditCardPay").hide();
}

function chooseCash(){
  $("#payCash").show();
  $("#payPal").hide();
  $("#creditCardPay").hide();
}
