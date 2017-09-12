var exchange = {
    GBP: 0.77521,
    CAD: 1.34461,
    EUR: 0.88754,
    JPY: 109.350,
    MXN: 18.2806
};

$(document).ready(function(){
    $("#btn-show-instructions").click(function(e){
        e.preventDefault();
        $("#instructions").slideToggle("slow");
    });
});

$('#usd-amount').focus(function() {
    $(this).css('background-color','#c4757c');
});

var btnShowValues = document.getElementById('btn-show-values');
var inputUsdAmount = document.getElementById('usd-amount');
var gbpAmount = document.getElementById('gbp-amount');
var cadAmount = document.getElementById('cad-amount');
var eurAmount = document.getElementById('eur-amount');
var jpyAmount = document.getElementById('jpy-amount');
var mxnAmount = document.getElementById('mxn-amount');

btnShowValues.onclick = function (e) {
  e.preventDefault();
  var usdAmount = parseFloat(inputUsdAmount.value);
  if(!isNaN(usdAmount)) {
      gbpAmount.innerHTML = (usdAmount * exchange.GBP).toFixed(2);
      cadAmount.innerHTML = (usdAmount * exchange.CAD).toFixed(2);
      eurAmount.innerHTML = (usdAmount * exchange.EUR).toFixed(2);
      jpyAmount.innerHTML = (usdAmount * exchange.JPY).toFixed(2);
      mxnAmount.innerHTML = (usdAmount * exchange.MXN).toFixed(2);
  }
};


