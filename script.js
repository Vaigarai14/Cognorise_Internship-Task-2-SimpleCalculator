// function for light mode and color difference

const githubcolor = document.getElementById("github");
const calculator = document.getElementById("calculator");
const inputfield = document.getElementById("displaynum");

const lightmode = () => {
    calculator.classList.toggle("bgcolor");
    githubcolor.classList.toggle("iconcolor");
};

// function getNumber(num) {
//   inputfield.value += num;
//   console.log(num);
// }

// function getOperator(operator) {
//   if (operator === ".") {
//     if (!inputfield.value.includes(".")) {
//       inputfield.value += operator;
//     } else {
//       inputfield.value += " " + operator + " ";
//     }
//   }
//   console.log(operator);
// }

// function Calculate() {
//   const value = inputfield.value;
//   a = value.split(" ");
//   console.log(a);
// }

// function clearitem() {
//   inputfield.value = "";
// }

// function arithmetic() {
//   numberbtn.forEach((element) => {
//     element.addEventListener("click", (event) => {
//       if (event.target.textContent != "=") {
//         inputfield.style.textAlign = "right";
//         inputfield.value += event.target.textContent;
//         const operands = inputfield.value.split(/[\+\-\x\/]/);
//         const operators = inputfield.value.match(/[\+\-\x\/]/);
//         sum = 0;
//         for (var i = 0; i < operands.length; i++) {
//           let first = operands[i];
//           if (operators) {
//             console.log();
//             sum = parseFloat(first) + parseFloat(sum);
//             console.log(sum);
//             inputfield.value = sum;
//           }
//         }
//       }
//     });
//   });
// }

// arithmetic();

function getNumber(num) {
    inputfield.value += num;
}

function getOperator(operator) {
    if (operator === ".") {
        // Check if decimal point already exists
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