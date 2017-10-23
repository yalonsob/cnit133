$(document).ready(function(){
    $('#button-animate').click(function(){
        $('#animated-box').animate({height:210},"slow");
        $('#animated-box').animate({width:192},"slow");
        $('#animated-box').animate({height:70},"slow");
        $('#animated-box').animate({width:66},"slow");
    });
});

var $songLyrics = document.getElementById('song-lyrics');
var sentenceChristmas = 'day of Christmas <br>';
var sentenceLove = 'my true love sent to me: <br>';
var firstPresent = 'A Partridge in a Pear Tree';
var christmasPresents = [
    'and a Partridge in a Pear Tree',
    'Two Turtle Doves',
    'Three French Hens',
    'Four Calling Birds',
    'Five Golden Rings',
    'Six Geese a Laying',
    'Seven Swans a Swimming',
    'Eight Maids a Milking',
    'Nine Ladies Dancing',
    'Ten Lords a Leaping',
    'Eleven Pipers Piping',
    'Twelve Drummers Drumming'
];

$songLyrics.innerHTML = "";

for (var i = 0; i < christmasPresents.length; i++) {
    var verse = "On the ";
    var day = "";

    switch(i) {
        case 0:
            day = 'first ';
            break;
        case 1:
            day = 'second ';
            break;
        case 2:
            day = 'third ';
            break;
        case 3:
            day = 'fourth ';
            break;
        case 4:
            day = 'fifth ';
            break;
        case 5:
            day = 'sixth ';
            break;
        case 6:
            day = 'seventh ';
            break;
        case 7:
            day = 'eighth ';
            break;
        case 8:
            day = 'ninth ';
            break;
        case 9:
            day = 'tenth ';
            break;
        case 10:
            day = 'eleventh ';
            break;
        case 11:
            day = 'twelfth ';
            break;
    }

    verse = verse + day + sentenceChristmas + sentenceLove;

    if (i == 0) {
        verse  = verse + firstPresent + '<br>';
    } else {
        for(var j = i; j >= 0 ; j--) {
            verse = verse + christmasPresents[j] + '<br>';
        }
    }

    $songLyrics.innerHTML = $songLyrics.innerHTML + verse + '<br>';
}
