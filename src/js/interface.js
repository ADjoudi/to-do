import sidenav from "./interface/sidenav/sidenav";
import sections from "./interface/category/sections";
import content from "./interface/content/content";

export default function () {
  const body = document.querySelector("body");
  body.appendChild(sidenav);
  body.appendChild(sections);
  body.appendChild(content);
}
