import "../../../css/titleBar.css";

const titleBar = document.createElement("div");
const title = document.createElement("h1");
const addNew = document.createElement("div");
const addText = document.createElement("h2");
const addIcon = document.createElement("h2");

titleBar.classList.add("titlebar");
addNew.setAttribute("id", "addnew");
title.textContent = "DRAFT";
addText.textContent = "New";
addIcon.textContent = "+";
addNew.appendChild(addText);
addNew.appendChild(addIcon);

titleBar.appendChild(title);
titleBar.appendChild(addNew);

export default titleBar;
