function income() {
    const totalIncome = document.getElementById('total-income').value;
    const total = parseInt(totalIncome);
    if (total > 0) {
        return total;
    } else {
        alert('Please enter a valid number');
    }


}

function expenses() {

}
document.getElementById('calculate-total').addEventListener('click', function() {
    income();
});