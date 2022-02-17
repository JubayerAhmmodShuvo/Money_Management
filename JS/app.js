//function for all input values

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    if (amountValue > 0) {
        return amountValue;
    } else {
        alert('Please enter a valid amount');
    }
}
//function for calculating the cost
function cost() {

    const foodInput = getInputValue('food-input');
    const rentInput = getInputValue('rest-input');
    const clothInput = getInputValue('cloth-input');
    const totalCost = foodInput + rentInput + clothInput;
    return totalCost;


}
//function for calculating the totalExpense
function totalExpense() {
    const expense = document.getElementById('total-expense');
    const totalExpense = expense.innerText;
    const total = parseFloat(totalExpense) + cost();

    expense.innerText = total;
}
//function for calculating the totalBalance
function totalBalance() {
    const balance = document.getElementById('total-balance');

    const balanceTotal = balance.innerText;
    const totalAmount = getInputValue('total-income');
    const totalBalance = totalAmount - cost();
    const total = parseFloat(balanceTotal) + totalBalance;
    if (total > 0) {
        return balance.innerText = total;
    } else {
        alert('Your balance is low');
    }
}
//calculation of calculate button
document.getElementById('calculate-total').addEventListener('click', function() {

    const totalAmount = getInputValue('total-income');
    if (totalAmount > cost()) {
        totalExpense();
        totalBalance();
    } else {
        alert('Your balance is insufficient, Please enter value correclty otherwise you will be in debt');
    }
});
//function for calculating the saving amount
function save() {
    const totalAmount = getInputValue('total-income');
    const totalPercent = getInputValue('save-input');
    const beforeTotal = totalAmount * totalPercent;
    const total = beforeTotal / 100;
    return total;
}
//function for calculating the saving amount
function savingAmount() {
    const saveAmount = document.getElementById('save-amount');
    const totalBalance = document.getElementById('total-balance').innerText;
    const balance = parseFloat(totalBalance);

    const saveAmountText = saveAmount.innerText;
    const saveAmountConverted = parseFloat(saveAmountText);
    const total = saveAmountConverted + save();
    if (total > balance) {
        alert('You cannot save because saving amount is higher than your balance');
    } else {
        saveAmount.innerText = total;
        return total;
    }
    /*  saveAmount.innerText = total;
     return total; */


}
//function for calculating the remaining amount
function remainingBalance() {
    const totalBalance = document.getElementById('total-balance');
    const savingAmount = document.getElementById('save-amount');
    const remainingBalance = totalBalance.innerText - savingAmount.innerText;
    const totalRemaining = document.getElementById('value');


    if (remainingBalance > 0) {
        totalRemaining.innerText = remainingBalance;
        return remainingBalance;
    }






}
//save click button functionalities
document.getElementById('save-button').addEventListener('click', function() {

    savingAmount();
    remainingBalance();

});