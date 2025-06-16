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

function squared(number) {
  return number * number;
}

function buttonClickInput(number) {
  input = input + number;
  numbers = numbers + number;
  display.textContent = display.textContent + input;
  input = "";
}

function buttonClickOperator(sign) {

  if (numbers == "") {
  } else {
    inputs.push(numbers);
    if (
      inputs[inputs.length - 1] == "+" ||
      inputs[inputs.length - 1] == "-" ||
      inputs[inputs.length - 1] == "*" ||
      inputs[inputs.length - 1] == "/"
    ) {
    } else {
      inputs.push(sign);
      console.log(inputs);
      numbers = "";
      operator = sign;
      display.textContent = display.textContent + operator;
      operator = "";
    }
  }
}

let input = "";
let operator = "";
let numbers = "";
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
