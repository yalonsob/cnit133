var $btnCheckPalindrome = document.getElementById('button-check-palindrome');
var $errorMessageLength = document.getElementById('error-message-length');
var $errorMessage = document.getElementById('error-message');
var $palindromeSolution = document.getElementById('palindrome-solution');

function isPalindrome(inputInteger) {
    if(inputInteger.charAt(0) == inputInteger.charAt(4) && inputInteger.charAt(1) == inputInteger.charAt(3)) {
        return true;
    }
    return false;
}


$btnCheckPalindrome.onclick = function (e) {
    e.preventDefault();
    $palindromeSolution.innerHTML = "";
    var inputInteger = document.getElementById('input-integer').value;
    if (isNaN(inputInteger)) {
        $errorMessage.style.display = "block";
        return;
    }
    $errorMessage.style.display = "none";
    if (inputInteger.length != 5) {
        $errorMessageLength.style.display = "block";
        return;
    }
    $errorMessageLength.style.display = "none";
    if (inputInteger.charAt(0) == 0) {
        $errorMessage.style.display = "block";
        return;
    }
    $errorMessage.style.display = "none";

    if (isPalindrome(inputInteger)) {
        $palindromeSolution.innerHTML = "YES!";
    } else {
        $palindromeSolution.innerHTML = "NO!";
    }
};