import "../../../css/category.css";

function newCategory(t, nbrTasks) {
  const category = document.createElement("div");
  const title = document.createElement("h2");
  const nbrTasksRemaining = document.createElement("h3");
  const enterBtn = document.createElement("h3");

  category.classList.add("category");
  nbrTasksRemaining.classList.add("nbrTasks");
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
