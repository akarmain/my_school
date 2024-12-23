let displayElement = document.getElementById("display");

function clearDisplay() {
    displayElement.textContent = "0";
}

function appendCharacter(char) {
    if (displayElement.textContent === "0") {
        displayElement.textContent = char;
    } else {
        displayElement.textContent += char;
    }
}

function backspace() {
    displayElement.textContent = displayElement.textContent.slice(0, -1) || "0";
}

function calculateResult() {
    try {
        const result = eval(displayElement.textContent.replace("×", "*").replace("÷", "/"));
        displayElement.textContent = result;
    } catch {
        displayElement.textContent = "Error";
    }
}

function clearDisplay() {
    displayElement.textContent = "0";
}

function appendCharacter(char) {
    if (displayElement.textContent === "0") {
        displayElement.textContent = char;
    } else {
        displayElement.textContent += char;
    }
}

function backspace() {
    displayElement.textContent = displayElement.textContent.slice(0, -1) || "0";
}

function calculateResult() {
    try {
        const result = eval(displayElement.textContent.replace("×", "*").replace("÷", "/"));
        displayElement.textContent = result;
    } catch {
        displayElement.textContent = "Error";
    }
}

function convertBase() {
    const inputNumber = document.getElementById("input-number").value;
    const fromBase = parseInt(document.getElementById("from-base").value, 10);
    const toBase = parseInt(document.getElementById("to-base").value, 10);
    const resultElement = document.getElementById("conversion-result");

    if (!inputNumber || isNaN(fromBase) || isNaN(toBase)) {
        resultElement.textContent = "Результат: Некорректный ввод";
        return;
    }

    try {
        const decimalValue = parseInt(inputNumber, fromBase);
        if (isNaN(decimalValue)) {
            throw new Error("Некорректное число для заданной системы счисления");
        }
        const convertedValue = decimalValue.toString(toBase).toUpperCase();
        resultElement.textContent = `Результат: ${convertedValue}`;
    } catch (error) {
        resultElement.textContent = `Результат: Ошибка - ${error.message}`;
    }
}


function calculateFactorial() {
    const inputElement = document.getElementById("factorial-input");
    const resultElement = document.getElementById("factorial-result");
    const inputValue = parseInt(inputElement.value, 10);
    if (isNaN(inputValue) || inputValue < 0 || inputValue > 21) {
        resultElement.textContent = "Ошибка: введите целое число от 0 до 21.";
        return;
    }
    const factorials = [];
    let currentFactorial = 1;
    for (let i = 0; i <= inputValue; i++) {
        if (i > 0) {
            currentFactorial *= i;
        }
        factorials.push(`${i}! = ${currentFactorial}`);
    }
    resultElement.innerHTML = `<ul>${factorials.map(f => `<li>${f}</li>`).join("")}</ul>`;
}
function calculateGamma(value) {
    return `Гамма-функция для ${value} не реализована.`;
}
