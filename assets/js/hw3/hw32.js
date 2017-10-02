$(function() {
    $( document ).tooltip();
});

var $btnSubmit = document.getElementById('button-submit');

function isInputComplete(item1, item2, item3, item4) {
    if (item1 == "" || item2 == "" || item3 == "" || item4 == "") {
        return false;
    }
    return true;
}

function isInputValid(item1, item2, item3, item4) {
    if (isNaN(item1) || isNaN(item2) || isNaN(item3) || isNaN(item4)) {
        return false;
    }
    if (item1 < 0 || item2 < 0 || item3 < 0 || item4 < 0) {
        return false;
    }
    return true;
}

$btnSubmit.onclick = function (e) {
    e.preventDefault();
    processItemsInput();
};

function showFinalResults(item1, item2, item3, item4) {
    var $amount1 = document.getElementById('amount-1');
    var $amount2 = document.getElementById('amount-2');
    var $amount3 = document.getElementById('amount-3');
    var $amount4 = document.getElementById('amount-4');

    $amount1.innerHTML = parseInt(item1);
    $amount2.innerHTML = parseInt(item2);
    $amount3.innerHTML = parseInt(item3);
    $amount4.innerHTML = parseInt(item4);

    var $total1 = document.getElementById('total-1');
    var $total2 = document.getElementById('total-2');
    var $total3 = document.getElementById('total-3');
    var $total4 = document.getElementById('total-4');

    $total1.innerHTML = (239.99 * parseInt($amount1.innerHTML)).toFixed(2);
    $total2.innerHTML = (129.75 * parseInt($amount2.innerHTML)).toFixed(2);
    $total3.innerHTML = (99.95 * parseInt($amount3.innerHTML)).toFixed(2);
    $total4.innerHTML = (350.89 * parseInt($amount4.innerHTML)).toFixed(2);

    var $totalSold = document.getElementById('total-sold');

    $totalSold.innerHTML = (parseFloat($total1.innerHTML) + parseFloat($total2.innerHTML) +
                            parseFloat($total3.innerHTML) + parseFloat($total4.innerHTML))
                            .toFixed(2);

    var $totalEarning = document.getElementById('total-earning');

    $totalEarning.innerHTML = (9 * parseFloat($totalSold.innerHTML) / 100 + 200).toFixed(2);
}

function processItemsInput() {

    var item1 = document.getElementById("item-1").value;
    var item2 = document.getElementById("item-2").value;
    var item3 = document.getElementById("item-3").value;
    var item4 = document.getElementById("item-4").value;
    var $errorMessage = document.getElementById("error-message");

    if(!isInputComplete(item1, item2, item3, item4)) {
        $errorMessage.style.display = "block";
        return;
    }
    if (!isInputValid(item1, item2, item3, item4)) {
        $errorMessage.style.display = "block";
        return;
    }
    $errorMessage.style.display = "none";
    showFinalResults(item1, item2, item3, item4);
}