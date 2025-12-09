/* -------------------------- */
/* Mobile Menu Toggle */
/* -------------------------- */
function toggleMenu() {
  const links = document.querySelector(".nav-links");
  links.classList.toggle("open");
}

/* -------------------------- */
/* Theme Toggle — dark mode cuteness */
/* -------------------------- */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // update icon depending on mood
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";

  // save preference
  localStorage.setItem("theme", document.body.classList.contains("dark"));
});

// load saved preference
if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

/* -------------------------- */
/* Shrinking Navbar on Scroll */
/* -------------------------- */
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 40) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});

/* -------------------------- */
/* Fade-in Sections as You Scroll (smooth + modern) */
/* -------------------------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".fade-section").forEach((section) => {
  observer.observe(section);
});
