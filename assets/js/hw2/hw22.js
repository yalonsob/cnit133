function sum(integer1, integer2, integer3) {
    return integer1 + integer2 + integer3;
}

function average(integer1, integer2, integer3) {
    return sum(integer1, integer2, integer3) / 3;
}

function product(integer1, integer2, integer3) {
    return integer1 * integer2 * integer3;
}

function smallest(integer1, integer2, integer3) {
    return Math.min(integer1, integer2, integer3);
}

function largest(integer1, integer2, integer3) {
    return Math.max(integer1, integer2, integer3);
}

var $inputInteger1 = document.getElementById('integer-1');
var $inputInteger2 = document.getElementById('integer-2');
var $inputInteger3 = document.getElementById('integer-3');
var $resultSum = document.getElementById('result-sum');
var $resultAverage = document.getElementById('result-average');
var $resultProduct = document.getElementById('result-product');
var $resultSmallest = document.getElementById('result-smallest');
var $resultLargest = document.getElementById('result-largest');

function updateResults() {
    var integer1 = parseInt($inputInteger1.value);
    var integer2 = parseInt($inputInteger2.value);
    var integer3 = parseInt($inputInteger3.value);
    if(!isNaN(integer1) && !isNaN(integer2) && !isNaN(integer3)) {
        $resultSum.innerHTML = sum(integer1, integer2, integer3);
        $resultAverage.innerHTML = average(integer1, integer2, integer3);
        $resultProduct.innerHTML = product(integer1, integer2, integer3);
        $resultSmallest.innerHTML = smallest(integer1, integer2, integer3);
        $resultLargest.innerHTML = largest(integer1, integer2, integer3);
    }
}

function reset() {
    $inputInteger1.value = "";
    $inputInteger2.value = "";
    $inputInteger3.value = "";
    $resultSum.innerHTML = "";
    $resultAverage.innerHTML = "";
    $resultProduct.innerHTML = "";
    $resultSmallest.innerHTML = "";
    $resultLargest.innerHTML = "";
}

var $btnResults = document.getElementById('btn-show-results');
$btnResults.onclick = function (e) {
    e.preventDefault();
    updateResults();
}

var $btnReset = document.getElementById('btn-reset');
$btnReset.onclick = function(e) {
    e.preventDefault();
    reset();
}