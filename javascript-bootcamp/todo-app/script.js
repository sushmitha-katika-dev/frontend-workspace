const taskInput = document.querySelector("#task-input");
const addTaskButton = document.querySelector("#add-task-btn");
const taskList = document.querySelector(".task-list");

const totalTasks = document.querySelector("#total");
const completedTasks = document.querySelector("#completed");
const remainingTasks = document.querySelector("#remaining");

const filterButtons = document.querySelectorAll(".filters .btn");

let currentFilter = "all";

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

addTaskButton.addEventListener("click", handleAddTask);

taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleAddTask();
    }
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        currentFilter = button.textContent.toLowerCase();

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        renderTasks();

    });
});

function handleAddTask() {

    const inputText = taskInput.value.trim();

    if (inputText === "") {
        alert("Please enter a task");
        return;
    }

    const task = {
        id: Date.now(),
        text: inputText,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    saveTasks();
    renderTasks();
}

function renderTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "active") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    filteredTasks.forEach(task => {

        const taskContainer = document.createElement("div");
        taskContainer.className = "task";

        const left = document.createElement("div");
        left.className = "left";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            toggleTask(task.id);
        });

        const taskText = document.createElement("p");
        taskText.textContent = task.text;

        if (task.completed) {
            taskText.style.textDecoration = "line-through";
            taskText.style.color = "gray";
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", () => {
            deleteTask(task.id);
        });

        left.appendChild(checkbox);
        left.appendChild(taskText);

        taskContainer.appendChild(left);
        taskContainer.appendChild(deleteButton);

        taskList.appendChild(taskContainer);

    });

    updateStatistics();
}

function deleteTask(id) {

    const index = tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        tasks.splice(index, 1);
    }

    saveTasks();
    renderTasks();
}

function toggleTask(id) {

    const task = tasks.find(task => task.id === id);

    if (task) {
        task.completed = !task.completed;
    }

    saveTasks();
    renderTasks();
}

function updateStatistics() {

    const total = tasks.length;

    const completed = tasks.filter(task => task.completed).length;

    const remaining = total - completed;

    totalTasks.textContent = total;
    completedTasks.textContent = completed
    remainingTasks.textContent = remaining;
}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

renderTasks();