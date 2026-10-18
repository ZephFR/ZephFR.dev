const translations = {
  fr: {
    navHome: "Accueil", navAbout: "À propos", navAchievements: "Distinctions",
    heroTitle: "Salut, moi c'est Maël", heroSubtitle: "Étudiant Game Programming · ICAN",
    aboutEyebrow: "ENCHANTÉ !", aboutHeading: "Salut, moi c'est Maël.",
    aboutDescription: "Je suis Maël, étudiant en Game Programming à l'ICAN. J'aime développer des mécaniques de gameplay et expérimenter avec des systèmes interactifs.",
    aboutButton: "Voir mes réalisations", awardsEyebrow: "MON PARCOURS",
    awardsHeading: "Distinctions & Réalisations", awardOneTitle: "1re place — 9 Lives Ago",
    awardOneDescription: "Première place remportée en équipe lors de la Game Jam ICAN × MSI.",
    awardTwoTitle: "Second tour — Tetris Summit",
    awardTwoDescription: "Jeu de plateau sélectionné pour le second tour du concours.",
    pauseVideo: "Mettre la vidéo en pause", playVideo: "Lire la vidéo"
  },
  en: {
    navHome: "Home", navAbout: "About", navAchievements: "Achievements",
    heroTitle: "Hey, I'm Maël", heroSubtitle: "Game Programming Student · ICAN",
    aboutEyebrow: "NICE TO MEET YOU!", aboutHeading: "Hey, I'm Maël.",
    aboutDescription: "I'm Maël, a Game Programming student at ICAN. I enjoy building gameplay mechanics and experimenting with interactive systems.",
    aboutButton: "See my achievements", awardsEyebrow: "MY JOURNEY",
    awardsHeading: "Awards & Achievements", awardOneTitle: "1st Place — 9 Lives Ago",
    awardOneDescription: "First place awarded to our team at the ICAN × MSI Game Jam.",
    awardTwoTitle: "Second Round — Tetris Summit",
    awardTwoDescription: "Board game selected for the second round of the competition.",
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
