import "../../../css/navLinkStyle.css";

function newNavLink(iconSrc, linkText) {
  const navLink = document.createElement("div");
  navLink.classList.add("navLink");
  const icon = document.createElement("img");
  const link = document.createElement("h2");
  icon.src = iconSrc;
  link.textContent = linkText;
  navLink.appendChild(icon);
  navLink.appendChild(link);
  return navLink;
}

export default newNavLink;
