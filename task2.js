"use strict";
const announcement = document.querySelector("#announcement");
const originalText = announcement.textContent;
const contentStatus = document.querySelector("#content-status");
document.querySelector("#change-content").addEventListener("click", () => {
  announcement.textContent =
    "The TechLab workshop is live. Let’s build something great together!";
  contentStatus.textContent = "Announcement updated with textContent.";
});
document.querySelector("#reset-content").addEventListener("click", () => {
  announcement.textContent = originalText;
  contentStatus.textContent = "Original announcement restored.";
});
