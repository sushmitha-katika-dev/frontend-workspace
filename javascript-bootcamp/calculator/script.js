const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;
let shouldResetDisplay = false;

buttons.addEventListener("click", handleButtonClick);

function handleButtonClick(event) {

    if (!event.target.classList.contains("btn")) return;

    const value = event.target.textContent;

    switch (value) {

        case "C":
            clearDisplay();
            break;

        case "←":
            deleteLast();
            break;

        case "+":
        case "-":
        case "*":
        case "/":
            chooseOperator(value);
            break;

        case "=":
            calculate();
            break;

        default:
            appendNumber(value);
    }
}

function appendNumber(value) {

    if (shouldResetDisplay) {

        clearDisplay();
        shouldResetDisplay = false;

    }

    if (!isSecondNumber) {

        firstNumber += value;

    } else {

        secondNumber += value;

    }

    updateDisplay();
}

function chooseOperator(value) {

    if (firstNumber === "") return;

    if (operator !== "" && secondNumber !== "") {

        calculate();

    }

    operator = value;
    isSecondNumber = true;

    updateDisplay();
}

function calculate() {

    if (firstNumber === "" || secondNumber === "") return;

    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    let result;

    switch (operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":

            if (num2 === 0) {

                display.value = "Error";
                shouldResetDisplay = true;
                return;

            }

            result = num1 / num2;
            break;

        default:
            return;
    }

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    isSecondNumber = false;

    shouldResetDisplay = true;

    updateDisplay();
}

function deleteLast() {

    if (!isSecondNumber) {

        firstNumber = firstNumber.slice(0, -1);

    } else {

        secondNumber = secondNumber.slice(0, -1);

    }

    updateDisplay();
}

function clearDisplay() {

    display.value = "";

    firstNumber = "";
    secondNumber = "";
    operator = "";
    isSecondNumber = false;
}

function updateDisplay() {

    if (!isSecondNumber) {

        display.value = firstNumber;

    } else {

        display.value = firstNumber + operator + secondNumber;

    }
}