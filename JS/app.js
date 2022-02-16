function income() {
    const totalInput = document.getElementById('total-income');
    const totalIncome = totalInput.value;
    const total = parseInt(totalIncome);
    if (total > 0) {


        return total;

    } else {
        alert('Please enter a valid number');
    }
    totalInput.value = '';



}

function cost() {
    const foodInput = document.getElementById('food-input');
    const foodCost = foodInput.value;
    const restInput = document.getElementById('rest-input');
    const restCost = restInput.value;
    const clothInput = document.getElementById('cloth-input');
    const clothCost = clothInput.value;
    const costOfFood = parseInt(foodCost);
    const costOfRest = parseInt(restCost);
    const costOfCloth = parseInt(clothCost);

    const totalCost = costOfFood + costOfRest + costOfCloth;


    if (costOfFood > 0 && costOfRest > 0 && costOfCloth > 0) {
        return totalCost;
    } else {
        alert('Please enter a valid number');
    }
    foodInput.value = '';
    restInput.value = '';
    clothInput.value = '';


}

function expense() {
    const expense = document.getElementById('total-expense');
    const totalExpense = expense.innerText;


    return expense.innerText = parseInt(totalExpense) + cost();

}

function balance() {
    const balance = document.getElementById('total-balance');
    const totalBalance = balance.innerText;
    const totalIncome = income();
    const totalExpense = cost();
    const total = totalIncome - totalExpense;


    return balance.innerText = parseInt(totalBalance) + total;
}





document.getElementById('calculate-total').addEventListener('click', function() {
    const expenceTotal = expense();
    const balanceTotal = balance();
    if (expenceTotal > 0 && balanceTotal > 0) {
        expenseTotal;
        balanceTotal;
    } else {
        alert('Please enter a valid amount');
    }


});