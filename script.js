/* ---------------------------------------------------------- */
/* Hey Brianna — this JS file is your ✨glow code✨            */
/* It handles dark mode, sparkles, animations, and all the     */
/* cute interactive features that make your portfolio feel ALIVE */
/* ---------------------------------------------------------- */

/* ------------------------------- */
/* MOBILE NAV MENU TOGGLE          */
/* ------------------------------- */
function toggleMenu() {
  const links = document.querySelector(".nav-links");
  links.classList.toggle("open");
}

/* ------------------------------- */
/* DARK MODE TOGGLE + MEMORY       */
/* ------------------------------- */
const themeBtn = document.querySelector(".theme-btn");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}

// Toggle theme
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Save preference
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

/* ------------------------------- */
/* SCROLL PROGRESS BAR             */
/* ------------------------------- */
const scrollBar = document.getElementById("scrollBar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  scrollBar.style.width = scrolled + "%";
});

/* ------------------------------- */
/* FLOATING SPARKLES BACKGROUND    */
/* ------------------------------- */
/* This is just for a soft luxury vibe — rose-gold sparkles! */
const sparkleCanvas = document.getElementById("sparkleCanvas");
const ctx = sparkleCanvas.getContext("2d");

function resizeCanvas() {
  sparkleCanvas.width = window.innerWidth;
  sparkleCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Build sparkles
let sparkles = [];
for (let i = 0; i < 60; i++) {
  sparkles.push({
    x: Math.random() * sparkleCanvas.width,
    y: Math.random() * sparkleCanvas.height,
    radius: Math.random() * 2 + 1,
    alpha: Math.random() * 0.6 + 0.2,
    drift: Math.random() * 0.5 + 0.2,
  });
}

function animateSparkles() {
  ctx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);

  sparkles.forEach((s) => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(215, 135, 163, ${s.alpha})`; // rose-gold sparkle color
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fill();

    s.y -= s.drift;
    if (s.y < 0) s.y = sparkleCanvas.height;
  });

  requestAnimationFrame(animateSparkles);
}
animateSparkles();

/* ------------------------------- */
/* SCROLL REVEAL ANIMATION         */
/* ------------------------------- */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ------------------------------- */
/* PARALLAX HERO MOUSE MOVEMENT    */
/* ------------------------------- */
/* Very subtle — makes your site feel expensive */
const hero = document.getElementById("hero");
const heroImg = document.querySelector(".hero-img img");

if (heroImg) {
  hero.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) * 0.01;
    let y = (window.innerHeight / 2 - e.pageY) * 0.01;

    heroImg.style.transform = `translate(${x}px, ${y}px)`;
  });

  hero.addEventListener("mouseleave", () => {
    heroImg.style.transform = "translate(0px, 0px)";
  });
}

/* ------------------------------- */
/* ROTATING JOB TITLE TEXT         */
/* ------------------------------- */
/* Cute lil animated role-switcher */
const rotatingWords = [
  "Software Engineer",
  "Full Stack Developer",
  "Cloud Practitioner",
  "UI Lover",
  "Problem Solver",
];

let wordIndex = 0;
const subtitle = document.querySelector("#hero h2");

function rotateTitle() {
  if (!subtitle) return;

  subtitle.style.opacity = 0;
  setTimeout(() => {
    wordIndex = (wordIndex + 1) % rotatingWords.length;
    subtitle.textContent = rotatingWords[wordIndex];
    subtitle.style.opacity = 1;
  }, 350);
}

setInterval(rotateTitle, 3000);

/* ------------------------------- */
/* SECTION SHRINK ON SCROLL        */
/* (that “one section gets smaller as you scroll” effect)     */
/* ------------------------------- */
window.addEventListener("scroll", () => {
  const heroSection = document.getElementById("hero");
  let scale = 1 - window.scrollY / 1400;

  if (scale < 0.85) scale = 0.85; // stop shrinking too far
  heroSection.style.transform = `scale(${scale})`;
});
