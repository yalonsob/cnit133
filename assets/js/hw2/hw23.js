function countPositives(numbers) {
    var positives = 0;
    numbers.forEach(function (number) {
        if(number > 0) {
            positives++;
        }
    });
    return positives;
}

function countNegatives(numbers) {
    var negatives = 0;
    numbers.forEach(function (number) {
        if(number < 0) {
            negatives++;
        }
    });
    return negatives;
}

function countZeros(numbers) {
    var zeros = 0;
    numbers.forEach(function (number) {
        if(number == 0) {
            zeros++;
        }
    });
    return zeros;
}

var $inputInteger1 = document.getElementById('integer-1');
var $inputInteger2 = document.getElementById('integer-2');
var $inputInteger3 = document.getElementById('integer-3');
var $inputInteger4 = document.getElementById('integer-4');
var $inputInteger5 = document.getElementById('integer-5');
var $resultPositive = document.getElementById('result-positive');
var $resultNegative = document.getElementById('result-negative');
var $resultZeros = document.getElementById('result-zeros');
var $btnShowResults = document.getElementById('btn-show-results');
var $btnFadeResults = document.getElementById('btn-fade-results');
var $tableResults = document.getElementById('table-results');

function showResults() {
    var numbers = [
        parseInt($inputInteger1.value),
        parseInt($inputInteger2.value),
        parseInt($inputInteger3.value),
        parseInt($inputInteger4.value),
        parseInt($inputInteger5.value)
    ];
    var positives = countPositives(numbers);
    var negatives = countNegatives(numbers);
    var zeros = countZeros(numbers);

    $resultPositive.innerHTML = positives;
    $resultNegative.innerHTML = negatives;
    $resultZeros.innerHTML = zeros;
}

$btnShowResults.onclick = function (e) {
    e.preventDefault();
    showResults();
};

$(document).ready(function(){
    $($btnFadeResults).click(function(e){
        e.preventDefault();
        $($tableResults).fadeTo("slow", 0.4);
    });
});

