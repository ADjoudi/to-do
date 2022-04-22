import "../../../css/popup/newsection.css";

export default function addCategory() {
  const newcategory = document.createElement("div");
  const title = document.createElement("input");
  const nbrTasksRemaining = document.createElement("h3");
  const enterBtn = document.createElement("h3");

  newcategory.classList.add("newcategory");
  nbrTasksRemaining.classList.add("nbrTasks");
  enterBtn.classList.add("enterBtn");

  title.setAttribute("type", "text");
  title.setAttribute("placeholder", "Name");
  title.setAttribute("id", "inputcategory");
  nbrTasksRemaining.textContent = `0 Tasks Remaining`;
  enterBtn.textContent = "->";

  newcategory.appendChild(title);
  newcategory.appendChild(nbrTasksRemaining);
  newcategory.appendChild(enterBtn);

  return newcategory;
}
