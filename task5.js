"use strict";
const mouseBox = document.querySelector("#mouse-box");
const mouseStatus = document.querySelector("#mouse-status");
let active = false;
function setActive(value) {
  active = value;
  mouseBox.style.backgroundColor = active ? "#c8f3df" : "#eeebff";
  mouseBox.setAttribute("aria-pressed", String(active));
  document.querySelector("#mouse-title").textContent = active
    ? "You’re in the zone."
    : "Step into the zone.";
  document.querySelector("#mouse-description").textContent = active
    ? "Your interaction changed the background color."
    : "Hover here to activate the experiment.";
  mouseStatus.textContent = active
    ? "Active interaction · Mint color"
    : "Outside the box · Original color";
}
mouseBox.addEventListener("mouseover", () => setActive(true));
mouseBox.addEventListener("mouseout", (event) => {
  if (!mouseBox.contains(event.relatedTarget)) setActive(false);
});
mouseBox.addEventListener("focus", () => setActive(true));
mouseBox.addEventListener("blur", () => setActive(false));
mouseBox.addEventListener("click", () => setActive(!active));
mouseBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setActive(!active);
  }
});
