"use strict";
const styleBlock = document.querySelector("#style-block");
const styleText = document.querySelector("#style-text");
const styleStatus = document.querySelector("#style-status");
const colors = ["#eeebff", "#d7f4e4", "#ffebca", "#dceeff"];
const colorNames = ["Lavender", "Mint", "Peach", "Sky"];
const fontSizes = [28, 32, 36, 24];
let colorIndex = 0;
let sizeIndex = 0;
function showStyleStatus() {
  styleStatus.textContent =
    "Background: " +
    colorNames[colorIndex] +
    " · Text size: " +
    fontSizes[sizeIndex] +
    "px";
}
document.querySelector("#change-color").addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % colors.length;
  styleBlock.style.backgroundColor = colors[colorIndex];
  showStyleStatus();
});
document.querySelector("#change-size").addEventListener("click", () => {
  sizeIndex = (sizeIndex + 1) % fontSizes.length;
  styleText.style.fontSize = fontSizes[sizeIndex] + "px";
  showStyleStatus();
});
document.querySelector("#reset-style").addEventListener("click", () => {
  colorIndex = 0;
  sizeIndex = 0;
  styleBlock.style.backgroundColor = colors[0];
  styleText.style.fontSize = fontSizes[0] + "px";
  showStyleStatus();
});
