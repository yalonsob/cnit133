var $number1 = document.getElementById('number-1');
var $number2 = document.getElementById('number-2');
var $answer = document.getElementById('answer');
var $feedback = document.getElementById('feedback');
var $btnCheckAnswer = document.getElementById('button-check-answer');
var $btnNextQuestion = document.getElementById('button-next-question');
var number1;
var number2;
var solution;
var correctFeedback = "Very good!";
var wrongFeedback = "No. Please try again.";

function randomInt() {
    return Math.floor((Math.random()*10));
}

window.onload = function(){
    solution = startNewQuestion();
};

function startNewQuestion() {
    $answer.value = "";
    $feedback.innerHTML = "";
    $feedback.style.display = "none";
    $btnNextQuestion.disabled = true;
    $btnCheckAnswer.disabled = false;
    number1 = randomInt();
    number2 = randomInt();
    $number1.innerHTML = number1;
    $number2.innerHTML = number2;
    return (number1 * number2);
}

$btnCheckAnswer.onclick = function (e) {
    e.preventDefault();
    if ($answer.value != solution) {
        $feedback.innerHTML = wrongFeedback;
    } else {
        $feedback.innerHTML = correctFeedback;
        $btnCheckAnswer.disabled = true;
        $btnNextQuestion.disabled = false;

    }
    $feedback.style.display = "block";
    $answer.value = "";
};