import "../../css/contentTasks.css";
import newTask from "./task";

const contentTasks = document.createElement("div");
contentTasks.classList.add("tasks");
contentTasks.appendChild(newTask("complete this project!"));
contentTasks.appendChild(newTask("Add Checkbox to tasks!"));
contentTasks.appendChild(newTask("Implement logic to interface"));
const add = document.createElement("img");
add.src = "./resources/addtodo.svg";
add.classList.add("addTask");
contentTasks.appendChild(add);
export default contentTasks;
