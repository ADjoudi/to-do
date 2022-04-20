import sidenav from "./sidenav/sidenav";
import sections from "./category/sections";
import content from "./content/content";

export default function () {
  const body = document.querySelector("body");
  body.appendChild(sidenav);
  body.appendChild(sections);
  body.appendChild(content);
}
