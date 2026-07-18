// ============================
// DOM Elements
// ============================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const error = document.getElementById("error");

// ============================
// Event Listeners
// ============================

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        addTask();
    }

});

// ============================
// Functions
// ============================

function addTask() {

    const task = taskInput.value.trim();

    if (task === "") {

        showError("Please enter a task.");

        return;
    }

    clearError();
/*
    createTask(task) creates the <li>
    appendChild() adds it to the <ul>
*/
    taskList.appendChild(createTask(task));

    taskInput.value = "";
}

function createTask(task) {

    // Create List Item
    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = task;

    // Create Delete Button
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {

        li.remove();

    });

    li.appendChild(span);

    li.appendChild(deleteBtn);

    return li;
}

function showError(message) {

    error.textContent = message;

}

function clearError() {

    error.textContent = "";

}