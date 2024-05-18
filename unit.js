function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('tempInput').value);
    const unit = document.getElementById('tempUnit').value;
    let result;

    switch (unit) {
        case 'celsius':
            result = `${inputTemp} Celsius = ${inputTemp * 9/5 + 32} Fahrenheit`;
            break;
        case 'fahrenheit':
            result = `${inputTemp} Fahrenheit = ${(inputTemp - 32) * 5/9} Celsius`;
            break;
        case 'kelvin':
            result = `${inputTemp} Kelvin = ${inputTemp - 273.15} Celsius`;
            break;
    }

    document.getElementById('tempResult').textContent = result;
}

function convertVolume() {
    const inputVolume = parseFloat(document.getElementById('volInput').value);
    const unit = document.getElementById('volUnit').value;
    let result;

    switch (unit) {
        case 'milliliter':
            result = `${inputVolume} Milliliter = ${inputVolume / 1000} Liter`;
            break;
        case 'liter':
            result = `${inputVolume} Liter = ${inputVolume * 1000} Milliliter`;
            break;
        case 'cubicMeter':
            result = `${inputVolume} Cubic Meter = ${inputVolume * 1000} Liter`;
            break;
    }

    document.getElementById('volResult').textContent = result;
}

function convertPressure() {
    const inputPressure = parseFloat(document.getElementById('presInput').value);
    const unit = document.getElementById('presUnit').value;
    let result;

    switch (unit) {
        case 'pascal':
            result = `${inputPressure} Pascal = ${inputPressure / 100000} Bar`;
            break;
        case 'bar':
            result = `${inputPressure} Bar = ${inputPressure * 100000} Pascal`;
            break;
        case 'atm':
            result = `${inputPressure} Atmosphere = ${inputPressure * 101325} Pascal`;
            break;
    }

    document.getElementById('presResult').textContent = result;
}
function goBack() {
    window.history.back(); // This will navigate to the previous page in history
}