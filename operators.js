//--------------------------------------------------------------------

/* We can write instructions called OPERATORS.
   These include math and string and logic operators. 
   Below are some examples of functions these operators
*/

let numbers = { numberA: 0, numberB: 0 }; // these are the 2 numbers we will enter each time
let output = document.getElementById("output"); // The output where you will see the result

// functin to check what numbers the user has entered
function checkNumbers() {
  numbers.numberA = parseInt(document.getElementById("numberA").value); // input A
  numbers.numberB = parseInt(document.getElementById("numberB").value); // input B
  return numbers;
}

// Addition Function
function add() {
  checkNumbers();
  let result = numbers.numberA + numbers.numberB;
  output.innerText = "The sum is " + result;
}

// Add your subtraction function here


// Multiplication Function
function multiply() {
  checkNumbers();
  let result = numbers.numberA * numbers.numberB;
  output.innerText = "The product is " + result;
}

// Multiplication Function
function divide() {
  checkNumbers();
  let result = numbers.numberA/numbers.numberB;
  output.innerText = "The quotient is " + result;
}