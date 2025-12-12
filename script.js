/* ---------------- THEME TOGGLE ---------------- */
const themeBtn = document.querySelector("#theme-toggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
});

/* ---------------- ROTATING TITLES ---------------- */
const rotatingWords = [
  "Software Engineering Student",
  "Full Stack Developer",
  "Certified AWS Cloud Practitioner",
  "Junior QA Analyst",
  "Automation Engineer",
  "Problem Solver",
  "System Thinker",
  "Innovator",
  "Learner",
  "IT Analyst",
  "Pharmacy Technician",
];

let wordIndex = 0;
const subtitle = document.querySelector(".hero-left h2");

function rotateTitle() {
  subtitle.style.opacity = 0;
  setTimeout(() => {
    wordIndex = (wordIndex + 1) % rotatingWords.length;
    subtitle.textContent = rotatingWords[wordIndex];
    subtitle.style.opacity = 1;
  }, 300);
}

setInterval(rotateTitle, 2800);

/* ---------------- SCROLL ANIMATIONS ---------------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

/* ---------------- SPARKLE BACKGROUND ---------------- */
const sparkleCanvas = document.getElementById("sparkle-canvas");
const ctx = sparkleCanvas.getContext("2d");

function resizeCanvas() {
  sparkleCanvas.width = window.innerWidth;
  sparkleCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let sparkles = [];
function createSparkles() {
  sparkles = [];
  for (let i = 0; i < 80; i++) {
    sparkles.push({
      x: Math.random() * sparkleCanvas.width,
      y: Math.random() * sparkleCanvas.height,
      r: Math.random() * 2 + 1,
      a: Math.random() * 0.8 + 0.3,
      drift: Math.random() * 0.4 + 0.2,
    });
  }
}
createSparkles();

function animateSparkles() {
  ctx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);

  sparkles.forEach((s) => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(215,135,163,${s.a})`;
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();

    s.y -= s.drift;
    if (s.y < 0) s.y = sparkleCanvas.height;
  });

  requestAnimationFrame(animateSparkles);
}

animateSparkles();

/* ---------------- PARALLAX HERO ---------------- */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.12;
  hero.style.transform = `translateY(${offset}px)`;
});
