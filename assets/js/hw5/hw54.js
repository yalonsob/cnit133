var $btnAddNumber = document.getElementById('button-add-number');
var $numberInput = document.getElementById('number-input');
$errorMessage = document.getElementById('error-invalid-number');
$remainNumber = document.getElementById('remain-numbers');
$userNumbers = document.getElementById('user-numbers');
var remainNumbers = 10;
var numbers = [];

function addNumber(number) {
    var repeated = false;
    if(numbers.length == 0) {
        numbers.push(number);
        return;
    }
    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i] == number){
            repeated = true;
            break;
        }
    }
    if(!repeated) {
        numbers.push(number);
    }
}

function printNumbers() {
    $userNumbers.innerHTML = "";
    for(var i = 0; i < numbers.length; i++) {
        $userNumbers.innerHTML = $userNumbers.innerHTML + numbers[i] + "<br>";
    }
}

$btnAddNumber.onclick = function (e) {
    e.preventDefault();

    var numberInput = $numberInput.value;

    if(isNaN(numberInput) || numberInput == "" || parseInt(numberInput) < 10 || parseInt(numberInput) > 100) {
        $errorMessage.style.display = "block";
        return;
    }
    $errorMessage.style.display = "none";
    var newNumber = parseFloat(numberInput);
    $numberInput.value = "";
    remainNumbers--;
    $remainNumber.innerHTML = remainNumbers;

    addNumber(newNumber);
    printNumbers();

    if(remainNumbers <= 0) {
        $numberInput.disabled = true;
    }
};