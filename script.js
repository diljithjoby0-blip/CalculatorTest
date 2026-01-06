let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const resultDisplay = document.getElementById('result');

function appendNumber(number) {
    if (resultDisplay.value === '0' || shouldResetScreen) {
        resetScreen();
    }
    resultDisplay.value += number;
}

function resetScreen() {
    resultDisplay.value = '';
    shouldResetScreen = false;
}

function clearResult() {
    resultDisplay.value = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

function setOperator(operator) {
    if (currentOperation !== null) {
        calculate();
    }
    firstOperand = resultDisplay.value;
    currentOperation = operator;
    shouldResetScreen = true;
}

function calculate() {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === '/' && resultDisplay.value === '0') {
        alert("Cannot divide by zero");
        clearResult();
        return;
    }
    secondOperand = resultDisplay.value;
    resultDisplay.value = roundResult(operate(currentOperation, firstOperand, secondOperand));
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) return null;
            else return a / b;
    }
}
