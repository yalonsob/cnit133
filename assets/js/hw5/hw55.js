$btnBoardingPass = document.getElementById('button-boarding-pass');
$btnYes = document.getElementById('button-yes');
$btnNo = document.getElementById('button-no');

$planeSection = document.getElementById('plane-section');
$fullSection = document.getElementById('full-section');
$userSeat = document.getElementById('user-seat');
$userSection = document.getElementById('user-section');

$errorMessage = document.getElementById('error-invalid-section');
$errorNextFligth = document.getElementById('error-next-flight');
$errorFullPlane = document.getElementById('error-full-plane');




var planeSeats = [0,0,0,0,0,0,0,0,0,0];
var economyMessage = "Economy";
var firstClassMessage = "FirstClass";
var planeSection;
var userSeat;

function isFirstClassFull() {
    var isFull = true;
    for(var i = 0; i <= 4; i++){
        if(planeSeats[i] == 0) {
            isFull = false;
            break;
        }
    }
    return isFull;
}

function isEconomyClassFull() {
    var isFull = true;
    for(var i = 5; i <= 9; i++) {
        if(planeSeats[i] == 0) {
            isFull = false;
            break;
        }
    }
    return isFull;
}

function isPlaneFull() {
    return isEconomyClassFull() && isFirstClassFull();
}

function assignFirstClassSeat() {
    if(isFirstClassFull()) {
        return -1;
    }
    var seat;
    for(var i = 0; i <= 4; i++) {
        if(planeSeats[i] == 0) {
            planeSeats[i] = 1;
            seat = i + 1;
            break;
        }
    }
    return seat;
}

function assignEconomySeat() {
    if(isEconomyClassFull()) {
        return -1;
    }
    var seat;
    for(var i = 5; i <= 9; i++){
        if(planeSeats[i] == 0) {
            planeSeats[i] = 1;
            seat = i + 1;
            break;
        }
    }
    return seat;
}

function assignFirstAvailableSeat(){
    var seat;
    for(var i = 0; i <= 9; i++) {
        if(planeSeats[i] == 0) {
            planeSeats[i] = 1;
            seat = i + 1;
            break;
        }
    }
    return seat;
}

function printFlightTicket(userSeat) {
    $userSeat.innerHTML = userSeat;
    if(userSeat <= 5) {
        $userSection.innerHTML = firstClassMessage;
    } else {
        $userSection.innerHTML = economyMessage;
    }
}

$btnBoardingPass.onclick = function (e) {
    e.preventDefault();
    $errorNextFligth.style.display ="none";
    $fullSection.style.display = "none";
    $errorMessage.style.display = "none";

    if(isPlaneFull()) {
        $errorFullPlane.style.display = "block";
        $userSeat.innerHTML = "";
        $userSection.innerHTML = "";
        return;
    }

    planeSection = $planeSection.value;
    switch(planeSection) {
        case "1":
            userSeat = assignFirstClassSeat();
            break;
        case "2":
            userSeat = assignEconomySeat();
            break;
        default:
            $errorMessage.style.display = "block";
            $userSeat.innerHTML = "";
            $userSection.innerHTML = "";
            return;
    }

    if(userSeat < 0) {
        $fullSection.style.display = "block";
        $userSeat.innerHTML = "";
        $userSection.innerHTML = "";
    } else {
        printFlightTicket(userSeat);
    }
};

$btnYes.onclick = function (e) {
    e.preventDefault();
    userSeat = assignFirstAvailableSeat();
    printFlightTicket(userSeat);
    $fullSection.style.display = "none";
};

$btnNo.onclick = function (e) {
    e.preventDefault();
    $fullSection.style.display = "none";
    $errorNextFligth.style.display = "block";
};