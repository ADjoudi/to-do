import "../../../css/task.css";

export default function createTaskInterface(taskString) {
  const taskInterface = document.createElement("div");
  const taskText = document.createElement("p");
  const interactions = document.createElement("div");
  const edit = document.createElement("img");
  const del = document.createElement("img");

  taskInterface.classList.add("task");
  taskText.textContent = taskString;
  interactions.classList.add("interactions");
  edit.src = "./resources/edit.svg";
  del.src = "./resources/delete.svg";

  interactions.appendChild(edit);
  interactions.appendChild(del);

  taskInterface.appendChild(taskText);
  taskInterface.appendChild(interactions);

  return taskInterface;
}
