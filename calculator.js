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
    alert("Not gonna happen!");
  }
  return number1 / number2;
}

function deleteLastInput() {
  inputs.pop();
  display.textContent = inputs.join("");
}

function resetAll() {
  inputs = [];
  display.textContent = "";
}

function changeSign(array) {
  let needSignChanged = array.slice(IndexOfLastOperator(array)+1);
  array.splice(IndexOfLastOperator(array)+1, 100);
  if (needSignChanged[0] == "-") {
    needSignChanged.shift();
    for (let i = 0; i < needSignChanged.length; i++) {
      array.push(needSignChanged[i]);
    }
  }
  else {
    needSignChanged.unshift("-");
    for (let i = 0; i < needSignChanged.length; i++) {
      array.push(needSignChanged[i]);
    }
  }
  display.textContent = array.join("");
}

function IndexOfLastOperator(array) {
  for (let i = array.length-1; i >= 0; i--) {
    if (operators.includes(array[i]) && operators.includes(array[i-1])) {
      return i-1;
    }
    else if (operators.includes(array[i])) {
      return i;
    }
  }
}

function squareLastInput(array) {
  let toSquareArray = array.slice(IndexOfLastOperator(array)+1);
  toSquareArray = toSquareArray.join("");
  toSquareArray = toSquareArray * toSquareArray;
  array.splice(IndexOfLastOperator(array)+1, 100);
  array.push(toSquareArray);
  display.textContent = array.join("");
}

function buttonClickInput(number) {
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
    if (number == ".") {
      inputs.push(number);
      display.textContent = inputs.join("");
    } else {
      inputs.splice(-1, 1);
      inputs.push(number);
      display.textContent = inputs.join("");
    }
  } else {
    inputs.push(number);
    display.textContent = inputs.join("");
    console.log(inputs);
  }
}

function buttonClickOperator(sign) {
  if (operators.includes(inputs[inputs.length - 1]) || inputs.length == 0) {
  } else {
    inputs.push(sign);
    console.log(inputs);
    display.textContent = inputs.join("");
  }
}

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
  buttonClickInput(".");
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