$buttonSearch = document.getElementById('button-search-character');
$textComplete = document.getElementById('text-complete');
$searchCharacter = document.getElementById('search-character');
$occurrences = document.getElementById('occurrences');
$errorInput = document.getElementById('error-invalid-input')

function numberOfOccurrencesOf(c, st) {
    var count = 0;
    for(var i = 0; i < st.length; i++) {
        if(st.charAt(i) == c) {
            count += 1;
        }
    }
    return count;
}

$buttonSearch.onclick = function (e) {
    e.preventDefault();

    var c = $searchCharacter.value;
    var st = $textComplete.value;

    if(c.length != 1 || st.length < 1) {
        $errorInput.style.display = "block";
        return;
    }

    $errorInput.style.display = "none";
    var occurrences = numberOfOccurrencesOf(c, st);
    $occurrences.value = occurrences;

    if(occurrences == 0) {


        var newWindow = window.open("", "new_window", "top=500,left=auto,width=300,height=100");
        newWindow.focus();
        newWindow.document.write("Search character '"+ c + "' not found in text string!");
        newWindow.document.close();
    }
};