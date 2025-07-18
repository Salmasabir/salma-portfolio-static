// main.js

const languageSelector = document.getElementById("languageSelector");
const darkModeToggle = document.getElementById("darkModeToggle");

const translations = {
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
    aboutText: "Jeune lauréate motivée, titulaire d’un diplôme Bac+3 en Sciences Mathématiques, Informatiques et Applications. Je dispose d’une solide formation en développement web et en gestion de bases de données.",
    skillsTitle: "Compétences",
    pathTitle: "Parcours",
    pathDescription: "Voici mon parcours académique et professionnel :",
    path1: "Formation: développement & solutions (2025) - web4jobs",
    path2: "Licence: Sciences mathématiques, informatiques et applications (2021-2024) - Faculté polydisciplinaire Ouarzazate",
    path3: "Baccalauréat: Sciences physiques (2020-2021) - Lycée Mohamed VI, Alnif",
    cvTitle: "Mon CV",
    cvDescription: "Voici un aperçu de mon CV :",
    projectTitle: "Projets",
    projectDescription: "Quelques projets réalisés dans le cadre de ma formation et à titre personnel.",
    dashboardTitle: "Espace Admin",
    addBtn: "Ajouter",
    contactTitle: "Contact",
    contactNote: "Je suis toujours ouvert aux nouvelles opportunités. N'hésitez pas à me contacter..",
    socialText: "Vous pouvez également me trouver sur :",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    discordLabel: "Discord"
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navPath: "Path",
    navCV: "CV",
    navProjects: "Projects",
    navDashboard: "Admin",
    navContact: "Contact",
    heroDesc: "Full Stack Web Developer",
    aboutTitle: "About Me",
    aboutText: "Motivated young graduate with a Bachelor's degree in Mathematical Sciences, Computer Science and Applications. I have solid training in web development and database management.",
    skillsTitle: "Skills",
    pathTitle: "My Path",
    pathDescription: "Here is my academic and professional background:",
    path1: "Training: Web Development & Solutions (2025) - web4jobs",
    path2: "Bachelor’s: Mathematical Sciences, Computer Science and Applications (2021-2024) - Multidisciplinary Faculty of Ouarzazate",
    path3: "Baccalaureate: Physical Sciences (2020-2021) - Mohamed VI High School, Alnif",
    cvTitle: "My Resume",
    cvDescription: "Here is a preview of my CV:",
    projectTitle: "Projects",
    projectDescription: "Some projects completed as part of my training and personal initiatives.",
    dashboardTitle: "Admin Area",
    addBtn: "Add",
    contactTitle: "Contact",
    contactNote: "I am always open to new opportunities. Feel free to contact me.",
    socialText: "You can also find me on:",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    discordLabel: "Discord"
  }
};

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.getElementById("nav-home").textContent = t.navHome;
  document.getElementById("nav-about").textContent = t.navAbout;
  document.getElementById("nav-skills").textContent = t.navSkills;
  document.getElementById("nav-path").textContent = t.navPath;
  document.getElementById("nav-cv").textContent = t.navCV;
  document.getElementById("nav-projects").textContent = t.navProjects;
  document.getElementById("nav-dashboard").textContent = t.navDashboard;
  document.getElementById("nav-contact").textContent = t.navContact;

  document.querySelector(".hero p").textContent = t.heroDesc;

  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-text").textContent = t.aboutText;

  document.getElementById("skills-title").textContent = t.skillsTitle;

  document.getElementById("path-title").textContent = t.pathTitle;
  document.getElementById("path-description").textContent = t.pathDescription;
  document.getElementById("path1").textContent = t.path1;
  document.getElementById("path2").textContent = t.path2;
  document.getElementById("path3").textContent = t.path3;

  document.getElementById("cv-title").textContent = t.cvTitle;
  document.getElementById("cv-description").textContent = t.cvDescription;

  document.getElementById("project-title").textContent = t.projectTitle;
  document.getElementById("project-description").textContent = t.projectDescription;

  document.getElementById("dashboard-title").textContent = t.dashboardTitle;
  document.getElementById("add-btn").textContent = t.addBtn;

  document.getElementById("contact-title").textContent = t.contactTitle;
  document.getElementById("contact-note").textContent = t.contactNote;

  document.getElementById("social-text").textContent = t.socialText;
  document.getElementById("github-label").textContent = t.githubLabel;
  document.getElementById("linkedin-label").textContent = t.linkedinLabel;
  document.getElementById("discord-label").textContent = t.discordLabel;
}

languageSelector.addEventListener("change", (e) => {
  applyTranslations(e.target.value);
});

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Apply default language on load
window.addEventListener("DOMContentLoaded", () => {
  applyTranslations(languageSelector.value || "fr");
});