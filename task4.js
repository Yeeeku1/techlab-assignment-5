"use strict";
const itemList = document.querySelector("#item-list");
const itemStatus = document.querySelector("#item-status");
let nextItemNumber = 1;
function updateItemCount() {
  const count = itemList.children.length;
  document.querySelector("#item-count").textContent =
    count + (count === 1 ? " item" : " items");
  document.querySelector("#list-empty").hidden = count > 0;
}
document.querySelector("#add-item").addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = "Lab item " + nextItemNumber;
  nextItemNumber += 1;
  itemList.appendChild(item);
  itemStatus.textContent = item.textContent + " added to the queue.";
  updateItemCount();
});
document.querySelector("#remove-item").addEventListener("click", () => {
  const lastItem = itemList.lastElementChild;
  if (!lastItem) {
    itemStatus.textContent = "The queue is empty. Add an item first.";
    return;
  }
  itemStatus.textContent = lastItem.textContent + " removed from the queue.";
  lastItem.remove();
  updateItemCount();
});
