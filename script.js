// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.dataset.theme = savedTheme;
  toggle.textContent = savedTheme === "dark" ? "🌙" : "☀️";
}

toggle.onclick = () => {
  const newTheme = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
  toggle.textContent = newTheme === "dark" ? "🌙" : "☀️";
};

// REVEAL SCROLL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// SCROLL TOP BUTTON
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
||