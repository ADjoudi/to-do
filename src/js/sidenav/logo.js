import "../../css/logoStyle.css";
const logo = document.createElement("div");
logo.classList.add("logo");
const logoIcon = document.createElement("img");
const logoText = document.createElement("h1");

logoIcon.src = "./resources/logo.svg";
logoText.textContent = "Get It Done";
logo.appendChild(logoIcon);
logo.appendChild(logoText);
export default logo;
