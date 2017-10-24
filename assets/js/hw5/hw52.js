var $btnStateInfo = document.getElementById('button-state-info');
var $stateInput = document.getElementById('state-input');
var $errorMessage = document.getElementById('error-invalid-state');
var $stateAbbreviation = document.getElementById('state-abbreviation');
var $stateName = document.getElementById('state-name');
var $stateCapital = document.getElementById('state-capital');
var $statePopulation = document.getElementById('state-population');

var statesInformation = [
    ["AL", "Alabama", "Montgomery", 4779736],
    ["AK", "Alaska", "Juneau", 710231],
    ["AZ", "Arizona", "Phoenix", 6392017],
    ["AR", "Arkansas", "Little Rock", 2915918],
    ["CA", "California", "Sacramento", 37253956],
    ["CO", "Colorado", "Denver", 5029196]
];


$(document).ready(function(){
    $("#btn-show-instructions").click(function(e){
        e.preventDefault();
        $("#instructions").slideToggle("slow");
    });
});


function findState() {
    var stateInput = $stateInput.value.toUpperCase();
    for (var i = 0; i < statesInformation.length; i++) {
        if (statesInformation[i][0].toUpperCase() == stateInput ||
            statesInformation[i][1].toUpperCase() == stateInput) {
            return i;
        }
    }
    return -1;
}

function showStateInfo(state) {
    $stateAbbreviation.value = statesInformation[state][0];
    $stateName.value = statesInformation[state][1];
    $stateCapital.value = statesInformation[state][2];
    $statePopulation.value = statesInformation[state][3];
}

$btnStateInfo.onclick = function (e) {
    e.preventDefault();

    var state = findState();
    if (state < 0) {
        $errorMessage.style.display = "block";
        return;
    }
    $errorMessage.style.display = "none";
    showStateInfo(state);
};