import "../../../css/contentTasks.css";

import tasks from "./taskHandler";

const tasksInterface = (tasks) => {
  const contentTasks = document.createElement("div");
  const add = document.createElement("img");

  contentTasks.classList.add("tasks");
  add.src = "./resources/addtodo.svg";
  add.classList.add("addTask");
  add.setAttribute("id", "addTask");
  if (tasks) {
    tasks.forEach((task) => {
      contentTasks.appendChild(task);
    });
  }
  console.log(add);
  contentTasks.appendChild(add);

  return contentTasks;
};

export default tasksInterface(tasks);
