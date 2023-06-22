const button = document.querySelector("#button-add");
const input = document.querySelector("#input");
const list = document.querySelector("#todo-list");

button.addEventListener("click", createTask);
list.addEventListener("click", checkTask);

function createTask() {
    const newTask = document.createElement("li");
    newTask.textContent = input.value;
    list.append(newTask);
    input.value = "";
}

function checkTask(evt) {
    if (evt.target.tagName === "LI") {
        evt.target.classList.toggle("completed");
    }
}