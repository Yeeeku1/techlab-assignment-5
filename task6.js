"use strict";
const liveInput = document.querySelector("#live-input");
function updateLiveOutput(event) {
  document.querySelector("#live-output").textContent =
    liveInput.value || "Your words will appear here.";
  document.querySelector("#character-count").textContent =
    liveInput.value.length + " / 200";
  document.querySelector("#keyboard-status").textContent =
    event.type === "keyup"
      ? "Updated after keyup · Key released: " + event.key
      : "Input updated · " + liveInput.value.length + " characters";
}
liveInput.addEventListener("keyup", updateLiveOutput);
liveInput.addEventListener("input", updateLiveOutput);
