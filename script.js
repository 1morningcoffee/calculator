
let recentInput;
let lastInput;
let operator;

function add(recentInput, lastInput) {
    return recentInput + lastInput;
}

function subtract(recentInput, lastInput) {
    return recentInput - lastInput;
}

function multiply(recentInput, lastInput) {
    return recentInput * lastInput;
}

function divide(recentInput, lastInput) {
    return recentInput / lastInput;
}

function operate(recentInput, lastInput, operator) {
    if (operator === '/') {
        divide();
    } else if (operator === '*') {
        multiply();
    } else if (operator === '+') {
        add();
    } else {
        subtract();
    }
}

const container = document.querySelector('#container');
const calculatorDisplay = document.createElement('div');
calculatorDisplay.className = 'display';

container.appendChild(calculatorDisplay);

function makeCalculatorButtons() {
    for (let i = 0; i < 5; i++) {
        if (i === 4) {
            const calculatorBottomRow = document.createElement('div');
            calculatorBottomRow.className = 'bottomRow';
            container.appendChild(calculatorBottomRow);
            const zeroKey = document.createElement('button');
            zeroKey.className = 'zero';
            const decimal = document.createElement('button');
            decimal.className = 'decimal';
            const equals = document.createElement('button');
            equals.className = 'equals';
            calculatorBottomRow.appendChild(zeroKey);
            calculatorBottomRow.appendChild(decimal);
            calculatorBottomRow.appendChild(equals);
        } else {
            const calculatorRow = document.createElement('div');
            calculatorRow.className = 'row';
            container.appendChild(calculatorRow);
        }        
    }
}


makeCalculatorButtons();