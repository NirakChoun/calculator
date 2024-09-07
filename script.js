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

function displayNumber() {
    const buttons = document.querySelectorAll(".row");
    console.log(buttons[0].children.length);

    const display = document.querySelector(".display");
    let defaultNumber = 0;
    display.textContent = defaultNumber;
    let displayNumber = "";
    let number = 0;
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i].children;
        for (let j = 0; j < button.length; j++) {
            button[j].addEventListener("click", (e) => {
                let clickBtn = e.target.value;
                if (clickBtn >= 0 && clickBtn <= 9) {
                    displayNumber += clickBtn;
                    display.textContent = displayNumber;
                    number = Number(displayNumber);
                    console.log(number);
                }
            });
        }
    }
}

displayNumber();


