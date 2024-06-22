let lastDisplayValue;
let operator;
let displayValue = '0';
let newNumber;

function add(displayValue, lastDisplayValue) {
    return Number(displayValue) + Number(lastDisplayValue);
}

function subtract(displayValue, lastDisplayValue) {
    return Number(lastDisplayValue) - Number(displayValue);
}

function multiply(displayValue, lastDisplayValue) {
    return Number(displayValue) * Number(lastDisplayValue);
}

function divide(lastDisplayValue, displayValue) {
    return Number(lastDisplayValue) / Number(displayValue);
}

function operate(displayValue, lastDisplayValue, operator) {
    if (operator === '/') {
        return divide(lastDisplayValue, displayValue);
    } else if (operator === '*') {
        return multiply(displayValue, lastDisplayValue);
    } else if (operator === '+') {
        return add(displayValue, lastDisplayValue);
    } else if (operator === '-') {
        return subtract(displayValue, lastDisplayValue);
    }
}

const container = document.querySelector('#container');
let calculatorDisplay = document.createElement('div');
calculatorDisplay.className = 'display';
calculatorDisplay.textContent = displayValue;

container.appendChild(calculatorDisplay);

function makeCalculatorButtons() {
    for (let i = 0; i < 5; i++) {
        if (i === 0) {

            const calculatorRowOne = document.createElement('div');
            calculatorRowOne.className = 'rowOne';
            
            const clear = document.createElement('button');
            clear.className = 'clear';
            clear.textContent = 'AC';
            clear.addEventListener('click', () => {
                displayValue = '0';
                calculatorDisplay.textContent = displayValue;
                lastDisplayValue = null;
            });
            
            const changeSign = document.createElement('button');
            changeSign.className = 'changeSign';
            changeSign.textContent = '+/-';
            
            const percent = document.createElement('button');
            percent.className = 'percent';
            percent.textContent = '%';
            
            const divideButton = document.createElement('button');
            divideButton.className = 'divideButton';
            divideButton.textContent = '/';
            divideButton.addEventListener('click', () => {
                runButton();
                operator = '/';
            });
            
            container.appendChild(calculatorRowOne);
            calculatorRowOne.appendChild(clear);
            calculatorRowOne.appendChild(changeSign);
            calculatorRowOne.appendChild(percent);
            calculatorRowOne.appendChild(divideButton);

        } else if (i === 1) {
            
            const calculatorRowTwo = document.createElement('div');
            calculatorRowTwo.className = 'rowTwo';

            const seven = document.createElement('button');
            seven.className = 'seven';
            seven.textContent = '7';
            seven.addEventListener('click', () => {
                displayForNumberPress(7);
                newNumber = 'no';
            });



            const eight = document.createElement('button');
            eight.className = 'eight';
            eight.textContent = '8';
            eight.addEventListener('click', () => {
                displayForNumberPress(8);
                newNumber = 'no';
            });

            const nine = document.createElement('button');
            nine.className = 'nine';
            nine.textContent = '9';
            nine.addEventListener('click', () => {
                displayForNumberPress(9);
                newNumber = 'no';
            });

            const multiplyButton = document.createElement('button');
            multiplyButton.className = 'multiplyButton';
            multiplyButton.textContent = '*';
            multiplyButton.addEventListener('click', () => {
                runButton();
                operator = '*';
            });

            container.appendChild(calculatorRowTwo);
            calculatorRowTwo.appendChild(seven);
            calculatorRowTwo.appendChild(eight);
            calculatorRowTwo.appendChild(nine);
            calculatorRowTwo.appendChild(multiplyButton);

        } else if (i === 2) {

            const calculatorRowThree = document.createElement('div');
            calculatorRowThree.className = 'rowThree';

            const four = document.createElement('button');
            four.className = 'four';
            four.textContent = '4';
            four.addEventListener('click', () => {
                displayForNumberPress(4);
                newNumber = 'no';
            });

            const five = document.createElement('button');
            five.className = 'five';
            five.textContent = '5';
            five.addEventListener('click', () => {
                displayForNumberPress(5);
                newNumber = 'no';
            });

            const six = document.createElement('button');
            six.className = 'six';
            six.textContent = '6';
            six.addEventListener('click', () => {
                displayForNumberPress(6);
                newNumber = 'no';
            });

            const subtractButton = document.createElement('button');
            subtractButton.className = 'subtractButton';
            subtractButton.textContent = '-';
            subtractButton.addEventListener('click', () => {
                runButton();
                operator = '-';
            });

            container.appendChild(calculatorRowThree);
            calculatorRowThree.appendChild(four);
            calculatorRowThree.appendChild(five);
            calculatorRowThree.appendChild(six);
            calculatorRowThree.appendChild(subtractButton);
        
        } else if (i === 3) {

            const calculatorRowFour = document.createElement('div');
            calculatorRowFour.className = 'rowFour';

            const one = document.createElement('button');
            one.className = 'one';
            one.textContent = '1';
            one.addEventListener('click', () => {
                displayForNumberPress(1);
                newNumber = 'no';
            });

            const two = document.createElement('button');
            two.className = 'two';
            two.textContent = '2';
            two.addEventListener('click', () => {
                displayForNumberPress(2);
                newNumber = 'no';
            });

            const three = document.createElement('button');
            three.className = 'three';
            three.textContent = '3';
            three.addEventListener('click', () => {
                displayForNumberPress(3);
                newNumber = 'no';
            });

            const addButton = document.createElement('button');
            addButton.className = 'addButton';
            addButton.textContent = '+';
            addButton.addEventListener('click', () => {
                runButton();
                operator = '+';
            });

            container.appendChild(calculatorRowFour);
            calculatorRowFour.appendChild(one);
            calculatorRowFour.appendChild(two);
            calculatorRowFour.appendChild(three);
            calculatorRowFour.appendChild(addButton);
        
        } else if (i === 4) {

            const calculatorBottomRow = document.createElement('div');
            calculatorBottomRow.className = 'bottomRow';

            const zero = document.createElement('button');
            zero.className = 'zero';
            zero.textContent = '0';
            zero.addEventListener('click', () => {
                displayForNumberPress(0);
                newNumber = 'no';
            });

            const decimal = document.createElement('button');
            decimal.className = 'decimal';
            decimal.textContent = '.';

            const equals = document.createElement('button');
            equals.className = 'equals';
            equals.textContent = '=';
            equals.addEventListener('click', () => runButton());

            container.appendChild(calculatorBottomRow);
            calculatorBottomRow.appendChild(zero);
            calculatorBottomRow.appendChild(decimal);
            calculatorBottomRow.appendChild(equals);
        }      
    }
}

makeCalculatorButtons();

function displayForNumberPress(input) {
    if (displayValue === '0' || newNumber === 'yes') {
        displayValue = `${input}`
        calculatorDisplay.textContent = displayValue;
    } else {
        displayValue = displayValue + `${input}`;
        calculatorDisplay.textContent = displayValue;
    }
}

function display(input) {
    if (displayValue === '0' || newNumber === 'yes') {
        displayValue = `${input}`
        calculatorDisplay.textContent = displayValue;
    } else {
        calculatorDisplay.textContent = displayValue;
    }
}

document.addEventListener('keydown', (event) => display(event.key));

function runButton() {
    if (!lastDisplayValue) {
        lastDisplayValue = displayValue;
        console.log('first test');
    } else {
        displayValue = operate(displayValue, lastDisplayValue, operator);
        display(displayValue);
        lastDisplayValue = displayValue;
    }
    newNumber = 'yes';
}