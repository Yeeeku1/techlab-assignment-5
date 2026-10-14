"use strict";
const tasks = [];
let nextTaskId = 1;
const todoForm = document.querySelector("#todo-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const todoStatus = document.querySelector("#todo-status");
function renderTasks() {
  taskList.replaceChildren();
  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.classList.toggle("completed", task.completed);
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.id = "task-" + task.id;
    const title = document.createElement("span");
    title.textContent = task.text;
    label.append(checkbox, title);
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-task";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", "Delete task: " + task.text);
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      item.classList.toggle("completed", task.completed);
      updateTaskSummary();
      todoStatus.textContent = task.completed
        ? "Task marked as completed."
        : "Task marked as active.";
    });
    deleteButton.addEventListener("click", () => {
      const index = tasks.findIndex((entry) => entry.id === task.id);
      tasks.splice(index, 1);
      renderTasks();
      todoStatus.textContent = "Task deleted.";
      const nextCheckbox = taskList.querySelectorAll('input[type="checkbox"]')[
        Math.min(index, tasks.length - 1)
      ];
      if (nextCheckbox) nextCheckbox.focus();
      else taskInput.focus();
    });
    item.append(label, deleteButton);
    taskList.appendChild(item);
  });
  updateTaskSummary();
}
function updateTaskSummary() {
  const completed = tasks.filter((task) => task.completed).length;
  document.querySelector("#task-total").textContent = String(tasks.length);
  document.querySelector("#task-progress").textContent =
    completed + " of " + tasks.length + " completed";
  document.querySelector("#todo-empty").hidden = tasks.length > 0;
}
taskInput.addEventListener("input", () => taskInput.setCustomValidity(""));
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = taskInput.value.trim();
  if (!text) {
    taskInput.setCustomValidity("Enter a task containing more than spaces.");
    taskInput.reportValidity();
    return;
  }
  tasks.push({ id: nextTaskId, text, completed: false });
  nextTaskId += 1;
  renderTasks();
  taskInput.value = "";
  taskInput.focus();
  todoStatus.textContent = "Task added to your workspace.";
});
