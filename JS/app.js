function income() {
    const totalInput = document.getElementById('total-income');
    const totalIncome = totalInput.value;
    const total = parseInt(totalIncome);
    if (total > 0) {

        return total;
    } else {

        alert('Please enter a valid Number');



    }
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
    }

}

function expense() {
    const expense = document.getElementById('total-expense');
    const totalExpense = expense.innerText;
    const total = parseInt(totalExpense) + cost();


    if (total > 0) {
        return expense.innerText = total;
    }


}

function balance() {
    const balance = document.getElementById('total-balance');
    const totalBalance = balance.innerText;
    const totalIncome = income();
    const totalExpense = cost();
    const total = totalIncome - totalExpense;


    if (total > 0) {
        return balance.innerText = parseInt(totalBalance) + total;
    }

}






document.getElementById('calculate-total').addEventListener('click', function() {

    if (cost() > income()) {
        alert('You are in debt');
    } else {
        expense();
        balance();
    }







});
//saving part

function saving() {
    const saveInput = document.getElementById('save-input');
    const inputValue = saveInput.value;
    const convertedValue = parseInt(inputValue) / 100;
    const total = convertedValue * income();
    return total;
}

function savingAmount() {
    const saveAmount = document.getElementById('save-amount');
    const previousAmount = saveAmount.innerText;
    const newAmount = parseInt(previousAmount) + saving();
    return saveAmount.innerText = newAmount;

}

/* function remaining() {
    const remaining = document.getElementById('remainig-value');
    const previousAmount = remaining.innerText;
    const newAmount = parseInt(previousAmount) + balance() - saving();
    remaining.innerText = newAmount;
    return newAmount;
} */
document.getElementById('save-button').addEventListener('click', function() {
    savingAmount();
    remaining();

});