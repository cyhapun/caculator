function buttonHandler(btn) {
    const pressedValue = btn.innerText;
    const resultInput = document.getElementById('resultInput');
    
    if (isNaN(pressedValue)) {
        if (pressedValue == 'C') {
            resultInput.value = "";
            return;
        }
        if (pressedValue == '=') {
            if (resultInput.value.length == 0) {
                return;
            }
            resultInput.value = eval(resultInput.value);
            return;
        }
    }
    if (isNaN(resultInput.value[resultInput.value.length - 1]) && isNaN(pressedValue)) {
        return;
    }
    if (resultInput.value.length == 1 && resultInput.value[0] == 0) {
        resultInput.value = "";
    }
    resultInput.value += pressedValue;
}