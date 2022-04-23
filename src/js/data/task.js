import "../../css/task.css";

export default class Task {
  constructor() {
    this.text;
    this.dueDate;
    this.isDone = false;
  }
  setText(text) {
    this.text = text;
  }
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  setStatus(isDone) {
    this.isDone = isDone;
  }

  getText() {
    return this.text;
  }
  getDueDate() {
    return this.dueDate;
  }
  getStatus() {
    return this.isDone;
  }

  createTaskInterface(taskString, dueDate) {
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
}
