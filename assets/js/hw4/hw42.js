var $btnSubmit = document.getElementById('button-submit');
var $errorMessage = document.getElementById('error-invalid-input');

function is_int(value){
    if(value != "" &&  !isNaN(value) && (parseFloat(value) == parseInt(value))){
        return true;
    } else {
        return false;
    }
}

function is_float(value) {
    if(value != "" && !isNaN(value) && parseFloat(value)){
        return true;
    } else {
        return false;
    }
}

function calculateGross(hours, rate) {
    var gross
    if (hours > 40) {
        gross = (hours - 40) * 1.5 * rate + 40 * rate;
    } else {
        gross = hours * rate;
    }
    return gross.toFixed(2);
}

function isEmployeesInputValid() {

    for (var i = 1; i <= 6; i++) {
        var hoursId = 'hours' + i;
        var rateId = 'rate' + i;

        var hoursValue = document.getElementById(hoursId).value;
        var rateValue = document.getElementById(rateId).value;

        if (!is_int(hoursValue) || !is_float(rateValue)) {
            return false;
        }
    }

    return true;
}

function processEmployeesInput() {
    if (!isEmployeesInputValid()) {
        $errorMessage.style.display = "block";
        return false;
    }
    $errorMessage.style.display = "none";
    return true;

}

function processEmployeesOutput() {
    console.log("hey");
    for (var i = 1; i <= 6; i++) {
        var hoursId = 'hours' + i;
        var rateId = 'rate' + i;
        var fhoursId = 'f-hours' + i;
        var frateId = 'f-rate' + i;
        var grossId = 'gross' + i;

        var hours = document.getElementById(hoursId).value;
        var rate = document.getElementById(rateId).value;

        document.getElementById(fhoursId).value = hours;
        document.getElementById(frateId).value = rate;
        document.getElementById(grossId).value = calculateGross(hours, rate);
    }

}

function processEmployees() {
    if(!processEmployeesInput()) {
        return;
    }
    processEmployeesOutput();
}

$btnSubmit.onclick = function (e) {
    e.preventDefault();
    processEmployees();
};
