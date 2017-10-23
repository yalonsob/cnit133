var $btnSubmit = document.getElementById('button-submit');

function processProducts() {

    var totalRetail = 0;

    for (var i = 1; i <= 5; i++) {
        var qtyId = 'qty' + i;
        var priceId = 'price' + i;
        var retailAmount = 'a' + i;
        var quantity = document.getElementById(qtyId).value;
        var price = document.getElementById(priceId).innerHTML;
        var $retailAmount = document.getElementById(retailAmount);
        $retailAmount.value = (quantity * price).toFixed(2);
        var productRetail = parseFloat($retailAmount.value);
        totalRetail += productRetail;
    }

    document.getElementById('ts').value = totalRetail.toFixed(2);
}

$btnSubmit.onclick = function (e) {
    e.preventDefault();
    processProducts();
};