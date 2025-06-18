function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 == 0) {
    alert("To infinity!");
  }
  return number1 / number2;
}

function deleteLastInput() {
  resetAfterSolution();
  inputs.pop();
  display.textContent = inputs.join("");
}

function resetAll() {
  inputs = [];
  display.textContent = "";
}

function changeSign(array) {
  resetAfterSolution();
  let needSignChanged = array.slice(indexOfLastOperator(array) + 1);
  array.splice(indexOfLastOperator(array) + 1, 100);
  if (needSignChanged[0] == "-") {
    needSignChanged.shift();
    for (let i = 0; i < needSignChanged.length; i++) {
      array.push(needSignChanged[i]);
    }
  } else {
    needSignChanged.unshift("-");
    for (let i = 0; i < needSignChanged.length; i++) {
      array.push(needSignChanged[i]);
    }
  }
  display.textContent = array.join("");
}

function indexOfLastOperator(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (
      (operators.includes(array[i]) && operators.includes(array[i - 1])) ||
      (operators.includes(array[i]) && i - 1 < 0)
    ) {
      return i - 1;
    } else if (operators.includes(array[i])) {
      return i;
    }
  }
}

function checkForDot(array) {
  let dotPresent = false;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] == "." || operators.includes(array[array.length - 1])) {
      dotPresent = true;
    } else if (operators.includes(array[i]) || i == 0) {
      return dotPresent;
    }
  }
}

function squareLastInput(array) {
  let toSquare = array.slice(indexOfLastOperator(array) + 1);
  toSquare = toSquare.join("");
  toSquare = toSquare * toSquare;
  toSquare = Math.round(toSquare * 100) / 100;
  array.splice(indexOfLastOperator(array) + 1, 100);
  array.push(toSquare);
  display.textContent = array.join("");
}

function resetAfterSolution() {
  if (inputs[0] == solution) {
    resetAll();
    solution = 10;
  }
}

function buttonClickDot(dot) {
  resetAfterSolution();
  if (checkForDot(inputs) == false) {
    inputs.push(dot);
    display.textContent = inputs.join("");
  }
}

function buttonClickInput(number) {
  resetAfterSolution();
  if (
    (inputs[inputs.length - 1] == 0 &&
      number == 0 &&
      operators.includes(inputs[inputs.length - 2])) ||
    (inputs[inputs.length - 1] == 0 && number == 0 && inputs.length == 1)
  ) {
  } else if (
    (inputs[inputs.length - 1] == 0 &&
      operators.includes(inputs[inputs.length - 2])) ||
    (inputs[inputs.length - 1] == 0 && inputs.length == 1)
  ) {
    inputs.splice(-1, 1);
    inputs.push(number);
    display.textContent = inputs.join("");
  } else {
    inputs.push(number);
    display.textContent = inputs.join("");
    console.log(inputs);
  }
}

function buttonClickOperator(sign) {
  resetAfterSolution();
  if (operators.includes(inputs[inputs.length - 1]) || inputs.length == 0) {
  } else {
    inputs.push(sign);
    console.log(inputs);
    display.textContent = inputs.join("");
  }
}

function combineNumbers() {
  let backup;
  let operator;
  let lastOperator = inputs.length;
  for (let i = inputs.length - 1; i >= 0; i--) {
    if (operators.includes(inputs[i - 1]) && operators.includes(inputs[i])) {
      operator = i;
      backup = inputs.slice(operator, lastOperator).join("");
      inputs.splice(operator, lastOperator - operator, backup);
      i--;
      lastOperator = i;
    } else if (i == 0) {
      backup = inputs.slice(i, lastOperator).join("");
      inputs.splice(i, lastOperator, backup);
    } else if (operators.includes(inputs[i])) {
      operator = i + 1;
      backup = inputs.slice(operator, lastOperator).join("");
      inputs.splice(operator, lastOperator - operator, backup);
      lastOperator = i;
    }
  }
  console.log(inputs);
}

function buttonClickEqual() {
  if (inputs.length == 0) {
  } else {
    combineNumbers();
    for (let j = 0; j < inputs.length; j++) {
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] == "*") {
          let number1 = Number(inputs[i - 1]);
          let number2 = Number(inputs[i + 1]);
          let solution = multiply(number1, number2);
          inputs.splice(i - 1, 3, solution);
        } else if (inputs[i] == "/") {
          let number1 = Number(inputs[i - 1]);
          let number2 = Number(inputs[i + 1]);
          let solution = divide(number1, number2);
          inputs.splice(i - 1, 3, solution);
        }
      }
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] == "+") {
          let number1 = Number(inputs[i - 1]);
          let number2 = Number(inputs[i + 1]);
          let solution = add(number1, number2);
          inputs.splice(i - 1, 3, solution);
        } else if (inputs[i] == "-") {
          let number1 = Number(inputs[i - 1]);
          let number2 = Number(inputs[i + 1]);
          let solution = subtract(number1, number2);
          inputs.splice(i - 1, 3, solution);
        }
      }
    }
    solution = inputs[0];
    solution = Math.round(solution * 100) / 100;
    display.textContent = solution;
  }
}

let solution = 10;
let operators = ["+", "-", "*", "/"];
let inputs = [];



const display = document.querySelector(".display");

const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", function () {
  buttonClickInput(0);
});

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function () {
  buttonClickInput(1);
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
  buttonClickInput(2);
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function () {
  buttonClickInput(3);
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function () {
  buttonClickInput(4);
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function () {
  buttonClickInput(5);
});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function () {
  buttonClickInput(6);
});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", function () {
  buttonClickInput(7);
});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", function () {
  buttonClickInput(8);
});

const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", function () {
  buttonClickInput(9);
});

const btnDot = document.querySelector("#btnDot");
btnDot.addEventListener("click", function () {
  buttonClickDot(".");
});

const btnPlus = document.querySelector("#btnPlus");
btnPlus.addEventListener("click", function () {
  buttonClickOperator("+");
});

const btnMinus = document.querySelector("#btnMinus");
btnMinus.addEventListener("click", function () {
  buttonClickOperator("-");
});

const btnSlash = document.querySelector("#btnSlash");
btnSlash.addEventListener("click", function () {
  buttonClickOperator("/");
});

const btnAsterisk = document.querySelector("#btnAsterisk");
btnAsterisk.addEventListener("click", function () {
  buttonClickOperator("*");
});

const btnClear = document.querySelector("#btnClear");
btnClear.addEventListener("click", function () {
  resetAll();
});

const btnDelete = document.querySelector("#btnDelete");
btnDelete.addEventListener("click", function () {
  deleteLastInput();
});

const btnSquared = document.querySelector("#btnSquared");
btnSquared.addEventListener("click", function () {
  squareLastInput(inputs);
});

const btnSign = document.querySelector("#btnSign");
btnSign.addEventListener("click", function () {
  changeSign(inputs);
});

const btnEqual = document.querySelector("#btnEqual");
btnEqual.addEventListener("click", function () {
  buttonClickEqual();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "0") {
    buttonClickInput(0);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    buttonClickInput(1);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "2") {
    buttonClickInput(2);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "3") {
    buttonClickInput(3);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "4") {
    buttonClickInput(4);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "5") {
    buttonClickInput(5);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "6") {
    buttonClickInput(6);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "7") {
    buttonClickInput(7);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "8") {
    buttonClickInput(8);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "9") {
    buttonClickInput(9);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === ".") {
    buttonClickDot(".");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "*") {
    buttonClickOperator("*");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "+") {
    buttonClickInput("+");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "-") {
    buttonClickInput("-");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/") {
    buttonClickInput("/");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    deleteLastInput();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    buttonClickEqual();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    resetAll();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "²") {
    squareLastInput(inputs);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    changeSign(inputs);
  }
});