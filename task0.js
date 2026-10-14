"use strict";
const studentName = "Yerasyl Dauyl";
const studentGroup = "SE-2527";
console.log("Student:", studentName);
console.log("Group:", studentGroup);
document.querySelector("#greeting").addEventListener("click", () => {
  alert("Hello, JavaScript World!");
  document.querySelector("#greeting-status").textContent =
    "Greeting displayed successfully. Your first script is running!";
});
