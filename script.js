/* ============================================================
   THEME TOGGLE
   ============================================================ */
const themeBtn = document.querySelector("#theme-toggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeBtn.textContent = isDark ? "☀️" : "🌙";
});

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

/* ============================================================
   ROTATING JOB TITLES
   ============================================================ */
const rotatingWords = [
  "QA Analyst",
  "Software Engineering Student",
  "Full Stack Developer",
  "Certified AWS Cloud Practitioner",
  "Automation Engineer",
  "Problem Solver",
  "System Thinker",
  "Innovator",
  "IT Analyst",
];

let wordIndex = 0;
const subtitle = document.querySelector(".hero-left h2");

function rotateTitle() {
  subtitle.style.opacity = 0;
  setTimeout(() => {
    wordIndex = (wordIndex + 1) % rotatingWords.length;
    // Preserve the cursor span
    subtitle.childNodes[0].textContent = rotatingWords[wordIndex];
    subtitle.style.opacity = 1;
  }, 300);
}

setInterval(rotateTitle, 2800);

/* ============================================================
   SCROLL: PROGRESS BAR + BACK-TO-TOP + SCROLL SPY + PARALLAX
   ============================================================ */
const scrollBar = document.getElementById("scroll-progress-bar");
const backToTopBtn = document.getElementById("back-to-top");
const hero = document.querySelector(".hero");

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Progress bar
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollBar.style.width = progress + "%";

  // Back-to-top visibility
  if (scrollTop > 400) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }

  // Parallax hero
  hero.style.transform = `translateY(${scrollTop * 0.12}px)`;

  // Scroll spy
  updateActiveNav(scrollTop);
}

window.addEventListener("scroll", updateScrollUI, { passive: true });

/* ============================================================
   SCROLL SPY - highlight active section in nav
   ============================================================ */
function updateActiveNav(scrollTop) {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");
  let current = "";

  sections.forEach((section) => {
    if (scrollTop >= section.offsetTop - 120) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================================================
   SCROLL ANIMATIONS (fade-up)
   ============================================================ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

/* ============================================================
   ANIMATED STAT COUNTERS
   ============================================================ */
let countersStarted = false;

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countersStarted) {
        countersStarted = true;
        document.querySelectorAll(".stat-number").forEach((el) => {
          const target = parseInt(el.getAttribute("data-target"), 10);
          let current = 0;
          const duration = 1200; // ms
          const steps = 40;
          const increment = target / steps;
          const interval = duration / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = Math.floor(current);
          }, interval);
        });
      }
    });
  },
  { threshold: 0.4 }
);

const statsSection = document.querySelector(".stats-section");
if (statsSection) statsObserver.observe(statsSection);

/* ============================================================
   SPARKLE BACKGROUND
   ============================================================ */
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
