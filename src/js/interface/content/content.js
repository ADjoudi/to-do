import "../../../css/content.css";
import header from "./contentHeader";
import contentTasks from "./contentTasks";

const content = document.createElement("div");
content.classList.add("content");
content.appendChild(header);
content.appendChild(contentTasks);

export default content;
