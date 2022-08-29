function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const stringPin = pin + '';
    if (stringPin.length == 4) {
        return pin
    }
    else {

        return getPin();


    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}


document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const numberInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            numberInput.value = '';
        }
    }
    else {
        const previousNumber = numberInput.value;
        const newNumber = previousNumber + number;
        numberInput.value = newNumber;
    }
})



function verifyPin() {
    const pin = document.getElementById('display-pin');
    const pinNumber = pin.value;
    const typedNumbers = document.getElementById('typed-numbers');
    const typedNumbersValue = typedNumbers.value;
    const showSuccess = document.getElementById('notify-success');
    const showError = document.getElementById('notify-fail');


    if (pinNumber == typedNumbersValue) {
        showSuccess.style.display = 'block'
        showError.style.display = 'none';
        typedNumbers.value = '';

    }
    else {
        showSuccess.style.display = 'none';
        showError.style.display = 'block';
        typedNumbers.value = '';
    }

}
