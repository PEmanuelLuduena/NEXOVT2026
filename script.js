// =======================
// Tema claro / oscuro
// =======================
const toggle = document.getElementById("themeToggle");
const html = document.documentElement;

if (toggle) {
  toggle.addEventListener("click", () => {
    html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
    toggle.textContent = html.dataset.theme === "dark" ? "🌙" : "☀️";
  });
}

// =======================
// Mensaje formulario
// =======================
const form = document.querySelector(".contact-form");
const success = document.getElementById("form-success");

if (form && success) {
  form.addEventListener("submit", () => {
    setTimeout(() => {
      form.reset();
      success.style.display = "block";

      setTimeout(() => {
        success.style.display = "none";
      }, 5000);

    }, 500);
  });
}

// =======================
// Reveal scroll
// =======================
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});