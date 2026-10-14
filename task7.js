"use strict";
const calculatorForm = document.querySelector("#calculator-form");
const calculationResult = document.querySelector("#calculation-result");
const calculationDetail = document.querySelector("#calculation-detail");
const calculatorStatus = document.querySelector("#calculator-status");
function showCalculationError(message) {
  calculationResult.textContent = "—";
  calculationDetail.textContent = message;
  calculatorStatus.textContent = message;
  calculatorStatus.classList.add("error");
}
calculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const first = Number(document.querySelector("#number-a").value);
  const second = Number(document.querySelector("#number-b").value);
  const operation = calculatorForm.querySelector('input[name="operation"]:checked').value;
  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    showCalculationError("Please enter two finite numbers.");
    return;
  }
  if (operation === "divide" && second === 0) {
    showCalculationError("Cannot divide by zero. Choose another second number.");
    return;
  }
  let result;
  let symbol;
  switch (operation) {
    case "add":
      result = first + second;
      symbol = "+";
      break;
    case "subtract":
      result = first - second;
      symbol = "−";
      break;
    case "multiply":
      result = first * second;
      symbol = "×";
      break;
    case "divide":
      result = first / second;
      symbol = "÷";
      break;
  }
  if (!Number.isFinite(result)) {
    showCalculationError("Result is outside the supported number range.");
    return;
  }
  const displayedResult = Number(result.toPrecision(12));
  calculationResult.textContent = String(displayedResult);
  calculationDetail.textContent =
    first + " " + symbol + " " + second + " = " + displayedResult;
  calculatorStatus.textContent =
    "Calculation complete. Results use up to 12 significant digits.";
  calculatorStatus.classList.remove("error");
});
calculatorForm.addEventListener("input", () => {
  calculationResult.textContent = "—";
  calculationDetail.textContent = "Inputs changed. Calculate to see the new result.";
  calculatorStatus.textContent = "Ready to calculate.";
  calculatorStatus.classList.remove("error");
});
calculatorForm.addEventListener("reset", () => {
  calculationResult.textContent = "—";
  calculationDetail.textContent = "Your result will appear here.";
  calculatorStatus.textContent = "Ready for your numbers.";
  calculatorStatus.classList.remove("error");
});
