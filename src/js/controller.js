import view from "./interface";
import "../css/style.css";
import newsection from "./interface/popup/newsection";

export default function () {
  view();

  const add = document.querySelector("#addTask");
  add.addEventListener("click", () => {
    console.log("add clicked!");
  });

  const links = document.querySelectorAll(".navLink");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link) => {
        link.classList.remove("navLinkClicked");
      });
      link.classList.add("navLinkClicked");
    });
  });

  const addNewSection = document.querySelector("#addnew");
  addNewSection.addEventListener("click", () => {
    const categories = document.querySelector(".categories");
    categories.appendChild(newsection());
  });
}
