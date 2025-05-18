hamburger = document.querySelector(".hamburger");
navitems = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navitems.classList.toggle("active");
});

// code to remove menu.
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navitems.classList.remove("active");
  })
);
