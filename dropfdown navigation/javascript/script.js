const dropdown1 = document.querySelector(".dropdown1");
const dropped = document.querySelector(".dropdown-menu-1");
const dropdown2 = document.querySelector(".dropdown2");
const dropped2 = document.querySelector(".dropdown-menu-2");

dropdown1.addEventListener("click", () => {
  dropped.classList.toggle("active");
});

dropdown2.addEventListener("click", () => {
  dropped2.classList.toggle("active2");
});

const hamburger = document.querySelector(".hamburger");
const navitem = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active3");
  navitem.classList.toggle("active3");
});
