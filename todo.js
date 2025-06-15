let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.style.marginLeft = "10px";
    btn.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

document.getElementById("addBtn").onclick = function () {
  const input = document.getElementById("taskInput");
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    renderTasks();
  }
};

renderTasks();