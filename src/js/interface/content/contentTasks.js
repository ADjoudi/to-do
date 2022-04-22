import "../../../css/contentTasks.css";

import task from "./task";

export default (function tasksInterface() {
  const contentTasks = document.createElement("div");
  const add = document.createElement("img");

  contentTasks.classList.add("tasks");
  add.src = "./resources/addtodo.svg";
  add.classList.add("addTask");
  add.setAttribute("id", "addTask");

  const tasks = [task("hey there")];
  if (tasks) {
    tasks.forEach((task) => {
      contentTasks.appendChild(task);
    });
  }
  contentTasks.appendChild(add);

  return contentTasks;
})();
