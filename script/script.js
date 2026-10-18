const translations = {
  fr: {
    navHome: "Accueil", navAbout: "À propos", navAchievements: "Distinctions", navProjects: "Projets",
    heroTitle: "Salut, moi c'est Maël", heroSubtitle: "Étudiant Game Programming · ICAN",
    aboutEyebrow: "ENCHANTÉ !", aboutHeading: "Salut, moi c'est Maël.",
    aboutDescription: "Je suis Maël, étudiant en Game Programming à l'ICAN. J'aime développer des mécaniques de gameplay et expérimenter avec des systèmes interactifs.",
    aboutExperience:
    "J'ai notamment développé des contrôleurs de personnage, " +
    "des comportements ennemis, des systèmes de replay et " +
    "des interactions audio, sur des projets individuels " +
    "et en équipe.",
    aboutButton: "Voir mes réalisations", awardsEyebrow: "MON PARCOURS",
    awardsEyebrow: "DISTINCTIONS",

awardsHeading: "Quelques moments marquants.",

awardsDescription:
    "Des projets qui m'ont permis de progresser " +
    "et de vivre de belles expériences.",

awardOneTitle: "Grand Prix MSI - 1er prix",

awardOneDescription:
    "Première place remportée en équipe " +
    "lors de la Game Jam ICAN x MSI.",

awardOneLink: "Voir la publication ↗",

awardTwoCategory: "45e CONCOURS DE BOULOGNE-BILLANCOURT",

awardTwoTitle: "Sélection au second tour",

awardTwoDescription:
    "Jeu de plateau sélectionné pour le second " +
    "tour du concours de Boulogne-Billancourt.",


projectsEyebrow: "MES PROJETS",

projectsHeading: "Featured Projects",

projectsDescription:
    "Quelques jeux et systèmes sur lesquels " +
    "j'ai eu l'occasion de travailler.",

nineLivesDescription:
    "Jeu créé en équipe lors d'une Game Jam remportée " +
    "à la première place. Développement du Character " +
    "Controller, du replay et du système audio.",

nineLivesButton: "Voir la distinction ↗",

swarmzDescription:
    "Shoot'em up 2D avec pathfinding, comportements " +
    "ennemis, brouillard directionnel et indicateurs " +
    "de gameplay.",

playSwarmz: "Jouer à SwarmZ ↗",

    pauseVideo: "Mettre la vidéo en pause", playVideo: "Lire la vidéo"
  },

  en: {
    navHome: "Home", navAbout: "About", navAchievements: "Achievements", navProjects: "Projects",
    heroTitle: "Hey, I'm Maël", heroSubtitle: "Game Programming Student · ICAN",
    aboutEyebrow: "NICE TO MEET YOU!", aboutHeading: "Hey, I'm Maël.",
    aboutDescription: "I'm Maël, a Game Programming student at ICAN. I enjoy building gameplay mechanics and experimenting with interactive systems.",
    aboutExperience:
    "I've worked on character controllers, enemy behaviors, " +
    "replay systems and audio interactions, both individually " +
    "and in teams.",
    aboutButton: "See my achievements", awardsEyebrow: "MY JOURNEY",
    
awardsEyebrow: "ACHIEVEMENTS",

awardsHeading: "A few highlights along the way.",

awardsDescription:
    "Some memorable milestones from projects " +
    "I've worked on.",

awardOneTitle: "Grand Prix MSI - 1st Place",

awardOneDescription:
    "Our team won first place at the " +
    "ICAN x MSI Game Jam.",

awardOneLink: "View Announcement ↗",

awardTwoCategory: "BOULOGNE-BILLANCOURT 45TH BOARD GAME COMPETITION",

awardTwoTitle: "Selected for the Second Round",

awardTwoDescription:
    "Board game selected for the second round " +
    "of the Boulogne-Billancourt competition.",

    
projectsEyebrow: "SELECTED WORK",

projectsHeading: "Featured Projects",

projectsDescription:
    "A selection of games and systems I've worked on.",

nineLivesDescription:
    "A team project that won first place at a Game Jam. " +
    "I developed the character controller, clone replay " +
    "system and audio interactions.",

nineLivesButton: "View Achievement ↗",

swarmzDescription:
    "2D top-down shooter featuring enemy pathfinding, " +
    "ranged enemies, directional fog of war " +
    "and gameplay feedback indicators.",

playSwarmz: "Play SwarmZ ↗",


    pauseVideo: "Pause video", playVideo: "Play video"
  }
};

const video = document.getElementById('hero-video');
const videoControl = document.getElementById('hero-video-control');
let language = 'fr';
try { language = localStorage.getItem('zeph-language') || 'fr'; } catch (e) {}
if (!translations[language]) language = 'fr';
function updateVideoButton() {
  if (!video || !videoControl) return;
  videoControl.textContent = video.paused ? '▶' : '❚❚';
  videoControl.setAttribute('aria-label', translations[language][video.paused ? 'playVideo' : 'pauseVideo']);
}
function setLanguage(lang) {
  if (!translations[lang]) return;
  language = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const translated = translations[lang][el.dataset.i18n];
    if (translated !== undefined) el.textContent = translated;
  });
  document.querySelectorAll('.lang-button').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang)));
  try { localStorage.setItem('zeph-language', lang); } catch(e) {}
  updateVideoButton();
}
document.querySelectorAll('.lang-button').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
if (video && videoControl) {
  videoControl.addEventListener('click', async () => {
    if (video.paused) { try { await video.play(); } catch(e) { console.warn('Video unavailable', e); } }
    else video.pause();
    updateVideoButton();
  });
  video.addEventListener('pause', updateVideoButton);
  video.addEventListener('play', updateVideoButton);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) video.pause();
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
setLanguage(language);
