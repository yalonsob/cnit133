document.write( "<table class='dotted-table' border = '1'><tr> " + "<td>Number</td> <td>Square</td> <td>Cube</td></tr>" );
document.write( "<tr align=\"right\"><td>" + 1 + "</td>" + "<td>" + Math.pow(1,2) + "</td>" + "<td>" + Math.pow(1, 3) + "</td></tr>" );
document.write( "<tr align=\"right\"><td>" + 2 + "</td>" + "<td>" + Math.pow(2,2) + "</td>" + "<td>" + Math.pow(2, 3) + "</td></tr>" );
document.write( "<tr align=\"right\"><td>" + 3 + "</td>" + "<td>" + Math.pow(3,2) + "</td>" + "<td>" + Math.pow(3, 3) + "</td></tr>" );
document.write( "<tr align=\"right\"><td>" + 4 + "</td>" + "<td>" + Math.pow(4,2) + "</td>" + "<td>" + Math.pow(4, 3) + "</td></tr>" );
document.write( "<tr align=\"right\"><td>" + 5 + "</td>" + "<td>" + Math.pow(5,2) + "</td>" + "<td>" + Math.pow(5, 3) + "</td></tr>" );
document.write( "<tr align=\"right\"><td>" + 6 + "</td>" + "<td>" + Math.pow(6,2) + "</td>" + "<td>" + Math.pow(6, 3) + "</td></tr>" );
document.write( "</table>" );

function showResultTable() {
    var htmlOutput = "";
    htmlOutput += "<table class='dotted-table' border = '1'><tr> " + "<td>Number</td> <td>Square</td> <td>Cube</td></tr>";
    htmlOutput += "<tr align=\"right\"><td>" + 7 + "</td>" + "<td>" + Math.pow(7,2) + "</td>" + "<td>" + Math.pow(7, 3) + "</td></tr>";
    htmlOutput += "<tr align=\"right\"><td>" + 8 + "</td>" + "<td>" + Math.pow(8,2) + "</td>" + "<td>" + Math.pow(8, 3) + "</td></tr>";
    htmlOutput += "<tr align=\"right\"><td>" + 9 + "</td>" + "<td>" + Math.pow(9,2) + "</td>" + "<td>" + Math.pow(9, 3) + "</td></tr>";
    htmlOutput += "<tr align=\"right\"><td>" + 10 + "</td>" + "<td>" + Math.pow(10,2) + "</td>" + "<td>" + Math.pow(10, 3) + "</td></tr>";
    htmlOutput += "</table>";
    var $resultTable = document.getElementById('result-table');
    $resultTable.innerHTML = htmlOutput;
}

window.onload = function(){

    var $btnShow7To10Table = document.getElementById('btn-show-7-to-10-table');
    $btnShow7To10Table.onclick = function(e) {
        e.preventDefault();
        showResultTable();
    };
};