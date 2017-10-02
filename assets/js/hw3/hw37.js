var TURN = {
    START: 0,
    POINT: 1
};

var $btnRollDice = document.getElementById('btn-roll-dice');
var $dice1 = document.getElementById('dice-1');
var $dice2 = document.getElementById('dice-2');
var $sum = document.getElementById('sum');
var $point = document.getElementById('point');
var $gameFeedback = document.getElementById('game-feedback');

var currentTurn;
var number1;
var number2;
var point = "-";
var winFeedback = "You win =)  Roll dice to play again";
var loseFeedback = "You lose =(  Roll dice to play again";

window.onload = function(){
    currentTurn = TURN.START;
};

function rollDice() {
    return 1 + Math.floor(Math.random() * 6);
}

function displayRollOutput(number1, number2, sum) {
    $dice1.innerHTML = number1;
    $dice2.innerHTML = number2;
    $sum.innerHTML = sum;
    $point.innerHTML = point;
}

function win() {
    $gameFeedback.innerHTML = winFeedback;
    $gameFeedback.style.display = "block";
    currentTurn = TURN.START;
}

function lose(){
    $gameFeedback.innerHTML = loseFeedback;
    $gameFeedback.style.display = "block";
    currentTurn = TURN.START;
}

function startPointTurn(sum) {
    point = sum;
    $point.innerHTML = point;
    currentTurn = TURN.POINT;
}

function playStartTurn(sum) {
    switch (sum) {
        case 7:
        case 11:
            win();
            break;
        case 2:
        case 3:
        case 12:
            lose();
            break;
        default:
            startPointTurn(sum);
    }
}

function playPointTurn(sum) {
    if (sum == point) {
        win();
        return;
    }
    if(sum == 7) {
        lose();
        return;
    }
    return;
}

$btnRollDice.onclick = function (e) {
    e.preventDefault();

    number1 = rollDice();
    number2 = rollDice();
    var sum = number1 + number2;
    $gameFeedback.style.display = "none";

    switch (currentTurn) {
        case TURN.START:
            point = "-";
            playStartTurn(sum);
            break;
        case TURN.POINT:
            playPointTurn(sum);
            break;
    }

    displayRollOutput(number1, number2, sum);
};