import newCategory from "./category";
import "../../../css/categories.css";

const categories = document.createElement("div");
categories.classList.add("categories");

const list = ["Facebook", "Google", "Figma", "Outdoors"];
list.forEach((item) => {
  const category = newCategory(item, "9");
  categories.appendChild(category);
});

export default categories;
