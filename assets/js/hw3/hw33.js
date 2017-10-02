var $btnCalculateBalance = document.getElementById('button-calculate-balance');
var $balanceResult = document.getElementById('balance-result');

function isInputComplete(account, balance, charged, credits, limit) {
    if (account == "" || balance == "" || charged == "" || credits == "" || limit == "") {
        return false;
    }
    return true;
}

function isInputValid(account, balance, charged, credits, limit) {
    if (isNaN(account) || isNaN(balance) || isNaN(charged) || isNaN(credits) || isNaN(limit)) {
        return false;
    }
    return true;
}

function showFinalResults(balance, charged, credits, limit) {
    var newBalance = parseFloat(balance) + parseFloat(charged) - parseFloat(credits);
    $balanceResult.innerHTML = "The new balance is " + newBalance + ". ";

    if (newBalance > limit) {
        $balanceResult.innerHTML += "Credit limit exceeded by " + (newBalance - limit) + ".";
    } else {
        $balanceResult.innerHTML += "Credit available is " + (limit - newBalance) + ".";
    }
}

function processBalanceInput() {
    var account = document.getElementById("account").value;
    var balance = document.getElementById("balance").value;
    var charged = document.getElementById("charged").value;
    var credits = document.getElementById("credits").value;
    var limit = document.getElementById("limit").value;
    var $errorMessage = document.getElementById("error-message");

    if(!isInputComplete(account, balance, charged, credits, limit)) {
        $errorMessage.style.display = "block";
        return;
    }
    if (!isInputValid(account, balance, charged, credits, limit)) {
        $errorMessage.style.display = "block";
        return;
    }
    $errorMessage.style.display = "none";
    showFinalResults(balance, charged, credits, limit);
}

$btnCalculateBalance.onclick = function (e) {
    e.preventDefault();
    processBalanceInput();
};


$(document).ready(function(){
    $("#button-change-display").click(function(e){
        e.preventDefault();
        $("#balance-result").css({
            "background-color": "black",
            "color": "white",
            "font-size": "large",
            "font-weight": "bold"
        });
    });
});

