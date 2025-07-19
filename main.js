// main.js


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
      aboutText: "Motivated recent graduate with a Bachelor's degree (Bac+3) in Mathematical Sciences, Computer Science, and Applications. I have a strong background in web development and database management",
      skillsTitle: "Skills",
      pathTitle: "Path",
      pathText: "Here is an overview of my past studies and training.",
      path1: "Training: Web Development & Solutions (2025) - web4jobs",
      path2: "Bachelor: Mathematical Sciences and Applications (2021-2024) - FPO Ouarzazate",
      path3: "Baccalaureate: Physical Sciences (2020-2021) - Lycée Mohamed VI, Alnif",
      cvTitle: "My Resume",
      projectTitle: "Projects",
      contactTitle: "Contact",
      contactText: "I am always open to new opportunities. Feel free to contact me.",
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
      aboutText: " Jeune lauréate motivée, titulaire d’un diplôme Bac+3 en Sciences Mathématiques, Informatiques et Applications. Je dispose d’une solide formation en développement web et en gestion de bases de données.",
      skillsTitle: "Compétences",
      pathTitle: "Parcours",
      pathText: "Voici un aperçu de mes études et formations passées",
      path1: "Formation: développement & solutions (2025) - web4jobs",
      path2: "Licence: Sciences mathématiques, informatiques et applications (2021-2024) - FPO Ouarzazate",
      path3: "Baccalauréat: Sciences physiques (2020-2021) - Lycée Mohamed VI, Alnif",
      cvTitle: "Mon CV",
      projectTitle: "Projets",
      contactTitle: "Contact",
      contactText: "Je suis toujours ouvert aux nouvelles opportunités. N'hésitez pas à me contacter.",
      socialText: "Vous pouvez également me trouver sur :"
    }
  };

  function translate(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
  }

 // Language switch
const languageSelector = document.getElementById("languageSelector");

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
}

languageSelector.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  updateLanguage(selectedLang);
});

// Par défaut FR
updateLanguage("fr");

// Dark Mode
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});