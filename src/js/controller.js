import loadInterface from "./interface";
import "../css/style.css";
import newCategory from "./interface/popup/newsection";

import Project from "./data/project";
import Category from "./data/category";
import Task from "./data/task";

const loadProjects = (links, draft) => {
  links.forEach((link) => {
    console.log(link.textContent);
    if (link.textContent == "Draft") {
      link.classList.add("navLinkClicked");
    }
  });
  laodCategories(draft);
};

const laodCategories = (project) => {
  const categories = project.getCategories();
  const categoriesContainer = document.querySelector(".categories");
  categories.forEach((category) => {
    categoriesContainer.appendChild(category);
  });
};

export default function () {
  loadInterface();
  const draft = new Project("Draft");
  const personnal = new Project("Personnal");

  const links = document.querySelectorAll(".navLink");
  loadProjects(links, draft);

  const add = document.querySelector("#addTask");
  add.addEventListener("click", () => {
    console.log("add clicked!");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      switch (link.textContent) {
        case "Draft":
          laodCategories(draft);
          break;
        case "Personnal":
          laodCategories(personnal);
          break;
        default:
      }
      links.forEach((link) => {
        link.classList.remove("navLinkClicked");
      });
      link.classList.add("navLinkClicked");
    });
  });

  const addNewSection = document.querySelector("#addnew");
  addNewSection.addEventListener("click", () => {
    const categories = document.querySelector(".categories");
    categories.appendChild(newCategory());

    const categoryNameInput = document.querySelector("#categoryNameInput");
    categoryNameInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        let inputValue = document.querySelector("#categoryNameInput").value;
        let category = new Category(inputValue, 0);
        draft.addCategory(
          category.newCategory(
            category.getTitle(),
            category.getNbrTasksRemaining()
          )
        );
        categories.removeChild(categories.lastChild);
        laodCategories(draft);
      }
    });
  });
}
