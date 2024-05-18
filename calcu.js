function calculateWage() {
    const hoursWorked = parseFloat(document.getElementById('hours').value);
    const hourlyRate = parseFloat(document.getElementById('rate').value);
    const errorElement = document.getElementById('error');

    if (hourlyRate < 0) {
        errorElement.textContent = 'Hourly rate cannot be negative.';
        document.getElementById('totalWage').textContent = '';
        return;
    }

    if (hoursWorked < 0) {
        errorElement.textContent = 'Hours worked cannot be negative.';
        document.getElementById('totalWage').textContent = '';
        return;
    }

    errorElement.textContent = '';
    const totalWage = hoursWorked * hourlyRate;
    document.getElementById('totalWage').textContent = totalWage.toFixed(2);
}

function goBack() {
    window.history.back(); 
}
