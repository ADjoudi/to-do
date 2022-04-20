import "../../css/contentHeaderStyle.css";
const header = document.createElement("div");
header.classList.add("header");
const title = document.createElement("h1");
const date = document.createElement("div");
date.classList.add("date");
const dateIcon = document.createElement("img");
const dateText = document.createElement("h2");

title.textContent = "To Do";
dateIcon.src = "./resources/dateGraphics.svg";
dateText.textContent = "Monday 18th of April 2022";

date.appendChild(dateIcon);
date.appendChild(dateText);
header.appendChild(title);
header.appendChild(date);

export default header;
