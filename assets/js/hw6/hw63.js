var currentDate = new Date();
var differenceLocalUTC = currentDate.getTimezoneOffset();
var offset = -180;
var myRegExp = /^(\()(\d{3})(\))(\s)(\d{3})-(\d{4})$/;

document.getElementById('date-string').innerHTML = currentDate.toString() + "<br>";
document.getElementById('date-locale').innerHTML = currentDate.toLocaleString() + "<br>";
document.getElementById('date-utc').innerHTML = currentDate.toUTCString() + "<br>";
document.getElementById('pst-utc').innerHTML = differenceLocalUTC / 60 + "<br>";
document.getElementById('est-utc').innerHTML = (differenceLocalUTC + offset) / 60 + "<br>";

$buttonSplit = document.getElementById('button-split');
$telephone = document.getElementById('telephone');
$errorTelephone = document.getElementById('error-invalid-telephone');
$areaToken = document.getElementById('area-token');
$digitsToken = document.getElementById('digits-token');


$buttonSplit.onclick = function (e) {
    e.preventDefault();

    var phone = $telephone.value;
    var parts = phone.match(myRegExp);
    if (parts == null) {
        $errorTelephone.style.display = "block";
        $areaToken.value = "";
        $digitsToken.value = "";
        return;
    } else {
        $errorTelephone.style.display = "none";
        phone = phone.replace("(", "");
        phone = phone.replace(") ", "-");
        var tokens = phone.split("-");
        $areaToken.value = tokens[0];
        $digitsToken.value = tokens[1] + tokens[2];
    }

};





