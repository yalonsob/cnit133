var $btnSubmit = document.getElementById('button-submit');

function processProducts() {

    var totalRetail = 0;

    for (var i = 1; i <= 5; i++) {
        var qtyId = 'qty' + i;
        var retailAmount = 'a' + i;
        var quantity = document.getElementById(qtyId).value;
        var $retailAmount = document.getElementById(retailAmount);
        var price;

        switch(i) {
            case 1:
                price = 2.98;
                break;
            case 2:
                price = 4.50;
                break;
            case 3:
                price = 9.98;
                break;
            case 4:
                price = 4.49;
                break;
            case 5:
                price = 6.87;
                break;
        }

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