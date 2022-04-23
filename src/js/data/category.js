import "../../css/category.css";

export default class Category {
  constructor(title, nbrTasksRemaining) {
    this.title = title;
    this.nbrTasksRemaining = nbrTasksRemaining;
    this.tasks = [];
  }
  setTitle(title) {
    this.title = title;
  }
  setNbrTasksRemaining(nbrTasksRemaining) {
    this.nbrTasksRemaining = nbrTasksRemaining;
  }
  addTask(task) {
    this.tasks.push(task);
  }

  getTitle() {
    return this.title;
  }
  getNbrTasksRemaining() {
    return this.nbrTasksRemaining;
  }
  getTasks() {
    return this.tasks;
  }
  newCategory(categoryName, nbrTasks) {
    const category = document.createElement("div");
    const title = document.createElement("h2");
    const nbrTasksRemaining = document.createElement("h3");
    const enterBtn = document.createElement("h3");

    category.classList.add("category");
    nbrTasksRemaining.classList.add("nbrTasks");
    enterBtn.classList.add("enterBtn");

    title.textContent = categoryName;
    nbrTasksRemaining.textContent = `${nbrTasks} Tasks Remaining`;
    enterBtn.textContent = "->";

    category.appendChild(title);
    category.appendChild(nbrTasksRemaining);
    category.appendChild(enterBtn);

    return category;
  }
}
