// function for light mode and color difference

const githubcolor = document.getElementById("github");
const calculator = document.getElementById("calculator");
const inputfield = document.getElementById("displaynum");

inputfield.value = 0

const lightmode = () => {
    calculator.classList.toggle("bgcolor");
    githubcolor.classList.toggle("iconcolor");
};

function getNumber(num) {
    inputfield.value += num;
}

function getOperator(operator) {
    if (operator === ".") {
        if (!inputfield.value.includes(".")) {
            inputfield.value += operator;
        }
    } else {
        inputfield.value += " " + operator + " ";
    }
}

function clearitem() {
    inputfield.value = "";
}

function Calculate() {
    const expression = inputfield.value;
    const elements = expression.split(" ");
    console.log(elements);

    let result = parseFloat(elements[0]);
    for (let i = 1; i < elements.length; i += 2) {
        if (elements[i + 1] === "" || elements[i].includes("Error")) {
            return inputfield.value = "Error"
        }
        const operator = elements[i];
        const operand = parseFloat(elements[i + 1]);

        switch (operator) {
            case "+":
                result += operand;
                break;
            case "-":
                result -= operand;
                break;
            case "x":
                result *= operand;
                break;
            case "/":
                result /= operand;
                break;
            case "%":
                result %= operand;
                break;
        }
    }

    inputfield.value = result;
}

function deleteitem() {
    inputfield.value = inputfield.value.slice(0, -1);
}