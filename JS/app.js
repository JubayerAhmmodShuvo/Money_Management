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

function expenses() {
    const foodInput = document.getElementById('food-input');
    const foodCost = foodInput.value;
    const restInput = document.getElementById('rest-input');
    const restCost = restInput.value;
    const clothInput = document.getElementById('cloth-input');
    const clothCost = clothInput.value;
    const costOfFood = parseInt(foodCost);
    const costOfRest = parseInt(restCost);
    const costOfCloth = parseInt(clothCost);

    const totalExpenses = costOfFood + costOfRest + costOfCloth;


    if (costOfFood > 0 && costOfRest > 0 && costOfCloth > 0) {
        return totalExpenses;
    } else {
        alert('Please enter a valid number');
    }
    foodInput.value = '';
    restInput.value = '';
    clothInput.value = '';


}
document.getElementById('calculate-total').addEventListener('click', function() {
    expenses();

});