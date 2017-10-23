$(document).ready(function(){
    $("#btn-show-instructions").click(function(e){
        e.preventDefault();
        $("#instructions").slideToggle("slow");
    });
});

function isOptionValid(option) {
    if (option == "1" || option == "2" || option == "3") {
        return true;
    }
    return false;
}

function processOption() {
    var option = document.getElementById('option').value;
    var $errorMessage = document.getElementById('error-invalid-input');
    var $listContent = document.getElementById('list-content');
    var contentHTML = "";

    if(!isOptionValid(option)) {
        $errorMessage.style.display = "block";
        $listContent.innerHTML = "";
        return;
    }
    $errorMessage.style.display = "none";

    switch (option) {
        case "1":
            contentHTML += "<ul style=\"list-style-type: square;\">";
            break;
        case "2":
            contentHTML += "<ol>";
            break;
        case "3":
            contentHTML += "<ol style=\"list-style-type: upper-alpha;\">";
            break;
    }

    for (var i = 1; i <= 3 ; i++) {
        contentHTML += "<li>List item " + i + "</li>";
    }

    switch (option) {
        case "1":
            contentHTML += "</ul>";
            break;
        case "2":
        case "3":
            contentHTML += "</ol>";
            break;
    }


    $listContent.innerHTML = contentHTML;
}