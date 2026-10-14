"use strict";
const menuToggle = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#task-navigation");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  navigation.classList.toggle("open", !expanded);
});
