const prompt = require("prompt-sync")();

function calc() {
  let num1 = parseFloat(prompt("Enter the first number: "));
  if (isNaN(num1)) {
    console.log("Invalid input. Please enter a valid number.");
    return calc();
  }

  let operator = prompt("Enter the operation (+, -, *, /): ");
  if (!["+", "-", "*", "/"].includes(operator)) {
    console.log("Invalid operator. Please use +, -, *, or /.");
    return calc();
  }

  let num2 = parseFloat(prompt("Enter the second number: "));
  if (isNaN(num2)) {
    console.log("Invalid input. Please enter a valid number.");
    return calc();
  }

  if (operator === "/" && num2 === 0) {
    console.log("Error: Division by zero is not allowed.");
    return calc();
  }

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
      result = num1 / num2;
      break;
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}

calc();
