$validationResponse = document.getElementById("validation-response");
$formInput = document.getElementById("form-input");
$formMaleRadio = document.getElementById("male-radio");
$formFemaleRadio = document.getElementById("female-radio");
$formStudyCheckbox = document.getElementById("study-checkbox");
$formWorkCheckbox = document.getElementById("work-checkbox");
$formSelect = document.getElementById("form-select");

function validateForm() {
    $validationResponse.innerHTML = "";

    var validation = $formInput.value != "" &&
        ($formMaleRadio.checked || $formFemaleRadio.checked) &&
        ($formStudyCheckbox.checked || $formWorkCheckbox.checked) &&
        $formSelect.value != "";

    if(validation) {
        $validationResponse.innerHTML = "VALID form input";
    } else {
        $validationResponse.innerHTML = "INVALID form input";
    }
    console.log("Validating...");
    console.log(validation);

}


