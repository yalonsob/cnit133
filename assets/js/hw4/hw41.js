var productThirdInteger = 1;
var sumThirdInteger = 0;
var productFourthInteger = 1;
var sumFourthInteger = 0;

for(var i = 5; i <= 20; i += 3) {
    sumThirdInteger += i;
    productThirdInteger *= i;
}

for(var i = 3; i <= 31; i += 4) {
    sumFourthInteger += i;
    productFourthInteger *= i;
}

document.getElementById('product-third-integer').innerHTML = productThirdInteger;
document.getElementById('sum-third-integer').innerHTML = sumThirdInteger;
document.getElementById('product-fourth-integer').innerHTML = productFourthInteger;
document.getElementById('sum-fourth-integer').innerHTML = sumFourthInteger;

$( function() {
    $( "#draggable" ).draggable();
} );