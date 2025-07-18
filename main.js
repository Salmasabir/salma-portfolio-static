// main.js

document.addEventListener("DOMContentLoaded", () => {
  const darkToggle = document.getElementById("darkModeToggle");
  const languageSelector = document.getElementById("languageSelector");

  // 🌓 Dark Mode
  const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  };

  const storedDarkMode = localStorage.getItem("darkMode");
  if (storedDarkMode === "enabled") enableDarkMode();

  darkToggle.addEventListener("click", () => {
    document.body.classList.contains("dark-mode") ? disableDarkMode() : enableDarkMode();
  });

  // 🌐 Translation
  const translations = {
    en: {
      navHome: "Home",
      navAbout: "About",
      navSkills: "Skills",
      navPath: "Education",
      navCV: "Resume",
      navProjects: "Projects",
      navDashboard: "Admin",
      navContact: "Contact",
      heroDesc: "Full Stack Web Developer",
      aboutTitle: "About Me",
      aboutText: "Motivated graduate with a Bachelor in Mathematical Sciences, IT and Applications...",
      skillsTitle: "Skills",
      pathTitle: "Path",
      path1: "Training: Web Development & Solutions (2025) - web4jobs",
      path2: "Bachelor: Mathematical Sciences and Applications (2021-2024) - FPO Ouarzazate",
      path3: "Baccalaureate: Physical Sciences (2020-2021) - Lycée Mohamed VI, Alnif",
      cvTitle: "My Resume",
      projectTitle: "Projects",
      dashboardTitle: "Admin Area",
      addBtn: "Add",
      contactTitle: "Contact",
      socialText: "You can also find me on:"
    },
    fr: {
      navHome: "Accueil",
      navAbout: "À propos",
      navSkills: "Compétences",
      navPath: "Parcours",
      navCV: "CV",
      navProjects: "Projets",
      navDashboard: "Admin",
      navContact: "Contact",
      heroDesc: "Développeuse Web Full Stack",
      aboutTitle: "À propos de moi",
      aboutText: "Jeune lauréate motivée, titulaire d’un diplôme Bac+3 en Sciences Mathématiques, Informatiques et Applications...",
      skillsTitle: "Compétences",
      pathTitle: "Parcours",
      path1: "Formation: développement & solutions (2025) - web4jobs",
      path2: "Licence: Sciences mathématiques, informatiques et applications (2021-2024) - FPO Ouarzazate",
      path3: "Baccalauréat: Sciences physiques (2020-2021) - Lycée Mohamed VI, Alnif",
      cvTitle: "Mon CV",
      projectTitle: "Projets",
      dashboardTitle: "Espace Admin",
      addBtn: "Ajouter",
      contactTitle: "Contact",
      socialText: "Vous pouvez également me trouver sur :"
    }
  };

  function translate(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
  }

  // Load stored lang
  const savedLang = localStorage.getItem("lang") || "fr";
  languageSelector.value = savedLang;
  translate(savedLang);

  // Change language
  languageSelector.addEventListener("change", () => {
    const selectedLang = languageSelector.value;
    localStorage.setItem("lang", selectedLang);
    translate(selectedLang);
  });
});