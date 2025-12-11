function toggleMenu() {
  const links = document.querySelector(".nav-links");
  links.classList.toggle("open");
}

const themeBtn = document.querySelector(".theme-btn");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

const scrollBar = document.getElementById("scrollBar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  scrollBar.style.width = scrolled + "%";
});

const sparkleCanvas = document.getElementById("sparkleCanvas");
const ctx = sparkleCanvas.getContext("2d");

function resizeCanvas() {
  sparkleCanvas.width = window.innerWidth;
  sparkleCanvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

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
    ctx.fillStyle = `rgba(215, 135, 163, ${s.alpha})`;
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fill();
    s.y -= s.drift;
    if (s.y < 0) s.y = sparkleCanvas.height;
  });
  requestAnimationFrame(animateSparkles);
}

animateSparkles();

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

const rotatingWords = [
  "Software Engineer",
  "Full Stack Developer",
  "Cloud Practitioner",
  "QA Analyst",
  "Automation Engineer",
  "Problem Solver",
  "System Thinker",
];

let wordIndex = 0;
const subtitle = document.querySelector(".hero h2");

function rotateTitle() {
  if (!subtitle) return;
  subtitle.style.opacity = 0;
  setTimeout(() => {
    wordIndex = (wordIndex + 1) % rotatingWords.length;
    subtitle.textContent = rotatingWords[wordIndex];
    subtitle.style.opacity = 1;
  }, 300);
}

setInterval(rotateTitle, 2800);

window.addEventListener("scroll", () => {
  const heroSection = document.querySelector(".hero");
  let scale = 1 - window.scrollY / 1400;
  if (scale < 0.85) scale = 0.85;
  heroSection.style.transform = `scale(${scale})`;
});
