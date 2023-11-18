const display = document.querySelector('.display');

// Function to clear the display
const clearDisplay = () => {
  display.value = '';
}

// Function to append an operator to the display
const appendOperator = (operator) => {
  if (operator == "*") operator = "×";
  let displayValue = display.value;
  if (!isNaN(displayValue[displayValue.length - 1]) || operator === '-') {
    displayValue += operator;
    display.value = displayValue;
  }
}

// Function to append a number to the display
const appendNumber = (number) => {
  let displayValue = display.value;
  if (displayValue === '0' || displayValue === 'Error') displayValue = number;
  else displayValue += number;
  display.value = displayValue;
}

// Function to append a dot to the display
const appendDot = () => {
  let displayValue = display.value;
  if (!displayValue.includes('.')) {
    displayValue += '.';
    display.value = displayValue;
  }
}

// Function to calculate the expression
const calculate = () => {
  const expression = display.value.replaceAll("×", "*");
  if (display.value != "") {
  try {
      let result = eval(expression);
      display.value = result;
    } catch {
      display.value = "Error";
    }
  } else {
    display.value = 0
  }
}
