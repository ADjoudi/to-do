import "../../css/titleBar.css";

const titleBar = document.createElement("div");
titleBar.classList.add("titlebar");
const title = document.createElement("h1");
const addNew = document.createElement("div");
addNew.classList.add("addnew");
title.textContent = "DRAFT";

const addText = document.createElement("h2");
const addIcon = document.createElement("h2");
addText.textContent = "New";
addIcon.textContent = "+";
addNew.appendChild(addText);
addNew.appendChild(addIcon);

titleBar.appendChild(title);
titleBar.appendChild(addNew);

export default titleBar;
