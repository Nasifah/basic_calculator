alert(
  "Welcome to my Basic Calculator. Kindly click OK to perform an operation"
);
let operation = prompt(
  "Please enter the symbol of the operation you want to perform.\n" +
    "For example: " +
    "+, " +
    "-, " +
    "x, " +
    "or /"
);
let firstNumber = parseFloat(prompt("Please enter a number"));
let secondNumber = parseFloat(prompt("Please enter a second number"));
let result;

if (operation == "+") {
  result = firstNumber + secondNumber;
} else if (operation == "-") {
  result = firstNumber - secondNumber;
} else if (operation == "x") {
  result = firstNumber * secondNumber;
} else if (operation == "/") {
  result = firstNumber / secondNumber;
} else {
  result = "Invalid Operation";
}

alert(result);
alert(
  "Thank you for using my Basic Calculator.\n" +
    " Refresh your Browser to restart."
);
