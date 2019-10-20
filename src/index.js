import "./styles.scss";

function makeScroll(el, isCenter = false) {
  const selector = "." + el.dataset.section;
  const section = document.querySelector(selector);
  const spaceAround = window.innerHeight - section.offsetHeight;
  const breathingRoom = isCenter ? spaceAround / 2 : 0;
  const yPos = section.offsetTop - (breathingRoom < 0 ? 0 : breathingRoom);

  window.scrollTo({
    left: 0,
    top: yPos,
    behavior: "smooth"
  });
}

const nav = document.querySelectorAll("nav > span");
for (const navBtn of nav) {
  navBtn.addEventListener("click", () => makeScroll(navBtn, true));
}
