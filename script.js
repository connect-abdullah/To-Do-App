let button = document.querySelector("button");
let list = document.querySelector("#list-container");

button.addEventListener("click", () => {
  addTask();
});

document.querySelector("input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let inputElement = document.querySelector("input");
  let input = inputElement.value.trim(); // Remove leading/trailing spaces
  let listItem = document.createElement("li");

  if (input === "") {
    alert("Please enter a task");
    return;
  } else {
    listItem.textContent = input;
    list.append(listItem);

    // Adding Cross Button
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    listItem.append(span);
  }

  inputElement.value = ""; // Clear the input field
  saveData();
}

list.addEventListener("click",(e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  }, false);

function saveData() {
  localStorage.setItem("list-container", list.innerHTML);
}

function showData() {
  list.innerHTML = localStorage.getItem("list-container") || ""; // If no data is present, set it to empty string
}
showData();
