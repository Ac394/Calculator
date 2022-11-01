const add = (a, b) => result = a + b;

const substract = (a, b) => result = a - b;

const multiply = (a, b) => result = a * b;

const divide = (a, b) => result = a / b;

const exponent = (a, b) => result = a ** b;

let fired_button = '';

let operator = '';

let newCalc = document.getElementById('newCalc');

let oldCalc = document.getElementById('oldCalc');

let a = 0;

let b = 0;

let result = 0;

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      add(a, b)
      break;
    case "-":
      substract(a, b)
      break;
    case "*":
      multiply(a, b)
      break;
    case "/":
      divide(a, b)
      break;
    case "**":
      exponent(a, b)
      break;
  }
}

function eval() {
  if (operator == '') return;
  oldCalc.innerText += `${newCalc.innerText}=`;
  operate(operator, a, b);
  b = Math.round((result + Number.EPSILON) * 100) / 100;
  newCalc.innerText = b;
  operator = '';
}

function clear() {
  a = 0;
  b = 0;
  result = 0;
  operator = '';
  newCalc.innerText = b;
  oldCalc.innerText = '';
}

function del() {
  if (newCalc.innerText.length == 1) {
    b = 0;
    newCalc.innerText = b;
  } else {
    newCalc.innerText = newCalc.innerText.slice(0, newCalc.innerText.length - 1);
    b = parseFloat(newCalc.innerText);
  }
}

function checkZero() {
  if (newCalc.innerText.includes('.')) return;
  return newCalc.innerText == 0 ? true : false;
}

function addition() {
  eval();
  operator = '+';    
  oldCalc.innerText = `${b}${operator}`;
  a = b;
  b = 0;
  newCalc.innerText = b;
}

function substraction() {
  eval();
  operator = '-';    
  oldCalc.innerText = `${b}${operator}`;
  a = b;
  b = 0;
  newCalc.innerText = b;
}

function multiplication() {
  eval();
  operator = '*';    
  oldCalc.innerText = `${b}×`;
  a = b;
  b = 0;
  newCalc.innerText = b;
}

function division() {
  eval();
  operator = '/';    
  oldCalc.innerText = `${b}÷`;
  a = b;
  b = 0;
  newCalc.innerText = b;
}

function exponentiation() { 
  eval();
  operator = '**';    
  oldCalc.innerText = `${b}^`;
  a = b;
  b = 0;
  newCalc.innerText = b;
}

function decimal() {
  if (newCalc.innerText.includes('.')) return;
  newCalc.innerText += '.';
}

function calculate() {
    if (!Number.isInteger(b) && b.toString().split('.')[1].length >= 2) return;
    if (checkZero() || newCalc.innerText == 'Infinity') {
      newCalc.innerText = fired_button;
      b = parseFloat(newCalc.innerText);
    } else {
      newCalc.innerText += fired_button;
      b = parseFloat(newCalc.innerText);
    }
}

function keyPress(key) {
  fired_button = key;
  calculate();
}

document.querySelectorAll('#number').forEach(button => {
  button.addEventListener('click', () => {    
    fired_button = button.value;
    calculate();
  });
});

document.getElementById('delete').addEventListener("click", del);

document.getElementById('add').addEventListener("click", addition);

document.getElementById('substract').addEventListener("click", substraction);

document.getElementById('eval').addEventListener("click", eval);

document.getElementById('clear').addEventListener("click", clear);

document.getElementById('multiply').addEventListener("click", multiplication);

document.getElementById('divide').addEventListener("click", division);

document.getElementById('exponent').addEventListener("click", exponentiation);

document.getElementById('decimal').addEventListener("click", decimal);

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented || event.repeat) {
    return;
  }
  switch (event.key) {
    case "0":
      keyPress(event.key);
      break;
    case "1":
      keyPress(event.key);
      break;
    case "2":
      keyPress(event.key);
      break;
    case "3":
      keyPress(event.key);
      break;
    case "4":
      keyPress(event.key);
      break;
    case "5":
      keyPress(event.key);
      break;
    case "6":
      keyPress(event.key);
      break;
    case "7":
      keyPress(event.key);
      break;
    case "8":
      keyPress(event.key);
      break;
    case "9":
      keyPress(event.key);
      break;
    case "Escape":
      clear();
      break;
    case "Backspace":
      del();
      break;
    case "/":
      division();
      break;
    case "*":
      multiplication();
      break;
    case "-":
      substraction();
      break;
    case "+":
      addition();
      break;
    case "Enter":
      eval();
      break;
    case ".":
      decimal();
      break;
    default:
      return;
  }
  event.preventDefault();
}, true);