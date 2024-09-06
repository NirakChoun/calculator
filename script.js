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
            return result;
        case "-":
            result = subtract(firstNum, secondNum);
            return result;
        case "*":
            result = multiply(firstNum, secondNum);
            return result;
        case "/":
            result = divide(firstNum, secondNum);
            return result;
    }
}
