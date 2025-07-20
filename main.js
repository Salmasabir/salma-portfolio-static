// Toggle Dark Mode
const modeBtn = document.getElementById("mode-toggle");
if (modeBtn) {
  modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    modeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
  });
}

// Language Switcher
const langSwitch = document.getElementById("lang-switch");
const translatable = document.querySelectorAll(".trans");

if (langSwitch) {
  langSwitch.addEventListener("change", () => {
    const lang = langSwitch.value;
    translatable.forEach(el => {
      el.textContent = el.dataset[lang];
    });
  });
}