var $btnDrawSquare = document.getElementById('button-draw-square');
var $square = document.getElementById('square');
var $squareSize = document.getElementById('square-size');
var errorMessage = 'Invalid square size';

function drawSquare(size) {
    var squareHTML = "";

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            //First and last row
            if (i == 0 || i == size-1) {
                squareHTML = squareHTML + '*' + '&nbsp &nbsp';
            } else { //Middle rows
                //First and last column
                if (j == 0 || j == size-1) {
                    squareHTML = squareHTML + '*' + '&nbsp &nbsp';
                } else { //Middle columns
                    squareHTML = squareHTML + '&nbsp &nbsp &nbsp'
                }
            }
        }
        squareHTML += '<br>';
    }
    return squareHTML;
}

$btnDrawSquare.onclick = function (e) {
    e.preventDefault();
    var squareSize = $squareSize.value;
    $square.innerHTML = "";
    if (isNaN(squareSize) || parseInt(squareSize) < 2 || parseInt(squareSize) > 10) {
        $square.innerHTML = errorMessage;
        return;
    } else {
        $square.innerHTML = drawSquare(parseInt(squareSize));
    }
};