// =======================
// TEMA CLARO / OSCURO
// =======================
const toggle = document.getElementById("themeToggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.dataset.theme = savedTheme;
  if (toggle) toggle.textContent = savedTheme === "dark" ? "🌙" : "☀️";
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const newTheme = html.dataset.theme === "dark" ? "light" : "dark";
    html.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
    toggle.textContent = newTheme === "dark" ? "🌙" : "☀️";
  });
}

// =======================
// HEADER SCROLL & LINKS ACTIVOS
// =======================
const header = document.querySelector("header");
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");

const handleScroll = () => {
  const scrollY = window.scrollY;

  // header achicado
  header.classList.toggle("scrolled", scrollY > 50);

  // link activo
  sections.forEach((sec, i) => {
    const top = sec.offsetTop - 120;
    const bottom = top + sec.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(link => link.classList.remove("active"));
      if (navLinks[i]) navLinks[i].classList.add("active");
    }
  });
};

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// =======================
// REVEAL AL SCROLL (INTERSECTION OBSERVER)
// =======================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // solo una vez
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// =======================
// FORMULARIO (MENSAJE)
// =======================
const form = document.querySelector(".contact-form");
const success = document.getElementById("form-success");

if (form && success) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evitar refresh
    success.style.display = "block";

    setTimeout(() => {
      success.style.display = "none";
      form.reset(); // limpia campos
    }, 5000);
  });
}

// =======================
// SMOOTH SCROLL PARA LINKS
// =======================
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if (!savedTheme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  html.dataset.theme = prefersDark ? "dark" : "light";
  if (toggle) toggle.textContent = prefersDark ? "🌙" : "☀️";
}