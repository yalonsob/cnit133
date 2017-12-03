$mainButton = document.getElementById('main-button');
$passwordForm = document.getElementById('password-form');
var $password = document.getElementById('password');
$errorMessage = document.getElementById('error-message');
$container = document.getElementById('container');


var logged = false;
mainButtonText(logged);
$container.style.display = "none";
$passwordForm.style.display = "none";

function changeColor(color){
    $container.style.backgroundColor = color;
}

function resetColor(){
    $container.style.backgroundColor = 'white';
}

function mainButtonText(logged) {
    if (logged) {
        $mainButton.innerHTML = "LOGOUT";
    } else {
        $mainButton.innerHTML = "LOGIN";
    }
}
function login(){
    $container.style.display = "block";
    logged = true;
    mainButtonText(logged);
    $passwordForm.style.display = "none";
}

function logout() {
    $container.style.display = "none";
    logged = false;
    mainButtonText(logged);
}

function checkPassword() {
    if($password.value == "obama") {
        $errorMessage.style.display = "none";
        login();
    } else {
        $errorMessage.style.display = "block";
    }
}

function showLoginForm() {
    $passwordForm.style.display = "block";
}

function mainButtonClick() {
    if (logged) {
        logout();
    } else {
        showLoginForm();
    }
}
