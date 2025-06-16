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
  return number1 / number2;
}

function squared(number) {
  return number * number;
}

function buttonClickNumbers(number) {
  if (operator == "") {
    number1 = number1 + number;
  } else {
    number2 = number2 + number;
  }
  display.textContent = number1 + operator + number2;
}

let number1 = "";
let operator = "";
let number2 = "";

const display = document.querySelector(".display");

const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", function () {
  buttonClickNumbers(0);
});

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function () {
  buttonClickNumbers(1);
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
  buttonClickNumbers(2);
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function () {
  buttonClickNumbers(3);
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function () {
  buttonClickNumbers(4);
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function () {
  buttonClickNumbers(5);
});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function () {
  buttonClickNumbers(6);
});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", function () {
  buttonClickNumbers(7);
});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", function () {
  buttonClickNumbers(8);
});

const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", function () {
  buttonClickNumbers(9);
});