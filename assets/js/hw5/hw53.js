var $btnAddEmployee = document.getElementById('button-add-employee');
var $grossSalesInput = document.getElementById('gross-sales-input');
var $errorMessage = document.getElementById('error-invalid-gross-sales');
var categories = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function calculateSalary(grossSales) {
    var baseSalary = 200.00
    var commission = 9
    return (grossSales * commission / 100 + baseSalary).toFixed(2);
}

function getCategory(salary) {
    if(salary >= 200 && salary <= 299.99) {
        return 0;
    }
    if(salary >= 300 && salary <= 399.99) {
        return 1;
    }
    if(salary >= 400 && salary <= 499.99) {
        return 2;
    }
    if(salary >= 500 && salary <= 599.99) {
        return 3;
    }
    if(salary >= 600 && salary <= 699.99) {
        return 4;
    }
    if(salary >= 700 && salary <= 799.99) {
        return 5;
    }
    if(salary >= 800 && salary <= 899.99) {
        return 6;
    }
    if(salary >= 900 && salary <= 999.99) {
        return 7;
    }
    return 8;
}

$btnAddEmployee.onclick = function (e) {
    e.preventDefault();

    if(isNaN($grossSalesInput.value) || $grossSalesInput.value == "") {
        $errorMessage.style.display = "block";
        return;
    }
    $errorMessage.style.display = "none";
    var category = getCategory(calculateSalary(parseFloat($grossSalesInput.value).toFixed(2)));
    categories[category]++;
    var idToUpdate = 'category' + category;
    document.getElementById(idToUpdate).innerHTML = categories[category];
};