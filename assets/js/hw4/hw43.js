var $btnCalculateInterest = document.getElementById('button-calculate-interest');
var $interestRate = document.getElementById('interest-rate');
var errorMessage = "Please enter a valid interest rate";
var $compoundInterest = document.getElementById('compound-interest');

function calculateCompoundInterestForYear(P, r, n) {
    return (P * Math.pow(1+r, n)).toFixed(2);
}

function createInterestTableForRate(r) {
    var tableOpeningHTML = "<table class='table-border'><tr>" +
        "<th>Year</th><th>Amount on deposit</th><th>Interest Rate</th>" +
        "</tr>";
    var tableClosingHTML = "</table>";
    var tableHTML = tableOpeningHTML;
    var P = 1000;

    for(var n = 1; n <= 10; n++) {
        var A = calculateCompoundInterestForYear(P, r, n);
        tableHTML =  tableHTML + "<tr><td>" + n + "</td><td>" + A + "</td><td>" + r + "</td></tr>";
    }

    tableHTML += tableClosingHTML;
    return tableHTML;
}

$btnCalculateInterest.onclick = function (e) {
    e.preventDefault();
    var interestRate = $interestRate.value;
    $compoundInterest.innerHTML = "";
    if (isNaN(interestRate) || parseInt(interestRate) < 5 || parseInt(interestRate) > 10) {
        $compoundInterest.innerHTML = errorMessage;
        return;
    } else {
        $compoundInterest.innerHTML = createInterestTableForRate(interestRate/100);
        $("table tr:nth-child(even)").addClass("striped");
    }
};
