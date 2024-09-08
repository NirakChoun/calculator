function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNum, secondNum, operator) {
    let result;
    switch(operator) {
        case "+":
            result = add(firstNum, secondNum);
            break;
        case "-":
            result = subtract(firstNum, secondNum);
            break;
        case "*":
            result = multiply(firstNum, secondNum);
            break;
        case "/":
            result = divide(firstNum, secondNum);
            break;
    }
    return result;
}

function displayNumber(element, content) {
    element.textContent = content;
}

function resetBtn() {
    const buttons = document.querySelectorAll(".row");
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i].children;
        for (let j = 0; j < button.length; j++) {
            button[j].style.opacity = 1;
        }
    }
}

function resetCalculator() {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    displayFirstNumber = "";
    displaySecondNumber = "";
    onFirstNumber = true;
    displayNumber(display, firstNumber);
    resetBtn();
}

const buttons = document.querySelectorAll(".row");
const display = document.querySelector(".display");
let defaultNumber = 0;
displayNumber(display, defaultNumber);
let displayFirstNumber = "";
let firstNumber = 0;
let operator = "";
let anotherOperator = "";
let secondNumber = 0;
let displaySecondNumber = "";
let onFirstNumber = true;

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i].children;
    for (let j = 0; j < button.length; j++) {
        button[j].addEventListener("click", (e) => {
            let clickBtn = e.target.value;
            if (clickBtn >= 0 && clickBtn <= 9 && onFirstNumber) {
                displayFirstNumber += clickBtn;
                displayNumber(display, displayFirstNumber);
                firstNumber = Number(displayFirstNumber);
                console.log(firstNumber);
            }
            
            else if (clickBtn === "+" || clickBtn === "-" || clickBtn === "*" || clickBtn === "/") {
                if (operator === "") {
                    resetBtn();
                    e.target.style.opacity = 0.8;
                    operator = clickBtn;
                    console.log(operator);
                    onFirstNumber = false;
                } else {
                    resetBtn();
                    anotherOperator = clickBtn;
                    e.target.style.opacity = 0.8;
                    console.log(`Another Operator: ${anotherOperator}`);
                    let result = operate(firstNumber, secondNumber, operator);
                    displayNumber(display, result);
                    console.log(result);

                    // Reset Part
                    firstNumber = result;
                    displaySecondNumber = "";
                    secondNumber = 0;
                    onFirstNumber = false;
                    operator = anotherOperator;
                }   
                
            }

            else if ((clickBtn >= 0 && clickBtn <= 9) && !onFirstNumber) {
                displaySecondNumber += clickBtn;
                displayNumber(display, displaySecondNumber);
                secondNumber = Number(displaySecondNumber);
                console.log(secondNumber);
            }

            else if (clickBtn === "=") {
                if (firstNumber === 0 && secondNumber === 0 && operator === "") {
                    displayNumber(display, defaultNumber);
                } else {
                    console.log(`First Number: ${firstNumber}`);
                    console.log(`Second Number: ${secondNumber}`);
                    let result = operate(firstNumber, secondNumber, operator);
                    if (result === Infinity) {
                        displayNumber(display, "ERROR404");
                    } else {
                        displayNumber(display, result);
                        console.log(result);
                    }
                    
                    if (firstNumber !== 0) {
                        firstNumber = result;
                        displaySecondNumber = "";
                        secondNumber = 0;
                        onFirstNumber = false;
                        resetBtn();
                    } else {
                        firstNumber = 0;
                        secondNumber = 0;
                        displayFirstNumber = "";
                        displaySecondNumber = "";
                        operator = "";
                        onFirstNumber = true;
                        resetBtn();
                    }
                }
            }

            else if (clickBtn === "clear") {
                resetCalculator();
            }

        });
    }
}
