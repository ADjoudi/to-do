import view from "./interface";
import "../css/style.css";

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
}
