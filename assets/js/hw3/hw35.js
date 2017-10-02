var $btnToCelsius = document.getElementById('button-to-celsius');
var $btnToFahrenheit = document.getElementById('button-to-fahrenheit');
var $toCelsius = document.getElementById('to-celsius');
var $toFahrenheit = document.getElementById('to-fahrenheit');
var $fromFahrenheit = document.getElementById('from-fahrenheit');
var $fromCelsius = document.getElementById('from-celsius');
var $errorToCelsius = document.getElementById('error-to-celsius');
var $errorToFahrenheit = document.getElementById('error-to-fahrenheit');

function toCelsius(f) {
    return 5/9 * (f - 32);
}

function toFahrenheit(c) {
    return (9/5 * c) + 32;
}

$btnToCelsius.onclick = function (e) {
    e.preventDefault();
    if (isNaN($fromFahrenheit.value) || $fromFahrenheit.value == "") {
        $errorToCelsius.style.display = "block";
        return;
    }
    $errorToCelsius.style.display = "none";
    $toCelsius.innerHTML = Math.round(toCelsius($fromFahrenheit.value));
};

$btnToFahrenheit.onclick = function (e) {
    e.preventDefault();
    if (isNaN($fromCelsius.value) || $fromCelsius.value == "") {
        $errorToFahrenheit.style.display = "block";
        return;
    }
    $errorToFahrenheit.style.display = "none";
    $toFahrenheit.innerHTML = Math.round(toFahrenheit($fromCelsius.value));
};
