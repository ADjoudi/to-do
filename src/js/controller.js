import loadInterface from "./interface";
import "../css/style.css";
import newCategory from "./interface/popup/newsection";

import Project from "./data/project";
import Category from "./data/category";
import Task from "./data/task";

const loadTasks = (category) => {
  if (category) {
    console.log(category);
    const tasks = category.getTasks();
    const tasksContainer = document.querySelector(".taskscontainer");
    tasks.forEach((task) => {
      tasksContainer.appendChild(task.createTaskInterface());
    });
  }
};

const loadProjects = (links, draft) => {
  links.forEach((link) => {
    console.log(link.textContent);
    if (link.textContent == "Draft") {
      link.classList.add("navLinkClicked");
    }
  });
  laodCategories(draft);
  loadTasks(draft.getCategories()[0]);
};

const laodCategories = (project) => {
  const categories = project.getCategories();
  const categoriesContainer = document.querySelector(".categories");
  categories.forEach((category) => {
    categoriesContainer.appendChild(category);
  });
};

const loadProjectTitle = (project) => {
  const projectTitle = project.getProjectName();
  const categoriesTitle = document.querySelector(".sections .titlebar h1");
  categoriesTitle.textContent = projectTitle;
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
          loadProjectTitle(draft);
          laodCategories(draft);
          break;
        case "Personnal":
          loadProjectTitle(personnal);
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
  let allowAddingSection = true;
  addNewSection.addEventListener("click", () => {
    if (allowAddingSection) {
      allowAddingSection = false;
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
          allowAddingSection = true;
          categories.removeChild(categories.lastChild);
          laodCategories(draft);
        }
      });
    }
  });

  const categories = document.querySelector(".categories");
  categories.addEventListener("click", (event) => {
    if (
      document.querySelector(".newcategory") &&
      event.target == document.querySelector(".categories")
    ) {
      categories.removeChild(categories.lastChild);
      allowAddingSection = true;
    }
  });
}
