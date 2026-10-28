
/* =========================================
   SWARMZ — TRANSLATIONS
========================================= */

const translations = {

    fr: {

        back: "← Retour aux projets",
        backHome: "Retour à l'accueil ↑",

        lead:
            "Un shoot'em up 2D conçu autour de la pression " +
            "ennemie, d'une visibilité directionnelle " +
            "et du scoring arcade.",

        mediaCaption:
            "Aperçu de gameplay · remplaçable par une vidéo",

        roleLabel: "RÔLE",
        engineLabel: "MOTEUR",
        contextLabel: "CONTEXTE",

        context:
            "Projet étudiant en équipe · ICAN",

        focusLabel: "COMPÉTENCES",

        play: "Jouer dans le navigateur ↗",
        technicalLink: "Découvrir mon travail ↓",

        overviewTitle: "Le projet",

        overviewText:
            "SwarmZ est un shoot'em up 2D top-down " +
            "réalisé en équipe. Mon travail s'est concentré " +
            "sur les comportements ennemis, le pathfinding, " +
            "le brouillard directionnel et les informations " +
            "affichées au joueur.",

        responsibilityTitle: "Ma contribution",

        responsibilityText:
            "Les sections suivantes détaillent uniquement " +
            "les systèmes sur lesquels j'ai travaillé, " +
            "et non l'intégralité du développement du jeu.",

        contribTitle: "Mes contributions techniques",

        
        fogRenderingTitle: "Rendu du brouillard",
        fogEnemyTitle: "Visibilité des ennemis",

        fogStepDraw: "01 — Dessin du brouillard",
        fogStepCut: "02 — Découpe de visibilité",
        fogStepFinal: "03 — Rendu final",

        fogTransitionCut: "Destination Out — Découpe des zones visibles",
        fogTransitionRender: "Superposition avec le gameplay",

        fogDemoNote:
            "Cette démonstration est une représentation simplifiée " +
            "des zones de détection, et non une reproduction du " +
            "rendu interne de Construct 3.",


        inspiration: "Inspiration :",

        referenceNote:
            "Une inspiration de game design, " +
            "pas une reproduction de son implémentation.",

        demoTitle: "Schéma interactif de visibilité",
        demoSimplified: "Représentation simplifiée",
        angleLabel: "Orientation du joueur",

        visible: "Ennemi visible",
        hidden: "Ennemi masqué",

        aiTitle: "Enemy AI & Pathfinding",

aiIntro:
    "Les ennemis de SwarmZ partagent une logique commune de ciblage " +
    "et de navigation, puis appliquent chacun leur propre comportement " +
    "en fonction de leur type.",

aiTargetTitle: "Acquisition de cible",

aiTargetText:
    "Lorsqu'un joueur traverse le champ de vision d'un ennemi, " +
    "il devient sa cible. Une fois ciblé, le joueur n'est jamais " +
    "oublié : l'ennemi continue ensuite à le traquer en permanence.",

aiNavigationTitle: "Navigation et obstacles",

aiNavigationText:
    "Les bâtiments du niveau sont enregistrés comme des obstacles, " +
    "ce qui permet aux ennemis d'utiliser le pathfinding pour " +
    "contourner l'environnement tout en poursuivant leur cible.",

aiVariantsTitle: "Comportements spécifiques",

aiVariantsText:
    "Les trois ennemis partagent cette base de détection et de poursuite, " +
    "mais chacun possède un comportement propre une fois le joueur ciblé.",

aiDogTitle: "Chien",

aiDogText:
    "Le chien est un ennemi de poursuite directe. " +
    "Il connaît toujours la position du joueur et le traque en continu.",

aiRangedTitle: "Ennemi à distance",

aiRangedText:
    "L'ennemi fin tire un projectile dans la direction du joueur " +
    "s'il conserve un visuel sur lui pendant au moins trois secondes.",

aiHeavyTitle: "Ennemi lourd",

aiHeavyText:
    "L'ennemi lourd agit comme une source de pression supplémentaire : " +
    "il peut faire apparaître les deux autres types d'ennemis " +
    "ou créer une flaque d'acide au sol.",

        hudText:
            "J'ai travaillé sur les indicateurs d'arrivée " +
            "de projectiles, la perception sonore des ennemis " +
            "cachés par le brouillard, ainsi que sur le score " +
            "et le multiplicateur.",

        hudCaption:
            "Exemples d'indicateurs abstraits. " +
            "Ajouter ensuite une vraie capture annotée " +
            "du HUD de SwarmZ.",

        lessonsTitle: "Difficultés et apprentissages",

        lessonsText:
            "À compléter avec des exemples concrets : " +
            "problème rencontré, solution testée, résultat " +
            "obtenu. Il vaut mieux un seul cas précis " +
            "qu'une liste de généralités.",

        teamIntro:
            "Projet réalisé en équipe. Les noms, rôles " +
            "et portfolios des autres membres seront " +
            "ajoutés avec leur accord.",

        teamPlaceholder: "Autres membres de l'équipe",

        teamRole:
            "Noms, rôles et liens vers leurs portfolios à compléter",

        resourcesTitle: "Jouer et en savoir plus",

        resourcesIntro:
            "Teste le jeu ou découvre la documentation " +
            "de conception associée au projet.",

        godPending:
            "Document PDF à ajouter après vérification " +
            "des autorisations de partage.",

        storePending:
            "Nous travaillons encore sur la page officielle du projet, un lien sera ajouté dès qu'elle sera disponible. ",

            erwannName: "Erwann Loury",
erwannRole: "Game Design · Sound Design",
erwannPortfolio: "Voir son portfolio ↗",

nilName: "Nil Augé-Dedieu",
        nilRole: "Game Art - Sound Design",
    },


    en: {

        back: "← Back to projects",
        backHome: "Back to homepage ↑",

        lead:
            "A 2D top-down shooter built around enemy " +
            "pressure, directional visibility and arcade scoring.",

        mediaCaption:
            "Gameplay preview · replace with a video",

        roleLabel: "ROLE",
        engineLabel: "ENGINE",
        contextLabel: "CONTEXT",

        context:
            "Student team project · ICAN",

        focusLabel: "FOCUS",

        play: "Play in browser ↗",
        technicalLink: "Explore my work ↓",

        overviewTitle: "Project overview",

        overviewText:
            "SwarmZ is a team-developed 2D top-down shooter. " +
            "My work focused on enemy behavior, pathfinding, " +
            "directional fog of war and gameplay feedback " +
            "for the player.",

        responsibilityTitle: "My contribution",

        responsibilityText:
            "The following sections cover the systems " +
            "I personally worked on, rather than claiming " +
            "the full game as my work.",

        contribTitle: "My technical contributions",

        
        fogRenderingTitle: "Fog Rendering",
        fogEnemyTitle: "Enemy Visibility",

        fogStepDraw: "01 — Drawing the Fog",
        fogStepCut: "02 — Visibility Cutout",
        fogStepFinal: "03 — Final Rendering",

        fogTransitionCut: "Destination Out — Revealing visible areas",
        fogTransitionRender: "Composited over gameplay",

        fogDemoNote:
            "This interactive demonstration is a simplified " +
            "representation of the detection areas, not a " +
            "reproduction of Construct 3's internal rendering.",


        inspiration: "Inspiration:",

        referenceNote:
            "A game-design inspiration, not a copy " +
            "of its implementation.",

        demoTitle: "Interactive visibility diagram",
        demoSimplified: "Simplified illustration",
        angleLabel: "Player facing direction",

        visible: "Visible enemy",
        hidden: "Hidden enemy",

        aiTitle: "Enemy AI & Pathfinding",

aiIntro:
    "SwarmZ enemies share a common targeting and navigation logic, " +
    "then apply their own behavior depending on their type.",

aiTargetTitle: "Target Acquisition",

aiTargetText:
    "When the player enters an enemy's line of sight, " +
    "they become that enemy's target. Once acquired, the target " +
    "is never lost: the enemy continues tracking the player permanently.",

aiNavigationTitle: "Navigation & Obstacles",

aiNavigationText:
    "Buildings are registered as navigation obstacles, " +
    "allowing enemies to use pathfinding to move around the environment " +
    "while continuing to pursue their target.",

aiVariantsTitle: "Specific Behaviors",

aiVariantsText:
    "All three enemies share the same detection and pursuit foundation, " +
    "but each one applies a different behavior once the player has been targeted.",

aiDogTitle: "Dog",

aiDogText:
    "The dog is a direct pursuit enemy. " +
    "It always knows the player's position and continuously tracks them.",

aiRangedTitle: "Ranged Enemy",

aiRangedText:
    "The thin enemy fires a projectile toward the player " +
    "if it maintains line of sight for at least three seconds.",

aiHeavyTitle: "Heavy Enemy",

aiHeavyText:
    "The heavy enemy acts as an additional pressure source: " +
    "it can spawn the two other enemy types or create a puddle of acid on the ground.",

        hudText:
            "I worked on incoming projectile warnings, " +
            "audio-based indicators for enemies obscured by fog, " +
            "and the score and multiplier system.",

        hudCaption:
            "Abstract indicator examples. Add an annotated " +
            "screenshot of the actual SwarmZ HUD later.",

        lessonsTitle: "Challenges & lessons",

        lessonsText:
            "Add concrete examples: the problem, " +
            "the solution you tested, and the outcome. " +
            "One specific case is better than a list " +
            "of generic statements.",

        teamIntro:
            "This game was developed by a team. " +
            "Teammates' names, roles and portfolio links " +
            "will be added with their permission.",

        teamPlaceholder: "Other team members",

        teamRole:
            "Names, roles and portfolio links to complete",

        resourcesTitle: "Play & resources",

        resourcesIntro:
            "Try the game or explore the project's " +
            "design documentation.",


        readGOD:
            "Read the GOD ↗",

        storePending:
            "We are still working on the official project page, a link will be added once it's available. " ,

            erwannName: "Erwann Loury",
erwannRole: "Game Design · Sound Design",
erwannPortfolio: "See his portfolio ↗",

        nilName: "Nil Augé-Dedieu",
        nilRole: "Game Art - Sound Design",
    }
};


/* =========================================
   LANGUAGE SYSTEM
========================================= */

let language = "fr";

// Restore the language selected on the homepage
try {
    language = localStorage.getItem("zeph-language") || "fr";
} catch (error) {
    console.warn("Language preference unavailable", error);
}

if (!translations[language]) {
    language = "fr";
}


function setLanguage(lang) {

    if (!translations[lang]) return;

    language = lang;

    document.documentElement.lang = lang;

    // Translate text
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;
        const translation = translations[lang][key];

        if (translation !== undefined) {
            element.textContent = translation;
        }

    });

    // Update language buttons
    document.querySelectorAll(".lang-button").forEach(button => {

        button.setAttribute(
            "aria-pressed",
            String(button.dataset.lang === lang)
        );

    });

    // Remember selection
    try {
        localStorage.setItem("zeph-language", lang);
    } catch (error) {
        console.warn("Could not save language", error);
    }
}


// Language buttons
document.querySelectorAll(".lang-button").forEach(button => {

    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
    });

});

// Initial translation
setLanguage(language);


/* =========================================
   INTERACTIVE FOG OF WAR
========================================= */

const slider = document.querySelector("#facing-angle");

const rotator = document.querySelector("#vision-rotator");

const angleOutput = document.querySelector("#angle-output");

const enemies = [
    ...document.querySelectorAll(".demo-enemy")
];

// Demonstration settings
const playerX = 280;
const playerY = 165;

// These values are illustrative, not SwarmZ's actual values
const visionDistance = 260;
const halfVisionAngle = Math.PI / 6;


function updateFogDemo() {

    if (!slider || !rotator || !angleOutput) {
        return;
    }

    // Current orientation
    const degrees = Number(slider.value);
    const radians = degrees * MathfDegToRad();

    // Rotate the displayed vision cone
    rotator.setAttribute(
        "transform",
        `rotate(${degrees} ${playerX} ${playerY})`
    );

    // Update displayed angle
    angleOutput.textContent = `${degrees}°`;

    // Check each enemy
    for (const enemy of enemies) {

        const enemyX = Number(enemy.dataset.x);
        const enemyY = Number(enemy.dataset.y);

        const dx = enemyX - playerX;
        const dy = enemyY - playerY;

        // Distance between player and enemy
        const distance = Math.hypot(dx, dy);

        // Enemy angle relative to the player
        const enemyAngle = Math.atan2(dy, dx);

        // Angle relative to the player's orientation
        const relativeAngle = enemyAngle - radians;

        // Normalize between -PI and PI
        const normalizedAngle = Math.atan2(
            Math.sin(relativeAngle),
            Math.cos(relativeAngle)
        );

        // Visibility check
        const isVisible =
            distance <= visionDistance &&
            Math.abs(normalizedAngle) <= halfVisionAngle;

        // Update enemy color
        enemy.classList.toggle("visible", isVisible);
    }
}


// Simple conversion helper
function MathfDegToRad() {
    return Math.PI / 180;
}


// Update demo when slider changes
if (slider) {
    slider.addEventListener("input", updateFogDemo);
}

// Initial state
updateFogDemo();


/* =========================================
   FOOTER
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ============================
   ENEMY BEHAVIOR TABS
============================ */

function initEnemyTabs() {
    const tabs = document.querySelectorAll(".enemy-tab");
    const panels = document.querySelectorAll(".enemy-panel");

    if (!tabs.length || !panels.length) return;

    function selectEnemy(enemyName) {
        tabs.forEach(tab => {
            const active = tab.dataset.enemy === enemyName;

            tab.classList.toggle("is-active", active);
            tab.setAttribute("aria-selected", String(active));
            tab.tabIndex = active ? 0 : -1;
        });

        panels.forEach(panel => {
            const active = panel.id === `enemy-panel-${enemyName}`;
            panel.hidden = !active;
            panel.classList.toggle("is-active", active);
        });
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            selectEnemy(tab.dataset.enemy);
        });

        tab.addEventListener("keydown", event => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
                return;
            }

            event.preventDefault();

            let nextIndex = index;

            if (event.key === "ArrowRight") {
                nextIndex = (index + 1) % tabs.length;
            } else if (event.key === "ArrowLeft") {
                nextIndex = (index - 1 + tabs.length) % tabs.length;
            } else if (event.key === "Home") {
                nextIndex = 0;
            } else if (event.key === "End") {
                nextIndex = tabs.length - 1;
            }

            selectEnemy(tabs[nextIndex].dataset.enemy);
            tabs[nextIndex].focus();
        });
    });

    selectEnemy("dog");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEnemyTabs);
} else {
    initEnemyTabs();
}

