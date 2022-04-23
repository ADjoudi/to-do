import "../../../css/contentTasks.css";

export default (function tasksInterface() {
  const contentTasks = document.createElement("div");
  const tasksContainer = document.createElement("div");
  const add = document.createElement("img");

  contentTasks.classList.add("tasks");
  tasksContainer.classList.add("taskscontainer");
  add.src = "./resources/addtodo.svg";
  add.classList.add("addTask");
  add.setAttribute("id", "addTask");

  contentTasks.appendChild(tasksContainer);
  contentTasks.appendChild(add);

  return contentTasks;
})();
