$(document).ready(function(){
    $("#btn-show-instructions").click(function(e){
        e.preventDefault();
        $("#instructions").slideToggle("slow");
    });
});

function isInputComplete(homeworkAverage, midExam, finalExam, acr) {
    if (homeworkAverage == "" || midExam == "" || finalExam == "" || acr == "") {
        return false;
    }
    return true;
}

function isInputValid(homeworkAverage, midExam, finalExam, acr) {
    if (isNaN(homeworkAverage) || isNaN(midExam) || isNaN(finalExam) || isNaN(acr)) {
        return false;
    }
    if (homeworkAverage < 0 || homeworkAverage > 100 ||
        midExam < 0 || midExam > 100 ||
        finalExam < 0 || finalExam > 100 ||
        acr < 0 || acr > 100) {
        return false;
    }
    return true;
}

function calculateFinalAverage(homeworkAverage, midExam, finalExam, acr) {
    return Math.round((0.5 * homeworkAverage) + (0.2 * midExam) + (0.2 * finalExam) + (0.1 * acr));
}

function showFinalResults(finalAverage) {
    var $finalLetter = document.getElementById("final-letter");
    var $failMessage = document.getElementById("fail-message");

    document.getElementById("final-average").innerHTML = finalAverage;
    if (finalAverage >= 90) {
        $finalLetter.innerHTML = "A";
        $failMessage.style.display = "none";
    }else if (finalAverage >= 80) {
        $finalLetter.innerHTML = "B";
        $failMessage.style.display = "none"
    } else if (finalAverage >= 70) {
        $finalLetter.innerHTML = "C";
        $failMessage.style.display = "none"
    } else if (finalAverage >= 60) {
        $finalLetter.innerHTML = "D";
        $failMessage.style.display = "block";
    } else {
        $finalLetter.innerHTML = "F";
        $failMessage.style.display = "block";
    }
}

function processInput() {
    var homeworkAverage = document.getElementById("homework-average").value;
    var midExam = document.getElementById("mid-exam").value;
    var finalExam = document.getElementById("final-exam").value;
    var acr = document.getElementById("acr").value;
    var $errorMessage = document.getElementById("error-message");

    if(!isInputComplete(homeworkAverage, midExam, finalExam, acr)) {
        return;
    }
    if (!isInputValid(homeworkAverage, midExam, finalExam, acr)) {
        $errorMessage.style.display = "block";
        return;
    }
    $errorMessage.style.display = "none";
    var finalAverage = calculateFinalAverage(parseInt(homeworkAverage), parseInt(midExam), parseInt(finalExam), parseInt(acr));
    showFinalResults(finalAverage);

}