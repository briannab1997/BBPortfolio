/* MOBILE MENU */
function toggleMenu() {
  const links = document.querySelector(".nav-links");
  links.classList.toggle("open");
}

// Close mobile menu when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("open");
  });
});

/* DARK MODE */
const toggle = document.getElementById("themeToggle");
const body = document.body;

function applyDarkMode(isDark) {
  body.classList.toggle("dark", isDark);
  toggle.textContent = isDark ? "☀️" : "🌙";
}

applyDarkMode(localStorage.getItem("darkMode") === "true");

toggle.addEventListener("click", () => {
  const isDark = body.classList.contains("dark");
  applyDarkMode(!isDark);
  localStorage.setItem("darkMode", !isDark);
});

/* SCROLL PROGRESS BAR + NAV SHADOW */
const scrollBar = document.getElementById("scrollBar");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  scrollBar.style.width = scrolled + "%";
  navbar.classList.toggle("scrolled", scrollTop > 60);
});

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

// Stagger delays for sibling cards
document.querySelectorAll(".project-card, .cert-card, .stat-item").forEach((el, i) => {
  const siblings = el.parentElement.children;
  const index = Array.from(siblings).indexOf(el);
  el.style.setProperty("--stagger", (index * 0.08) + "s");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((el) => revealObserver.observe(el));

/* TYPING ANIMATION */
const typedEl = document.getElementById("typedText");
const phrases = [
  "QA Analyst",
  "Software Engineer",
  "SWE Intern",
  "AWS Certified",
  "Detail-Driven Tester",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeLoop() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 55;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 100;
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    typingDelay = 1800;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingDelay = 380;
  }

  setTimeout(typeLoop, typingDelay);
}

setTimeout(typeLoop, 900);

/* STAT COUNTER ANIMATION */
const statNumbers = document.querySelectorAll(".stat-number");

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateCount(entry.target, target);
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

statNumbers.forEach((el) => statObserver.observe(el));

function animateCount(el, target) {
  let count = 0;
  const duration = 1200;
  const steps = 50;
  const stepTime = duration / steps;
  const increment = target / steps;

  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(count);
  }, stepTime);
}

/* PROJECT FILTER */
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    let visibleIndex = 0;

    projectCards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.style.display = match ? "" : "none";

      if (match) {
        card.style.setProperty("--stagger", (visibleIndex * 0.07) + "s");
        card.classList.remove("visible");
        // Re-trigger reveal animation
        setTimeout(() => card.classList.add("visible"), 20);
        visibleIndex++;
      }
    });
  });
});

/* ACTIVE NAV LINK ON SCROLL */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  },
  { threshold: 0.35, rootMargin: "-80px 0px 0px 0px" }
);

sections.forEach((s) => sectionObserver.observe(s));

/* BACK TO TOP */
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("visible", window.scrollY > 400);
}, { passive: true });

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
