$textComplete = document.getElementById('text-complete');
$buttonCountLetters = document.getElementById('button-count-letters');

var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

function getNewOccurrencesArray() {
    var occurrences = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    return occurrences;
}



$buttonCountLetters.onclick = function (e) {
    e.preventDefault();

    var st = $textComplete.value.toLowerCase();
    var firstOccurrence = -1;
    var occurrences = getNewOccurrencesArray();

    for(var i = 0; i < letters.length; i++) {
        var count = 0;
        firstOccurrence = st.indexOf(letters[i]);
        if(firstOccurrence >= 0) {
            for (var j = firstOccurrence; j < st.length; j++) {
                if(st.charAt(j) == letters[i]) {
                    count += 1;
                }
            }
            occurrences[i] = count;
            firstOccurrence = -1;
        }
    }

    for(var i = 0; i < letters.length; i++) {
        var occurrencesID = 'occurrences-' + letters[i];
        document.getElementById(occurrencesID).value = occurrences[i];
    }
};

