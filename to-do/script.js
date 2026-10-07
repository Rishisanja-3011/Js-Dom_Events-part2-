const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const emptyMessage = document.querySelector("#empty-message");
const storageKey = "todo-list-tasks";

let tasks = JSON.parse(localStorage.getItem(storageKey)) || [];

function saveTasks() {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function renderTasks() {
    todoList.textContent = "";
    emptyMessage.classList.toggle("hidden", tasks.length > 0);

    tasks.forEach((task, index) => {
        const item = document.createElement("li");
        item.className = "todo-item";
        item.classList.toggle("completed", task.completed);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", `Mark ${task.text} as complete`);
        checkbox.addEventListener("change", () => {
            tasks[index].completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        const text = document.createElement("span");
        text.className = "todo-text";
        text.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("aria-label", `Delete ${task.text}`);
        deleteButton.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        item.append(checkbox, text, deleteButton);
        todoList.append(item);
    });
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = todoInput.value.trim();
    if (!text) {
        return;
    }

    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks();
    todoForm.reset();
    todoInput.focus();
});

renderTasks();

