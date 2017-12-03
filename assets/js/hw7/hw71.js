var $main = document.getElementById('content');
var $buttonSubmit = document.getElementById('button-submit');
var $color = document.getElementsByName('color');
var $fontFamily = document.getElementById('font-family');
var $fontSize = document.getElementById('font-size');
var $fontStyle = document.getElementsByName('font-style');
var $fontWeight = document.getElementById('font-weight');

$buttonSubmit.onclick = function (e) {
    var classString = "";
    console.log("hey");
    e.preventDefault();

    if ($color[0].checked) {
        classString = classString + " background-red";
    } else if ($color[1].checked) {
        classString = classString + " background-green";
    }

    if ($fontFamily.selectedIndex == 0) {
        classString = classString + " font-family-arial";
    } else if ($fontFamily.selectedIndex == 1) {
        classString = classString + " font-family-times";

    } else if ($fontFamily.selectedIndex == 2) {
        classString = classString + " font-family-comic";
    }

    if ($fontSize.selectedIndex == 0) {
        classString = classString + " font-size-10";
    } else if ($fontSize.selectedIndex == 1) {
        classString = classString + " font-size-15";

    } else if ($fontSize.selectedIndex == 2) {
        classString = classString + " font-size-30";
    }

    if ($fontStyle[0].checked) {
        classString = classString + " font-style-italic";
    }

    if ($fontStyle[1].checked) {
        classString = classString + " font-style-underline";
    }

    if ($fontWeight.selectedIndex == 0) {
        classString = classString + " font-weight-normal";
    } else if ($fontWeight.selectedIndex == 1) {
        classString = classString + " font-weight-bold";
    }

    $main.className = classString;

};

