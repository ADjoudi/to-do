import titleBar from "./titlebar";
import categories from "./categories";
import "../../../css/sections.css";

const sections = document.createElement("div");
sections.classList.add("sections");
sections.appendChild(titleBar);
sections.appendChild(categories);

export default sections;
