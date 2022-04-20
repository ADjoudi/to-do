import "../../css/task.css";

export default function newTask(taskString) {
  const task = document.createElement("div");
  task.classList.add("task");
  const taskText = document.createElement("p");
  taskText.textContent = taskString;
  const interactions = document.createElement("div");
  interactions.classList.add("interactions");
  const edit = document.createElement("img");
  const del = document.createElement("img");
  edit.src = "./resources/edit.svg";
  del.src = "./resources/delete.svg";
  interactions.appendChild(edit);
  interactions.appendChild(del);

  task.appendChild(taskText);
  task.appendChild(interactions);

  return task;
}
