
let recentInput;
let lastInput;
let operator;
let displayValue = '0';

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
    } else if (operator === '-') {
        subtract();
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
            seven.addEventListener('click', () => display(7));
            


            const eight = document.createElement('button');
            eight.className = 'eight';
            eight.textContent = '8';
            eight.addEventListener('click', () => display(8));

            const nine = document.createElement('button');
            nine.className = 'nine';
            nine.textContent = '9';
            nine.addEventListener('click', () => display(9));

            const multiplyButton = document.createElement('button');
            multiplyButton.className = 'multiplyButton';
            multiplyButton.textContent = '*';

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
            four.addEventListener('click', () => display(4));

            const five = document.createElement('button');
            five.className = 'five';
            five.textContent = '5';
            five.addEventListener('click', () => display(5));

            const six = document.createElement('button');
            six.className = 'six';
            six.textContent = '6';
            six.addEventListener('click', () => display(6));

            const subtractButton = document.createElement('button');
            subtractButton.className = 'subtractButton';
            subtractButton.textContent = '-';

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
            one.addEventListener('click', () => display(1));

            const two = document.createElement('button');
            two.className = 'two';
            two.textContent = '2';
            two.addEventListener('click', () => display(2));

            const three = document.createElement('button');
            three.className = 'three';
            three.textContent = '3';
            three.addEventListener('click', () => display(3));

            const addButton = document.createElement('button');
            addButton.className = 'addButton';
            addButton.textContent = '+';

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
            zero.addEventListener('click', () => display(0));

            const decimal = document.createElement('button');
            decimal.className = 'decimal';
            decimal.textContent = '.';

            const equals = document.createElement('button');
            equals.className = 'equals';
            equals.textContent = '=';

            container.appendChild(calculatorBottomRow);
            calculatorBottomRow.appendChild(zero);
            calculatorBottomRow.appendChild(decimal);
            calculatorBottomRow.appendChild(equals);
        }      
    }
}

makeCalculatorButtons();

function display(input) {
    if (displayValue === '0') {
        displayValue = `${input}`
        calculatorDisplay.textContent = displayValue;
    } else {
        displayValue = displayValue + `${input}`;
        calculatorDisplay.textContent = displayValue;
    }
}