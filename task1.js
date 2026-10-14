"use strict";
const labName = "TechLab";
const firstNumber = 12;
const secondNumber = 4;
const isLabOpen = true;
function runOperations() {
  const welcome = "Welcome to " + labName + ", Yerasyl Dauyl!";
  const results = [
    "labName: " + labName + " (" + typeof labName + ")",
    "firstNumber: " + firstNumber + " (" + typeof firstNumber + ")",
    "isLabOpen: " + isLabOpen + " (" + typeof isLabOpen + ")",
    "12 + 4 = " + (firstNumber + secondNumber),
    "12 - 4 = " + (firstNumber - secondNumber),
    "12 × 4 = " + firstNumber * secondNumber,
    "12 ÷ 4 = " + firstNumber / secondNumber,
    "12 % 4 = " + (firstNumber % secondNumber),
    welcome,
  ];
  results.forEach((result) => console.log(result));
  document.querySelector("#variables-output").textContent = results
    .map((result) => "> " + result)
    .join("\n");
}
document.querySelector("#run-variables").addEventListener("click", runOperations);
runOperations();
