$buttonCalculate = document.getElementById('button-calculate');
$floatNumber = document.getElementById('float-number');
$originalNumber = document.getElementById('original-number');
$roundedInteger = document.getElementById('rounded-integer');
$squareRoot = document.getElementById('square-root');
$tenthPosition = document.getElementById('tenth-position');
$hundredthPosition = document.getElementById('hundredth-position');
$thousandthPosition = document.getElementById('thousandth-position');
$errorFloat = document.getElementById('error-invalid-float');


//var val = 37.435345;
var countDecimals = function(value) {
    if (Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
    return 0;
};
//countDecimals(val);

$buttonCalculate.onclick = function (e) {
    e.preventDefault();

    var floatNumber = parseFloat($floatNumber.value);
    if(countDecimals(floatNumber) < 4) {
        $errorFloat.style.display = "block";
        return;
    }

    $errorFloat.style.display = "none";

    $originalNumber.value = floatNumber;
    $roundedInteger.value = Math.round(floatNumber);
    $squareRoot.value = Math.round(Math.sqrt(floatNumber));
    var tenth = Math.floor( floatNumber * 10 + .5 ) / 10;
    $tenthPosition.value = tenth.toFixed(1);
    var hundredth = Math.floor( floatNumber * 100 + .5 ) / 100;
    $hundredthPosition.value = hundredth.toFixed(2);
    var thousandth = Math.floor( floatNumber * 1000 + .5 ) / 1000;
    $thousandthPosition.value = thousandth.toFixed(3);
};

