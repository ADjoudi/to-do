import "../../css/category.css";

function newCategory(t, nbrTasks) {
  const category = document.createElement("div");
  category.classList.add("category");
  const title = document.createElement("h2");
  const nbrTasksRemaining = document.createElement("h3");
  nbrTasksRemaining.classList.add("nbrTasks");
  const enterBtn = document.createElement("h3");
  enterBtn.classList.add("enterBtn");
  title.textContent = t;
  nbrTasksRemaining.textContent = `${nbrTasks} Tasks Remaining`;
  enterBtn.textContent = "->";
  category.appendChild(title);
  category.appendChild(nbrTasksRemaining);
  category.appendChild(enterBtn);
  return category;
}
export default newCategory;
