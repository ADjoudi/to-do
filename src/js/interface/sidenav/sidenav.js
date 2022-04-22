import "../../../css/sidenavStyle.css";
import navLink from "./navLink";
import logo from "./logo";

const sidenav = document.createElement("div");
sidenav.classList.add("sidenav");
sidenav.appendChild(logo);
const navs = [
  { icon: "./resources/draft.svg", text: "Draft" },
  { icon: "./resources/work.svg", text: "Work" },
  { icon: "./resources/health.svg", text: "Health" },
  { icon: "./resources/mind.svg", text: "Mind" },
  { icon: "./resources/playground.svg", text: "Playground" },
  { icon: "./resources/minimize.svg", text: "Minimize" },
];
navs.forEach((nav) => {
  const link = navLink(nav.icon, nav.text);
  sidenav.appendChild(link);
});

export default sidenav;
