const examinationWiki = "https://examination.miraheze.org/wiki";
const enemyCatalog = [
  {
    label: "Regulars",
    enemies: [
      { name: "LURKER", image: "https://static.wikitide.net/examinationwiki/thumb/7/7b/Engineer_Lurker.png/305px-Engineer_Lurker.png" },
      { name: "MUTANT", image: "https://static.wikitide.net/examinationwiki/thumb/a/aa/Engineer_Mutant.png/304px-Engineer_Mutant.png" },
      { name: "CRAWLER", image: "https://static.wikitide.net/examinationwiki/thumb/4/48/Crawler.png/360px-Crawler.png" },
      { name: "GRABBY", image: "https://static.wikitide.net/examinationwiki/thumb/9/96/Grabby.png/360px-Grabby.png" },
      { name: "BARNACLES", image: "https://static.wikitide.net/examinationwiki/thumb/9/92/Barnacles.png/540px-Barnacles.png" },
      { name: "RISER", image: "https://static.wikitide.net/examinationwiki/thumb/8/8b/HPCA_Riser.png/322px-HPCA_Riser.png" },
      { name: "KAMIKAZE", image: "https://static.wikitide.net/examinationwiki/thumb/f/fd/HPCA_Kamikaze.png/313px-HPCA_Kamikaze.png" },
      { name: "SHIELDER", image: "https://static.wikitide.net/examinationwiki/thumb/e/e5/MNPA_Shielder_2.png/299px-MNPA_Shielder_2.png" },
      { name: "SLASHER", image: "https://static.wikitide.net/examinationwiki/thumb/4/4f/HPCA_Slasher.png/312px-HPCA_Slasher.png" },
      { name: "RADAWAY", image: "https://static.wikitide.net/examinationwiki/thumb/f/f4/Radaway.png/276px-Radaway.png" },
      { name: "GUNNER", image: "https://static.wikitide.net/examinationwiki/thumb/b/bc/RSU_Gunner_1.png/337px-RSU_Gunner_1.png" },
      { name: "FURY", image: "https://static.wikitide.net/examinationwiki/thumb/6/68/RSU_Fury_2.png/325px-RSU_Fury_2.png" },
      { name: "ENGINEER", image: "https://static.wikitide.net/examinationwiki/thumb/d/d8/Engineer.png/262px-Engineer.png" },
      { name: "VORAX", image: "https://static.wikitide.net/examinationwiki/thumb/d/d2/RSU_Vorax.png/257px-RSU_Vorax.png" },
      { name: "DECEIVER", image: "https://static.wikitide.net/examinationwiki/thumb/e/e1/Standard_Deceiver.png/346px-Standard_Deceiver.png" },
    ],
  },
  {
    label: "Virals",
    enemies: [
      { name: "VIRAL RUNNER", image: "https://static.wikitide.net/examinationwiki/thumb/c/cf/Viral_Standard.png/313px-Viral_Standard.png" },
      { name: "VIRAL EXECUTIONER", image: "https://static.wikitide.net/examinationwiki/thumb/2/25/Standard_Executioner.png/321px-Standard_Executioner.png" },
      { name: "VIRAL LEADER", image: "https://static.wikitide.net/examinationwiki/thumb/0/03/Viral_Leader.png/333px-Viral_Leader.png" },
      { name: "VIRAL ENFORCER", image: "https://static.wikitide.net/examinationwiki/thumb/9/9f/Viral_Enforcer.png/305px-Viral_Enforcer.png" },
    ],
  },
  {
    label: "Rasonians",
    enemies: [
      { name: "INFANTRYMAN", image: "https://static.wikitide.net/examinationwiki/thumb/a/a3/RIF_Infantryman.png/332px-RIF_Infantryman.png" },
      { name: "COMBAT MEDIC", image: "https://static.wikitide.net/examinationwiki/thumb/7/79/RIF_Combat_Medic.png/284px-RIF_Combat_Medic.png" },
      { name: "SHOTGUNNER", image: "https://static.wikitide.net/examinationwiki/thumb/5/50/RIF_Shotgunner.png/298px-RIF_Shotgunner.png" },
      { name: "MACHINE GUNNER", image: "https://static.wikitide.net/examinationwiki/thumb/2/2a/RIF_Machine_Gunner.png/354px-RIF_Machine_Gunner.png" },
      { name: "SHIELDER", image: "https://static.wikitide.net/examinationwiki/thumb/d/d9/RIF_Shielder.png/333px-RIF_Shielder.png" },
    ],
  },
  {
    label: "Mini-Bosses",
    enemies: [
      { name: "LEAPER", image: "https://static.wikitide.net/examinationwiki/thumb/5/54/Leaper.png/284px-Leaper.png" },
      { name: "MIKHAIL WILLIAMS", image: "https://static.wikitide.net/examinationwiki/thumb/c/cc/Mikhail_Williams.png/307px-Mikhail_Williams.png" },
      { name: "DAVE", image: "https://static.wikitide.net/examinationwiki/thumb/6/6d/Dave_Render.webp/360px-Dave_Render.webp.png" },
      { name: "YAKOV ZHUKOV", image: "https://static.wikitide.net/examinationwiki/thumb/d/d1/Yakov_Zhukov_Render.png/360px-Yakov_Zhukov_Render.png" },
    ],
  },
  {
    label: "Bosses",
    enemies: [
      { name: "GILBERT", image: "https://static.wikitide.net/examinationwiki/thumb/b/b7/Gilbert_Var_2.png/296px-Gilbert_Var_2.png" },
      { name: "CHIMERA", image: "https://static.wikitide.net/examinationwiki/thumb/d/dc/Chimera_Var_2.png/306px-Chimera_Var_2.png" },
      { name: "SINITZYN 'SIN' KOMAREK", image: "https://static.wikitide.net/examinationwiki/thumb/d/d6/Sinitzyn_Komarek.png/348px-Sinitzyn_Komarek.png" },
      { name: "CERBERUS", image: "https://static.wikitide.net/examinationwiki/thumb/c/c9/Cerberus_V2.png/540px-Cerberus_V2.png" },
      { name: "D-ZERO", image: "https://static.wikitide.net/examinationwiki/thumb/8/8a/D-Zero_Var_2.png/274px-D-Zero_Var_2.png" },
    ],
  },
  {
    label: "City Infected",
    enemies: [
      { name: "RUNNER", image: "https://static.wikitide.net/examinationwiki/thumb/3/3c/Civilian_City_Runner.png/340px-Civilian_City_Runner.png" },
      { name: "CITY SHIELDER", image: "https://static.wikitide.net/examinationwiki/thumb/c/cd/MNPA_City_Shielder.png/315px-MNPA_City_Shielder.png" },
      { name: "CITY FURY", image: "https://static.wikitide.net/examinationwiki/thumb/1/10/City_Fury.png/299px-City_Fury.png" },
      { name: "DREADNOUGHT", image: "https://static.wikitide.net/examinationwiki/thumb/6/68/City_Dreadnought.png/326px-City_Dreadnought.png" },
    ],
  },
];
const backgroundRenders = [
  "assets/background-renders/render-01.webp",
  "assets/background-renders/render-02.webp",
  "assets/background-renders/render-03.webp",
  "assets/background-renders/render-04.webp",
  "assets/background-renders/render-05.webp",
  "assets/background-renders/render-06.webp",
  "assets/background-renders/render-07.webp",
  "assets/background-renders/render-08.webp",
  "assets/background-renders/render-09.webp",
  "assets/background-renders/render-10.webp",
];
const mediaFileDirectories = new Map([
  ["Gilbert's_Execution.mp4", "dc"],
  ["Chimera_Execution.mp4", "82"],
  ["Chimera_P1_TP.mp4", "23"],
  ["Chimera_P2_TP.mp4", "46"],
  ["Chimera_Alt_P2_Execution.mp4", "2a"],
  ["Sinitzyn_P2_Execution.mp4", "2d"],
  ["Sinitzyn_QTE_Success.mp4", "57"],
  ["Official_render_of_Gilbert.png", "70"],
  ["Sinitzyn_QTE_Fail.mp4", "e1"],
  ["Cerberus_Intro_Cutscene.mp4", "6b"],
  ["CI_Turn_1.mp4", "4e"],
  ["CI_Turn_2.mp4", "b0"],
  ["CI_Execution_1.mp4", "6c"],
  ["CI_Execution_2.mp4", "d8"],
  ["CI_Execution_3.mp4", "9a"],
  ["CI_Counter_1.mp4", "85"],
  ["CI_QTE_Death.mp4", "26"],
  ["Taunt_animation.mp4", "9c"],
  ["Lurker_Execution_1.mp4", "0f"],
  ["Lurker_Execution_2.mp4", "5a"],
  ["Lurker_Execution_3.mp4", "e8"],
  ["Mutant_Execution_1.mp4", "f0"],
  ["Mutant_Execution_2.mp4", "3a"],
  ["Mutant_Execution_3.mp4", "a4"],
  ["Mutant.png", "58"],
  ["Mutant_Blocking.png", "b4"],
  ["Lurker_Save.mp4", "6e"],
  ["Lurker_Maul.mp4", "3d"],
  ["Barnacles_Alerted.mp4", "cb"],
  ["Barnacles_Death.mp4", "e9"],
  ["Riser_execution.mp4", "09"],
  ["Riser_save.mp4", "fd"],
  ["Riser_stomp.mp4", "fd"],
  ["Riser_dodge_2.mp4", "ee"],
  ["Riser_Roll.mp4", "62"],
  ["Riser_Fake_death.mp4", "28"],
  ["Enraged_Lurker.mp3", "cb"],
]);

function mediaFileUrl(filename) {
  const directory = mediaFileDirectories.get(filename);
  if (!directory) throw new Error(`Unknown Examination media file: ${filename}`);
  const encodedFilename = encodeURIComponent(filename).replaceAll("'", "%27");
  return `https://static.wikitide.net/examinationwiki/${directory[0]}/${directory}/${encodedFilename}`;
}

const backgroundImages = [
  document.querySelector("#background-image"),
  document.querySelector("#background-image-next"),
];
const showcase = document.querySelector(".showcase");
const backgroundStage = document.querySelector(".background-stage");
const frameScale = document.querySelector("#frame-scale");
const sourceScale = document.querySelector("#source-scale");
const introScreen = document.querySelector("#intro-screen");
const categoryScreen = document.querySelector("#category-screen");
const detailScreen = document.querySelector("#detail-screen");
const detailTitle = document.querySelector("#detail-title");
const detailViewport = document.querySelector("#detail-viewport");
const enemyWikiLink = document.querySelector("#enemy-wiki-link");
const categoryBackButton = document.querySelector("#category-back-button");
const themeSetting = document.querySelector("#theme-setting");
const backgroundMusicSetting = document.querySelector("#background-music-setting");
const settingsStatus = document.querySelector("#settings-status");
const settingsMenu = document.querySelector(".settings-menu");
const settingsMenuSummary = settingsMenu.querySelector("summary");
const settingsControls = settingsMenu.querySelector(".settings-controls");
const mediaModal = document.querySelector("#media-modal");
const mediaPlayer = document.querySelector("#media-player");
const mediaImage = document.querySelector("#media-image");
const reconstructEffect = document.querySelector("#reconstruct-effect");
const analogGhostImage = document.querySelector("#analog-ghost");
const beginButton = document.querySelector("#begin-button");
const backButton = document.querySelector("#back-button");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const imageSceneDuration = 12000;
const minimumBackgroundAspectRatio = 1.6;
const settingsVersion = 3;
const graphicsQualities = ["low", "medium", "high", "extreme"];

let renderQueue = [];
let previousRenderIndex = -1;
const recentRenderLimit = 7;
const recentRenderIndices = [];
const excludedRenderIndices = new Set();
let carouselTimer;
let activeScreen = introScreen;
let pendingScreen = null;
let isTransitioning = false;
let currentEnemyId = null;
let enemyCatalogScrollTop = 0;
let activeMediaTrigger = null;
let activeBackgroundImage = null;
let activeBackgroundRender = null;
let settingsMenuIsAnimating = false;
let settingsPanelHasFinished = false;
let settingsGearHasFinished = true;
let graphicsQualityIndex = getInitialGraphicsQualityIndex();
let settingsMenuTransitionTimer;
const settingsStorageKey = "examination-site-settings";
const backgroundMusicVideoId = "2z5rMNH_yTI";
let backgroundMusicPlayer = null;
let backgroundMusicPlayerReady = false;

function hasActiveForegroundMedia() {
  return [...document.querySelectorAll("audio, video")].some((media) => !media.paused && !media.ended);
}

function createBackgroundMusicPlayer() {
  if (!backgroundMusicSetting.checked || backgroundMusicPlayer || typeof YT === "undefined") return;

  const playerContainer = document.createElement("div");
  playerContainer.id = "background-music-player";
  playerContainer.setAttribute("aria-hidden", "true");
  document.body.append(playerContainer);

  backgroundMusicPlayer = new YT.Player(playerContainer, {
    width: "1",
    height: "1",
    videoId: backgroundMusicVideoId,
    playerVars: {
      autoplay: 0,
      loop: 1,
      playlist: backgroundMusicVideoId,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
    },
    events: {
      onReady: (event) => {
        backgroundMusicPlayerReady = true;
        event.target.setVolume(50);
        enableBackgroundMusic();
      },
      onStateChange: (event) => {
        if (!backgroundMusicSetting.checked) return;
        if (event.data === YT.PlayerState.ENDED && !hasActiveForegroundMedia()) event.target.playVideo();
      },
    },
  });
}

window.onYouTubeIframeAPIReady = () => {
  createBackgroundMusicPlayer();
};

function enableBackgroundMusic() {
  if (!backgroundMusicSetting.checked || hasActiveForegroundMedia()) return;
  if (!backgroundMusicPlayer) {
    createBackgroundMusicPlayer();
  }
  if (backgroundMusicPlayerReady) {
    backgroundMusicPlayer.playVideo();
  }
}


function finishSettingsMenuTransition(force = false) {
  if (!settingsMenuIsAnimating) return;
  if (!force && (!settingsPanelHasFinished || !settingsGearHasFinished)) return;
  window.clearTimeout(settingsMenuTransitionTimer);
  if (settingsMenu.classList.contains("is-closing")) {
    settingsMenu.open = false;
  }
  settingsMenu.classList.remove("is-opening", "is-closing");
  settingsControls.style.removeProperty("max-height");
  settingsControls.style.removeProperty("opacity");
  settingsControls.style.removeProperty("transform");
  settingsControls.style.removeProperty("overflow-y");
  settingsMenuIsAnimating = false;
}

function setSettingsStatus(message) {
  settingsStatus.textContent = message;
  settingsStatus.hidden = false;
}

function getInitialGraphicsQualityIndex() {
  const memory = navigator.deviceMemory;
  const cores = navigator.hardwareConcurrency || 4;
  const pixelRatio = window.devicePixelRatio || 1;
  const hasMemoryEstimate = Number.isFinite(memory);

  if (cores <= 2 || (hasMemoryEstimate && memory <= 2)) return 0;
  if (cores <= 4 || (hasMemoryEstimate && memory <= 4) || pixelRatio >= 2.5) return 1;
  if (cores >= 8 && hasMemoryEstimate && memory >= 8 && pixelRatio <= 2) return 3;
  return 2;
}

function isStorageError(error) {
  return error instanceof DOMException &&
    ["SecurityError", "QuotaExceededError"].includes(error.name);
}

function loadSavedSettings() {
  let serializedSettings;
  try {
    serializedSettings = window.localStorage.getItem(settingsStorageKey);
  } catch (error) {
    if (!isStorageError(error)) throw error;
    console.error("Unable to read saved Examination settings.", error);
    setSettingsStatus("Saved settings could not be read; current choices will apply for this visit only.");
    return;
  }
  if (!serializedSettings) return;

  let savedSettings;
  try {
    savedSettings = JSON.parse(serializedSettings);
  } catch (error) {
    if (!(error instanceof SyntaxError)) throw error;
    console.error("Saved Examination settings are not valid JSON.", error);
    setSettingsStatus("Saved settings were invalid, so default choices are being used.");
    return;
  }
  if (!savedSettings || typeof savedSettings !== "object" || Array.isArray(savedSettings)) {
    console.error("Saved Examination settings have an invalid format.");
    setSettingsStatus("Saved settings were invalid, so default choices are being used.");
    return;
  }

  const invalidFields = [];
  const validThemes = new Set(Array.from(themeSetting.options, (option) => option.value));
  const hasCurrentSettings = savedSettings.version === settingsVersion;
  if (validThemes.has(savedSettings.theme)) {
    themeSetting.value = savedSettings.theme;
  } else {
    invalidFields.push("theme");
  }
  if (hasCurrentSettings && typeof savedSettings.backgroundMusic === "boolean") {
    backgroundMusicSetting.checked = savedSettings.backgroundMusic;
  } else if (hasCurrentSettings) {
    invalidFields.push("background music");
  }
  if (invalidFields.length > 0) {
    console.error(`Saved Examination settings have invalid fields: ${invalidFields.join(", ")}.`);
    setSettingsStatus(`Some saved settings were invalid and have been reset: ${invalidFields.join(", ")}.`);
  } else if (!hasCurrentSettings) {
    setSettingsStatus("Settings updated with automatic graphics quality.");
  } else {
    setSettingsStatus("Your saved settings have been restored.");
  }
}

function saveSettings() {
  const settings = {
    version: settingsVersion,
    theme: themeSetting.value,
    backgroundMusic: backgroundMusicSetting.checked,
  };
  try {
    window.localStorage.setItem(settingsStorageKey, JSON.stringify(settings));
    setSettingsStatus("Settings saved in this browser.");
  } catch (error) {
    if (!isStorageError(error)) throw error;
    console.error("Unable to store Examination settings.", error);
    setSettingsStatus("Settings could not be stored; they will reset when you leave this page.");
  }
}

function applyVisualSettings() {
  showcase.dataset.theme = themeSetting.value;
  showcase.dataset.quality = graphicsQualities[graphicsQualityIndex];
}

function monitorGraphicsPerformance() {
  let sampleStartedAt = null;
  let frameCount = 0;
  let slowSamples = 0;
  let fastSamples = 0;

  function sampleFrame(timestamp) {
    if (document.visibilityState !== "visible") {
      sampleStartedAt = null;
      frameCount = 0;
      window.requestAnimationFrame(sampleFrame);
      return;
    }

    if (sampleStartedAt === null) sampleStartedAt = timestamp;
    frameCount += 1;
    const elapsed = timestamp - sampleStartedAt;
    if (elapsed >= 2000) {
      const framesPerSecond = (frameCount * 1000) / elapsed;
      if (framesPerSecond < 48) {
        slowSamples += 1;
        fastSamples = 0;
        if (slowSamples >= 2) {
          graphicsQualityIndex = Math.max(0, graphicsQualityIndex - 1);
          showcase.dataset.quality = graphicsQualities[graphicsQualityIndex];
          slowSamples = 0;
        }
      } else if (framesPerSecond > 57) {
        fastSamples += 1;
        slowSamples = 0;
        if (fastSamples >= 4) {
          graphicsQualityIndex = Math.min(graphicsQualities.length - 1, graphicsQualityIndex + 1);
          showcase.dataset.quality = graphicsQualities[graphicsQualityIndex];
          fastSamples = 0;
        }
      } else {
        slowSamples = 0;
        fastSamples = 0;
      }

      sampleStartedAt = timestamp;
      frameCount = 0;
    }
    window.requestAnimationFrame(sampleFrame);
  }

  window.requestAnimationFrame(sampleFrame);
}

function applyBackgroundMusicSetting() {
  if (!backgroundMusicSetting.checked) {
    if (backgroundMusicPlayerReady) backgroundMusicPlayer.pauseVideo();
    return;
  }
  enableBackgroundMusic();
}

function updateFrameScale() {
  const width = Math.round(backgroundStage.clientWidth);
  const height = Math.round(backgroundStage.clientHeight);
  if (width === 0 || height === 0) return;

  const isCompact = window.matchMedia("(max-width: 600px)").matches;
  const viewportRatio = (width / height).toFixed(2);
  frameScale.textContent = isCompact
    ? `F ${viewportRatio}:1`
    : `FRAME ${width} x ${height} px / ${viewportRatio}:1`;
  if (!activeBackgroundImage) {
    sourceScale.textContent = isCompact ? "I --" : "SOURCE --";
    return;
  }

  const imageRatio = (
    activeBackgroundImage.naturalWidth / activeBackgroundImage.naturalHeight
  ).toFixed(2);
  sourceScale.textContent = isCompact
    ? `I ${imageRatio}:1`
    : `SOURCE ${activeBackgroundImage.naturalWidth} x ${activeBackgroundImage.naturalHeight} px`;
}

window.addEventListener("resize", updateFrameScale);

function advanceAfterScene() {
  showNextRender();
}

function scheduleNextRender(delay = imageSceneDuration) {
  carouselTimer = window.setTimeout(advanceAfterScene, delay);
}

function shuffledRenderIndices() {
  const queue = backgroundRenders
    .map((_, index) => index)
    .filter((index) => !excludedRenderIndices.has(index));
  for (let index = queue.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [queue[index], queue[swapIndex]] = [queue[swapIndex], queue[index]];
  }
  return queue;
}

function takeNextRenderIndex() {
  const availableRenderCount = backgroundRenders.length - excludedRenderIndices.size;
  if (availableRenderCount === 0) {
    console.error("No wide background images are available for the main menu.");
    return null;
  }
  if (availableRenderCount <= recentRenderLimit) {
    if (renderQueue.length === 0) renderQueue = shuffledRenderIndices();
    return renderQueue.pop();
  }

  const recentRenders = new Set(recentRenderIndices);
  while (true) {
    if (renderQueue.length === 0) renderQueue = shuffledRenderIndices();

    for (let index = renderQueue.length - 1; index >= 0; index -= 1) {
      if (!recentRenders.has(renderQueue[index])) {
        return renderQueue.splice(index, 1)[0];
      }
    }

    renderQueue = [];
  }
}

function showNextRender() {
  window.clearTimeout(carouselTimer);
  previousRenderIndex = takeNextRenderIndex();
  if (previousRenderIndex === null) return;
  recentRenderIndices.push(previousRenderIndex);
  if (recentRenderIndices.length > recentRenderLimit) recentRenderIndices.shift();

  const nextImage = activeBackgroundImage === backgroundImages[0]
    ? backgroundImages[1]
    : backgroundImages[0];
  const source = backgroundRenders[previousRenderIndex];
  nextImage.onload = () => {
    if (nextImage.naturalWidth / nextImage.naturalHeight < minimumBackgroundAspectRatio) {
      excludedRenderIndices.add(previousRenderIndex);
      renderQueue = renderQueue.filter((index) => index !== previousRenderIndex);
      if (mediaModal.hidden) showNextRender();
      return;
    }

    analogGhostImage.src = source;
    nextImage.classList.remove("is-visible", "is-animating");
    void nextImage.offsetWidth;
    nextImage.classList.add("is-visible", "is-animating");

    activeBackgroundImage?.classList.remove("is-visible");
    activeBackgroundImage = nextImage;
    activeBackgroundRender = source;
    updateFrameScale();
    if (mediaModal.hidden) {
      scheduleNextRender();
    }
  };
  nextImage.onerror = () => {
    console.error(`Unable to load background render ${source}.`);
    if (mediaModal.hidden) {
      carouselTimer = window.setTimeout(showNextRender, 2000);
    }
  };
  nextImage.src = source;
}

function showScreen(screen) {
  showcase.classList.remove("is-reconstructing");
  showcase.classList.toggle("is-menu-active", screen === introScreen);
  activeScreen.hidden = true;
  screen.hidden = false;
  screen.classList.add("is-entering");
  activeScreen = screen;
  isTransitioning = false;
  if (screen === introScreen) beginButton.disabled = false;
  screen.querySelector("[data-screen-title]").focus();
}

function transitionTo(screen) {
  if (isTransitioning) return;

  isTransitioning = true;
  pendingScreen = screen;
  if (prefersReducedMotion.matches) {
    showScreen(screen);
    pendingScreen = null;
    return;
  }

  showcase.classList.add("is-reconstructing");
}

beginButton.addEventListener("click", () => {
  enableBackgroundMusic();
  beginButton.disabled = true;
  transitionTo(categoryScreen);
});

categoryBackButton.addEventListener("click", () => {
  transitionTo(introScreen);
});

themeSetting.addEventListener("change", () => {
  applyVisualSettings();
  saveSettings();
});
backgroundMusicSetting.addEventListener("change", () => {
  applyBackgroundMusicSetting();
  saveSettings();
});
reconstructEffect.addEventListener("animationend", (event) => {
  if (event.target !== reconstructEffect || !pendingScreen) return;
  const screen = pendingScreen;
  pendingScreen = null;
  showScreen(screen);
});

[introScreen, categoryScreen, detailScreen].forEach((screen) => {
  screen.addEventListener("animationend", (event) => {
    if (event.target === screen && event.animationName === "soft-dissolve-in") {
      screen.classList.remove("is-entering");
    }
  });
});

categoryScreen.addEventListener("click", (event) => {
  const card = event.target.closest("[data-category]");
  if (!card || isTransitioning) return;

  const category = card.dataset.category;
  detailTitle.textContent = category;
  enemyWikiLink.hidden = category !== "Enemies";
  if (category === "Enemies") {
    renderEnemyCatalog();
  }
  transitionTo(detailScreen);
});

function getEnemyId(section, enemy) {
  const sectionId = section.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const enemyId = enemy.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `${sectionId}-${enemyId}`;
}

function renderEnemyCatalog() {
  detailViewport.innerHTML = enemyCatalog
    .map(
      (section) => `
        <section class="enemy-section" aria-labelledby="${section.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading">
          <h2 class="enemy-section-title" id="${section.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading">${section.label}</h2>
          <div class="enemy-grid">
            ${section.enemies
              .map(
                (enemy) => `
                  <button class="enemy-card" type="button" data-enemy-id="${getEnemyId(section, enemy)}" aria-label="View ${enemy.name}">
                    <img src="${enemy.image}" alt="${enemy.name}" loading="lazy" />
                    <span>${enemy.name}</span>
                  </button>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");

  detailViewport.querySelectorAll(".enemy-card").forEach((card) => {
    card.addEventListener("click", () => {
      enemyCatalogScrollTop = detailViewport.scrollTop;
      const enemy = enemyCatalog
        .flatMap((section) => section.enemies.map((item) => ({
          ...item,
          category: section.label,
          id: getEnemyId(section, item),
        })))
        .find((item) => item.id === card.dataset.enemyId);
      if (!enemy) {
        console.error(`Unable to find enemy data for ${card.dataset.enemyId}.`);
        return;
      }

      renderEnemyDetail(enemy);
    });
  });
}

function renderEnemyDetail(enemy) {
  currentEnemyId = enemy.id;
  detailTitle.textContent = enemy.name;
  enemyWikiLink.hidden = true;
  backButton.textContent = "Back to Enemies";
  if (currentEnemyId === "regulars-lurker") {
    renderLurkerDetail(enemy);
  } else if (currentEnemyId === "regulars-engineer") {
    renderEngineerDetail(enemy);
  } else if (currentEnemyId === "regulars-vorax") {
    renderVoraxDetail(enemy);
  } else if (currentEnemyId === "regulars-deceiver") {
    renderDeceiverDetail(enemy);
  } else if (currentEnemyId === "virals-viral-runner") {
    renderViralRunnerDetail(enemy);
  } else if (currentEnemyId === "city-infected-runner") {
    renderCityRunnerDetail(enemy);
  } else if (currentEnemyId === "regulars-crawler") {
    renderCrawlerDetail(enemy);
  } else if (currentEnemyId === "regulars-grabby") {
    renderGrabbyDetail(enemy);
  } else if (currentEnemyId === "regulars-barnacles") {
    renderBarnaclesDetail(enemy);
  } else if (currentEnemyId === "regulars-riser") {
    renderRiserDetail(enemy);
  } else if (currentEnemyId === "regulars-mutant") {
    renderMutantDetail(enemy);
  } else if (currentEnemyId === "regulars-kamikaze") {
    renderKamikazeDetail(enemy);
  } else if (currentEnemyId === "regulars-slasher") {
    renderSlasherDetail(enemy);
  } else if (currentEnemyId === "regulars-radaway") {
    renderRadawayDetail(enemy);
  } else if (currentEnemyId === "regulars-gunner") {
    renderGunnerDetail(enemy);
  } else if (currentEnemyId === "regulars-fury") {
    renderFuryDetail(enemy);
  } else if (currentEnemyId === "regulars-shielder") {
    renderShielderDetail(enemy);
  } else if (currentEnemyId === "city-infected-city-fury") {
    renderCityFuryDetail(enemy);
  } else if (currentEnemyId === "city-infected-city-shielder") {
    renderCityShielderDetail(enemy);
  } else {
    renderEnemyPlaceholder(enemy);
  }
  detailViewport.scrollTop = 0;
  detailTitle.focus();
}

function renderEnemyPlaceholder(enemy) {
  detailViewport.innerHTML = `
    <article class="enemy-detail enemy-detail-placeholder">
      <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
      <div>
        <p class="enemy-category-label">${enemy.category}</p>
        <h2>${enemy.name}</h2>
        <p>Information for this enemy will be added when it is ready.</p>
      </div>
    </article>
  `;
}

function renderEngineerDetail(enemy) {
  const sector3 = `${examinationWiki}/Sector_3`;
  const dreadnought = `${examinationWiki}/Dreadnought`;
  const animations = [
    { name: "Execution animation 1", file: "Engineer_Execution_1.mp4" },
    { name: "Execution animation 2", file: "Engineer_Execution_2.mp4" },
    { name: "Execution animation 3", file: "Engineer_Execution_3.mp4" },
    { name: "Save animation", file: "Engineer_Save.mp4" },
    { name: "Landmine trigger", file: "Engineer_Landmine_Trigger.mp4" },
  ];
  const landmineImage = "https://static.wikitide.net/examinationwiki/a/a5/Landmine.png";
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Engineer</h2>
          <p><strong>Vladimir Bzochvenyich</strong> is a Dreadnought-mutated combat engineer who retains his intelligence and skill with landmines.</p>
          <p>He wanders through Sector 3, laying mines, and pursues targets he spots. His landmines and execution make him more dangerous than a regular Lurker.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn location</th><td><a href="${sector3}" target="_blank" rel="noopener noreferrer">Sector 3, Subsector-1</a></td></tr>
              <tr><th scope="row">Health</th><td>700 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>None</td></tr>
              <tr><th scope="row">Walk speed</th><td>9 studs/s</td></tr>
              <tr><th scope="row">Run speed</th><td>17 studs/s</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Fists</td></tr>
              <tr><th scope="row">Secondary equipment</th><td>Landmine</td></tr>
              <tr><th scope="row">Punch damage</th><td>25</td></tr>
              <tr><th scope="row">Landmine damage</th><td>Instant kill</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 35 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>8 minutes 20 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Nationality</th><td>Rasonian</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
              <tr><th scope="row">Affiliation</th><td>Rasonian Infantry Forces (formerly)</td></tr>
              <tr><th scope="row">Occupation</th><td>Combat Engineer (formerly)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <p>Vladimir spawns near a room with an ammo box and a keycard in <a href="${sector3}" target="_blank" rel="noopener noreferrer">Sector 3</a>'s Subsector-1. He wanders at 9 studs/s and can plant landmines while wandering. Once he spots a target, he chases at 17 studs/s and stops planting mines. If the target stays out of sight for more than 10 seconds, he returns to wandering.</p>
        <p>He takes 8 minutes and 20 seconds to respawn after death.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <p>Vladimir punches at low range, dealing 25 damage per hit with a 1-second cooldown. If he hits a player below 35 HP, he performs an execution.</p>
        <p>There is a 50% chance that the execution is replaced by a save animation: the player fights back and kicks Vladimir away, becomes <a href="${examinationWiki}/Mechanics#Infection" target="_blank" rel="noopener noreferrer">infected</a>, and is healed to 15 HP. Vladimir cannot attack for 3 seconds afterward.</p>
        <h4>Landmines</h4>
        <p>While wandering, Vladimir places a landmine at his position every 45 seconds. Stepping on a mine instantly kills a player regardless of their HP. AI cannot trigger mines, but players can shoot them to detonate them; the resulting small blast deals around 40 damage, decreasing with distance.</p>
        <figure class="enemy-variant">
          <button class="enemy-variant-image" type="button" data-image-src="${landmineImage}" aria-label="View landmine appearance">
            <img src="${landmineImage}" alt="Landmine" loading="lazy" />
          </button>
          <figcaption>Landmine appearance</figcaption>
        </figure>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Dreadnought:</strong> Vladimir opens doors when he walks up to them.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${examinationWiki}/Special:FilePath/${animation.file}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Vladimir was a combat engineer in the <a href="${examinationWiki}/Rasonian_Infantry_Forces" target="_blank" rel="noopener noreferrer">Rasonian Infantry Forces</a>. He and his squad were stationed in a <a href="${sector3}" target="_blank" rel="noopener noreferrer">Sector 3</a> subsector and were running low on supplies.</p>
        <p>He hoped to convince <a href="${examinationWiki}/Sinitzyn" target="_blank" rel="noopener noreferrer">Sinitzyn Komarek</a> to help de-escalate the tensions and bring in a third party to discuss an antidote for <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30</a>. When Vladimir's squad tried to leave the subsector and regroup with Sinitzyn, they got lost and were eventually taken over by the pathogen. Vladimir underwent the <a href="${dreadnought}" target="_blank" rel="noopener noreferrer">Dreadnought</a> mutation, preserving his intelligence and landmine-planting skill.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>Vladimir's eyes used to glow white instead of orange.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderVoraxDetail(enemy) {
  const sector1 = `${examinationWiki}/Sector_1`;
  const variants = [
    { name: "RSU", image: "https://static.wikitide.net/examinationwiki/d/d2/RSU_Vorax.png" },
    { name: "MGF", image: "https://static.wikitide.net/examinationwiki/c/c0/MGF_Vorax.png" },
  ];
  const sounds = [
    {
      label: "Idle — plays when idle.",
      files: [
        "https://static.wikitide.net/examinationwiki/5/58/Vorax_Idle.mp3",
        "https://static.wikitide.net/examinationwiki/5/59/Vorax_Idle_2.mp3",
        "https://static.wikitide.net/examinationwiki/9/91/Vorax_Idle_3.mp3",
        "https://static.wikitide.net/examinationwiki/d/dd/Vorax_Idle_4.mp3",
      ],
    },
    {
      label: "Vomit start — plays when Vorax starts vomiting.",
      files: [
        "https://static.wikitide.net/examinationwiki/1/1b/Vorax_Vomit_Start_2.mp3",
        "https://static.wikitide.net/examinationwiki/4/40/Vorax_Vomit_Start_3.mp3",
        "https://static.wikitide.net/examinationwiki/4/4e/Vorax_Vomit_Start_4.mp3",
        "https://static.wikitide.net/examinationwiki/7/71/Vorax_Vomit_Start_5.mp3",
      ],
    },
    {
      label: "Vomiting — plays while vomiting.",
      files: [
        "https://static.wikitide.net/examinationwiki/a/a6/Vorax_Vomit.mp3",
        "https://static.wikitide.net/examinationwiki/6/63/Vorax_Vomit_2.mp3",
        "https://static.wikitide.net/examinationwiki/b/b9/Vorax_Vomit_3.mp3",
      ],
    },
    {
      label: "Vomit hits a player.",
      files: [
        "https://static.wikitide.net/examinationwiki/4/45/Vorax_Vomit_Hit.mp3",
        "https://static.wikitide.net/examinationwiki/c/c9/Vorax_Vomit_Hit_2.mp3",
      ],
    },
    {
      label: "Vomit hits an object.",
      files: [
        "https://static.wikitide.net/examinationwiki/2/2c/Vorax_Vomit_Object_Hit.mp3",
        "https://static.wikitide.net/examinationwiki/2/20/Vorax_Vomit_Object_Hit_2.mp3",
      ],
    },
    {
      label: "Vomit end — plays after vomiting ends.",
      files: [
        "https://static.wikitide.net/examinationwiki/8/8c/Vorax_Vomit_End.mp3",
        "https://static.wikitide.net/examinationwiki/3/35/Vorax_Vomit_End_2.mp3",
        "https://static.wikitide.net/examinationwiki/8/86/Vorax_Vomit_End_3.mp3",
      ],
    },
    {
      label: "Death — plays when dying.",
      files: [
        "https://static.wikitide.net/examinationwiki/1/1b/Vorax_Death.mp3",
        "https://static.wikitide.net/examinationwiki/a/af/Vorax_Death_2.mp3",
        "https://static.wikitide.net/examinationwiki/4/41/Vorax_Death_3.mp3",
        "https://static.wikitide.net/examinationwiki/6/6e/Vorax_Death_4.mp3",
        "https://static.wikitide.net/examinationwiki/a/a4/Vorax_Death_5.mp3",
      ],
    },
    {
      label: "Explosion — plays when exploding.",
      files: [
        "https://static.wikitide.net/examinationwiki/c/c7/Vorax_Explosion.mp3",
      ],
    },
  ];
  const executionAnimation = `${examinationWiki}/Special:FilePath/Vorax_Execution.mp4`;
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Vorax</h2>
          <p><strong>“I'M SORRY.”</strong> <span>— RSU Vorax</span></p>
          <p>The Vorax is a rare infected that deals heavy damage in bursts and ruptures when killed. Its close-range attacks and death burst make cramped rooms and chokepoints especially dangerous.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variants.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Vorax image">
                <img src="${variant.image}" alt="${variant.name} Vorax" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn location</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a></td></tr>
              <tr><th scope="row">Health</th><td>750 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>None</td></tr>
              <tr><th scope="row">Walk speed</th><td>4 studs/s</td></tr>
              <tr><th scope="row">Run speed</th><td>None</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Fists</td></tr>
              <tr><th scope="row">Secondary equipment</th><td>Vomit</td></tr>
              <tr><th scope="row">Punch damage</th><td>25</td></tr>
              <tr><th scope="row">Vomit damage</th><td>4 every ~0.05 seconds</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 50 HP</td></tr>
              <tr><th scope="row">Death explosion</th><td>60 damage within ~3 studs</td></tr>
              <tr><th scope="row">Respawn time</th><td>1 minute 50 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <p>Vorax can spawn at various locations throughout <a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a>, with up to three active at a time. It wanders at 4 studs/s until it spots a target, then pursues at the same speed. Vorax takes 1 minute and 50 seconds to respawn after death.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <h4>Melee</h4>
        <p>Vorax punches at short range, dealing 25 damage with a 1-second cooldown. Backing away can avoid the attack. If it hits a player below 50 HP, it performs an execution.</p>
        <h4>Vomit</h4>
        <p>When it sees a target, Vorax stops and vomits for 3.5 seconds, slowly turning to follow them. This attack has a 13-second cooldown. Its hitbox is narrow but long, dealing 4 damage about every 0.05 seconds to targets caught in it. Hits cover the player's screen in blood for about 4 seconds; the effect clears on its own and cannot be wiped away.</p>
        <p>The attack may leave blood puddles that deal 1 damage per second on contact and disappear after about 5 seconds.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        ${sounds.map((sound) => `
          <p>${sound.label}</p>
          ${sound.files.map((file, index) => `
            <audio class="enemy-audio" controls preload="none" aria-label="${sound.label} Clip ${index + 1}" src="${file}">Your browser does not support audio playback.</audio>
          `).join("")}
        `).join("")}
      </section>

      <section class="enemy-info-section">
        <h3>Death</h3>
        <p>When Vorax reaches 0 HP, a 2-second death animation plays before it explodes, dealing 60 damage within roughly 3 studs. Its death also leaves a blood puddle like the one created by its vomit.</p>
        <div class="animation-grid">
          <button class="animation-card" type="button" data-video-src="${executionAnimation}" aria-label="Play Vorax execution animation">
            <span class="animation-play-icon" aria-hidden="true">▶</span>
            <span>Execution animation</span>
          </button>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger immunity:</strong> Gunshots do not stun Vorax.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Combat archive</h3>
        <p>Field reports describe a body swollen around the torso and throat, its skin stretched and discolored by a pressurized, harmful fluid. The Vorax is drawn to groups, though it will attack lone targets too. At close range it sprays infected fluid that can blind and mark victims; the scent may draw nearby infected toward them.</p>
        <p>Keep distance and avoid clustering near a Vorax. Ranged attacks are the safer response: a close-quarters takedown risks its spray, while a death at close range can trigger the same kind of burst. Do not let it hold a doorway or chokepoint.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>The <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a> can produce a Vorax when its host has a badly broken jaw or destroyed digestive system. The infected scavenges anything it can swallow, including garbage and other unsuitable material. A harmful fluid accumulates in its body—possibly a mixture of contaminated blood, stomach acid, and what it has consumed—causing its torso and throat to swell.</p>
        <p>The liquid can infect people through wounds or other openings, and its scent attracts nearby infected. When the Vorax is killed, its body ruptures and sprays the fluid outward.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>Vorax is the second infected type with a unique death animation, after <a href="${examinationWiki}/Chimera" target="_blank" rel="noopener noreferrer">Chimera</a> and before <a href="${examinationWiki}/Mikhail_Williams" target="_blank" rel="noopener noreferrer">Mikhail Williams</a>.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderViralRunnerDetail(enemy) {
  const viralMutation = `${examinationWiki}/Viral_Mutation`;
  const infection = `${examinationWiki}/Mechanics#Infection`;
  const variants = [
    { name: "Standard", image: "https://static.wikitide.net/examinationwiki/c/cf/Viral_Standard.png" },
    { name: "Breacher", image: "https://static.wikitide.net/examinationwiki/2/24/Viral_Breacher.png" },
    { name: "Medic", image: "https://static.wikitide.net/examinationwiki/e/ef/Viral_Medic.png" },
    { name: "Operator", image: "https://static.wikitide.net/examinationwiki/b/bc/Viral_Operator.png" },
    { name: "Pointman", image: "https://static.wikitide.net/examinationwiki/b/b8/Viral_Pointman.png" },
    { name: "Corpsman", image: "https://static.wikitide.net/examinationwiki/1/13/Viral_Corpsman.png" },
    { name: "Classless", image: "https://static.wikitide.net/examinationwiki/d/d1/Viral_Classless.png" },
  ];
  const sounds = [
    {
      label: "Idle — Standard Viral Runner.",
      file: "https://static.wikitide.net/examinationwiki/b/b4/Viralidle.ogg",
      loop: true,
    },
    {
      label: "Idle — Viral Corpsman only.",
      file: "https://static.wikitide.net/examinationwiki/d/d3/Viralcorpsmanidle.ogg",
      loop: true,
    },
    {
      label: "Idle — Classless Viral Runner only.",
      file: "https://static.wikitide.net/examinationwiki/f/f9/Classless_Viral_Runner_Idle.mp3",
      loop: true,
    },
    {
      label: "Maul attack.",
      file: "https://static.wikitide.net/examinationwiki/e/e0/Viralexecution.ogg",
    },
    {
      label: "Execution.",
      file: "https://static.wikitide.net/examinationwiki/e/e0/Viralexecution.ogg",
    },
    {
      label: "Suicide.",
      file: "https://static.wikitide.net/examinationwiki/7/79/Viralsuicide.ogg",
    },
    {
      label: "Death explosion.",
      file: "https://static.wikitide.net/examinationwiki/d/d1/Viralexplosion.ogg",
    },
  ];
  const animations = [
    { name: "Maul animation", file: "Viral_Maul.mp4" },
    { name: "Execution animation", file: "Viral_Execution.mp4" },
    { name: "Suicide animation", file: "Viral_Runner_Suicide.mp4" },
  ];
  const menlo = `${examinationWiki}/Menlo`;
  const menlonianGroundForces = `${examinationWiki}/Menlonian_Ground_Forces`;
  const menloSpecialTerrain = `${examinationWiki}/Menlo_Special_Terrain_and_Operations_Command`;
  const tasc10 = `${examinationWiki}/TASC-10`;
  const cityRunner = `${examinationWiki}/City_Runner`;

  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Virals · Combat Archive</p>
          <h2>Viral Runner</h2>
          <p><strong>“You don't wanna mess with the fresh infected ones, things can get out of hand quickly.”</strong></p>
          <p>Also known as a Viral Riser, the Viral Runner is the most common Viral in Examination. It is fast, deals damage rapidly, and becomes especially dangerous in groups.</p>
          <button class="begin-button" type="button" data-related-enemy-id="city-infected-runner">View City Runner archive</button>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variants.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Viral Runner">
                <img src="${variant.image}" alt="${variant.name} Viral Runner" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn location</th><td>See <a href="${examinationWiki}/Viral_Runner#Spawn" target="_blank" rel="noopener noreferrer">Spawn</a></td></tr>
              <tr><th scope="row">Health</th><td>400 HP; 300 HP for Classless</td></tr>
              <tr><th scope="row">Regeneration</th><td>None</td></tr>
              <tr><th scope="row">Walk speed</th><td>8 studs/s</td></tr>
              <tr><th scope="row">Run speed</th><td>26 studs/s</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Fists</td></tr>
              <tr><th scope="row">Secondary equipment</th><td>Maul</td></tr>
              <tr><th scope="row">Punch damage</th><td>8</td></tr>
              <tr><th scope="row">Maul damage</th><td>45; cannot reduce a target below 1 HP</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 33 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>None</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Nationality</th><td><img class="enemy-national-flag" src="https://static.wikitide.net/examinationwiki/b/b3/Flag_of_Menlo.svg" alt="" /> <a href="${menlo}" target="_blank" rel="noopener noreferrer">Menlonian</a></td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Spawn</h3>
        <p>Viral Runners do not spawn naturally. They can be created when a player without an <a href="${examinationWiki}/Axe" target="_blank" rel="noopener noreferrer">Axe</a> succumbs to the <a href="${infection}" target="_blank" rel="noopener noreferrer">infection</a> and fails the <a href="${examinationWiki}/Controllable_Infection" target="_blank" rel="noopener noreferrer">Hatred check</a>, dies in a late infection stage, or dies after being marked by a Viral Runner or an enraged <a href="${examinationWiki}/Lurker#Rage" target="_blank" rel="noopener noreferrer">Lurker</a>.</p>
        <p><a href="${examinationWiki}/Classless" target="_blank" rel="noopener noreferrer">Classless</a> players become Classless Viral Runners instead, with 300 HP.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior</h3>
        <p>It wanders at 8 studs/s until it spots a target, then chases at 26 studs/s. If the target stays out of sight for more than 10 seconds, it resumes wandering.</p>
        <p>After 2 minutes and 30 seconds of life, it begins a suicide animation. It can still be damaged during the animation. If it survives long enough, it can stabilize and turn into a <a href="${examinationWiki}/Riser" target="_blank" rel="noopener noreferrer">Riser</a>.</p>
        <p>On death, its body explodes after 2 seconds, dealing 50 damage within an approximately 8-stud radius.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <h4>Punch</h4>
        <p>It punches at medium range for 8 damage per hit, with a 0.4-second cooldown. Hitting a player below 33 HP triggers an execution. The player becomes a <a href="${viralMutation}#Known_Mutations" target="_blank" rel="noopener noreferrer">Viral</a> upon death.</p>
        <h4>Maul</h4>
        <p>After four successful punches, its next hit mauls the player. The attack deals 45 damage, marks the target, and plays a special animation during which the Viral Runner is completely invincible. Maul damage cannot reduce the target below 1 HP. A marked player becomes a Viral on death even if they were not previously infected.</p>
        <h4>Dodge</h4>
        <p>When hit, it has a chance to duck and evade incoming gunfire for 1 second. It cannot attack during the dodge, but has no movement penalty and gains no damage immunity. It cannot dodge while stunned by a bash.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger immunity:</strong> Gunshots do not stun it.</li>
          <li><strong>Taser struggle:</strong> When stunned by the <a href="${tasc10}" target="_blank" rel="noopener noreferrer">TASC-10</a>, it stands in place instead of falling down.</li>
          <li><strong>Death explosion:</strong> Explodes after 2 seconds, dealing 50 damage in an approximately 8-stud radius.</li>
          <li><strong>Suicide:</strong> Begins its suicide animation after 2 minutes and 30 seconds of life.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>City variant</h3>
        <p>The <a href="${cityRunner}" target="_blank" rel="noopener noreferrer">City Runner</a> shares the Viral Runner's abilities but has 600 HP. Four spawn in the Streets during the <a href="${examinationWiki}/Mechanics#Relay_Station" target="_blank" rel="noopener noreferrer">Server Restart</a> event.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        ${sounds.map((sound) => `
          <p>${sound.label}</p>
          <audio class="enemy-audio" controls preload="none" ${sound.loop ? "loop" : ""} aria-label="${sound.label}" src="${sound.file}">Your browser does not support audio playback.</audio>
        `).join("")}
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${examinationWiki}/Special:FilePath/${animation.file}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Viral Runners are soldiers of the <a href="${menlonianGroundForces}" target="_blank" rel="noopener noreferrer">Menlonian Ground Forces</a> or <a href="${menloSpecialTerrain}" target="_blank" rel="noopener noreferrer">Menlo Special Terrain and Operations Command</a> who became infected under particular circumstances. At the <a href="${examinationWiki}/Itagura_Nuclear_Power_Plant" target="_blank" rel="noopener noreferrer">Itagura NPP</a>, the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a> reacts with excess radiation, causing some infected who would normally become Risers to mutate into Viral Runners.</p>
        <p>This mutation makes them unusually aggressive, agitated, and unstable. They push their bodies past their limits while retaining some self-preservation. Major organ failure can cause the body to explode, harming anyone nearby; their instability can also lead them to injure or kill themselves.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Combat archive</h3>
        <p>Freshly infected soldiers can become dangerous before anyone realizes what is happening. Viral Runners move quickly and punish groups that fail to deal with them, combining rapid punches, a devastating maul, and a delayed death explosion. Keep your distance and watch for the signs of infection before a fallen teammate turns on the squad.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>It once had a “chain dodge” state, similar to the <a href="${examinationWiki}/Chimera" target="_blank" rel="noopener noreferrer">Chimera</a>, that continuously dodged attacks until it stopped taking damage.</li>
          <li>The Viral Runner was inspired by the <a href="https://gbp.miraheze.org/wiki/Viral_Runner" target="_blank" rel="noopener noreferrer">Viral Runner enemy</a> from <a href="https://gbp.miraheze.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer">Guts &amp; Blackpowder</a>.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderCityRunnerDetail(enemy) {
  const viralRunnerWiki = `${examinationWiki}/Viral_Runner`;
  const viralMutation = `${examinationWiki}/Viral_Mutation`;
  const streets = `${examinationWiki}/Locations#Streets`;
  const serverRestart = `${examinationWiki}/Mechanics#Relay_Station`;
  const tasc10 = `${examinationWiki}/TASC-10`;
  const variants = [
    { name: "Civilian 1", image: "https://static.wikitide.net/examinationwiki/3/3c/Civilian_City_Runner.png" },
    { name: "Civilian 2", image: "https://static.wikitide.net/examinationwiki/4/43/Civilian_City_Runner_2.png" },
    { name: "MGF MP", image: "https://static.wikitide.net/examinationwiki/e/e8/MGF_MP_City_Runner.png" },
    { name: "IDO", image: "https://static.wikitide.net/examinationwiki/9/91/IDO_City_Runner.png" },
  ];
  const oldAppearances = [
    "RCU_Viral_Runner_1.png",
    "RCU_Viral_Runner_2.png",
    "RCU_Viral_Runner_3.png",
    "RCU_Viral_Runner_4.png",
  ];
  const sounds = [
    {
      label: "Idle — uses the Classless Viral Runner idle sound.",
      file: "https://static.wikitide.net/examinationwiki/f/f9/Classless_Viral_Runner_Idle.mp3",
      loop: true,
    },
    {
      label: "Maul attack.",
      file: "https://static.wikitide.net/examinationwiki/c/c1/Viralmaul.ogg",
    },
    {
      label: "Execution.",
      file: "https://static.wikitide.net/examinationwiki/e/e0/Viralexecution.ogg",
    },
  ];
  const animations = [
    { name: "Maul animation", file: "RCU_Runner_Maul.mp4" },
    { name: "Execution animation", file: "RCU_Runner_Execution.mp4" },
  ];

  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">City Infected · Combat Archive</p>
          <h2>City Runner</h2>
          <p><strong>“A bullet is mercy compared to what they truly are.”</strong> <span>— Private Ian Vaughan</span></p>
          <p>City Runner is a unique variant of the <a href="${viralRunnerWiki}" target="_blank" rel="noopener noreferrer">Viral Runner</a>. It has the same abilities, with a larger health pool.</p>
          <button class="begin-button" type="button" data-related-enemy-id="virals-viral-runner">View Viral Runner archive</button>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variants.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} City Runner">
                <img src="${variant.image}" alt="${variant.name} City Runner" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn location</th><td><a href="${streets}" target="_blank" rel="noopener noreferrer">Streets</a></td></tr>
              <tr><th scope="row">Health</th><td>600 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>None</td></tr>
              <tr><th scope="row">Walk speed</th><td>8 studs/s</td></tr>
              <tr><th scope="row">Run speed</th><td>26 studs/s</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Fists</td></tr>
              <tr><th scope="row">Secondary equipment</th><td>Maul</td></tr>
              <tr><th scope="row">Punch damage</th><td>8</td></tr>
              <tr><th scope="row">Maul damage</th><td>45; cannot reduce a target below 1 HP</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 33 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>None</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Spawn and behavior</h3>
        <p>Four City Runners spawn in the <a href="${streets}" target="_blank" rel="noopener noreferrer">Streets</a> during the <a href="${serverRestart}" target="_blank" rel="noopener noreferrer">Server Restart</a> event.</p>
        <p>It wanders at 8 studs/s until it spots a target, then chases at 26 studs/s. If the target stays out of sight for more than 10 seconds, it resumes wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <h4>Punch</h4>
        <p>It punches at medium range for 8 damage per hit, with a 0.4-second cooldown. Hitting a player below 33 HP triggers an execution. The player becomes a <a href="${viralMutation}#Known_Mutations" target="_blank" rel="noopener noreferrer">Viral</a> upon death.</p>
        <h4>Maul</h4>
        <p>After four successful punches, its next hit mauls the player. The attack deals 45 damage, marks the target, and plays a special animation during which the City Runner is completely invincible. Maul damage cannot reduce the target below 1 HP. A marked player becomes a Viral on death even if they were not previously infected.</p>
        <h4>Dodge</h4>
        <p>When hit, it ducks to evade incoming gunfire for 1 second and cannot attack. This ability has an approximately 3-second cooldown. It has no movement penalty and grants no damage immunity; it cannot activate while the Runner is stunned by a bash.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger immunity:</strong> Gunshots do not stun it.</li>
          <li><strong>Taser struggle:</strong> When stunned by the <a href="${tasc10}" target="_blank" rel="noopener noreferrer">TASC-10</a>, it stands in place instead of falling down.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        ${sounds.map((sound) => `
          <p>${sound.label}</p>
          <audio class="enemy-audio" controls preload="none" ${sound.loop ? "loop" : ""} aria-label="${sound.label}" src="${sound.file}">Your browser does not support audio playback.</audio>
        `).join("")}
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${examinationWiki}/Special:FilePath/${animation.file}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>For Viral lore, see <a href="${viralMutation}" target="_blank" rel="noopener noreferrer">Viral Mutation</a>. City Runners are civilians or armed personnel, including the <a href="${examinationWiki}/Menlonian_Ground_Forces" target="_blank" rel="noopener noreferrer">Menlonian Ground Forces</a> and members of the <a href="https://discord.com/channels/1349408407332847687/1390206196723748895" target="_blank" rel="noopener noreferrer">International Defense Organization</a>, who became infected with the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a>.</p>
        <p>Because of the Viral Mutation, their in-game appearance and mechanics may not be canon: they show signs of irradiation while far from the <a href="${examinationWiki}/Itagura_Nuclear_Power_Plant" target="_blank" rel="noopener noreferrer">Itagura Nuclear Power Plant</a>. Their appearance in the non-canon Server Restart event is also not canon to the lore.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Old appearances</h3>
        <div class="enemy-variant-grid">
          ${oldAppearances.map((file, index) => {
            const image = `${examinationWiki}/Special:FilePath/${file}`;
            return `
              <figure class="enemy-variant">
                <button class="enemy-variant-image" type="button" data-image-src="${image}" aria-label="View old City Runner appearance ${index + 1}">
                  <img src="${image}" alt="Old City Runner appearance ${index + 1}" loading="lazy" />
                </button>
                <figcaption>Old appearance ${index + 1}</figcaption>
              </figure>
            `;
          }).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>City Runner uses the same idle sound as the Classless Viral Runner.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderDeceiverDetail(enemy) {
  const deceiverWiki = `${examinationWiki}/Deceiver`;
  const reactor4 = `${examinationWiki}/Reactor_4`;
  const variants = [
    { name: "Standard", image: "https://static.wikitide.net/examinationwiki/e/e1/Standard_Deceiver.png" },
    { name: "Breacher", image: "https://static.wikitide.net/examinationwiki/8/80/Breacher_Deceiver.png" },
    { name: "Medic", image: "https://static.wikitide.net/examinationwiki/f/f0/Medic_Deceiver.png" },
    { name: "Leader", image: "https://static.wikitide.net/examinationwiki/0/06/Leader_Deceiver.png" },
    { name: "Operator", image: "https://static.wikitide.net/examinationwiki/3/34/Operator_Deceiver.png" },
    { name: "Pointman", image: "https://static.wikitide.net/examinationwiki/d/d2/Pointman_Deceiver.png" },
    { name: "Corpsman", image: "https://static.wikitide.net/examinationwiki/5/5e/Corpsman_Deceiver.png" },
    { name: "Commander", image: "https://static.wikitide.net/examinationwiki/3/36/Commander_Deceiver.png" },
    { name: "Enforcer", image: "https://static.wikitide.net/examinationwiki/6/64/Enforcer_Deceiver.png" },
  ];
  const classDifferences = [
    { name: "Standard", difference: "Cracked gasmask lenses." },
    { name: "Breacher", difference: "Cracked gasmask lenses." },
    { name: "Medic", difference: "Cracked mask visor; carries a VGS-40 instead of an MPR-VII." },
    { name: "Leader", difference: "Cracked gasmask lenses; the IA AR-56 is missing its bayonet." },
    { name: "Operator", difference: "No visible class-specific difference." },
    { name: "Pointman", difference: "The Halligan Bar is missing from its back." },
    { name: "Corpsman", difference: "Opaque, bloodstained mask visor; carries a VIREL-M MedUnit instead of a MedTac." },
    { name: "Commander", difference: "Cracked gasmask lens; the SR-58 is missing its bayonet." },
    { name: "Enforcer", difference: "Opaque, bloodstained gasmask; uniform sleeves are not rolled up." },
  ];
  const sounds = [
    {
      label: "Radio mimic — plays when the Deceiver attempts to mimic a player's voice line.",
      file: "https://static.wikitide.net/examinationwiki/e/e6/Deceiver_Radio.mp3",
    },
    {
      label: "Enraged idle — loops after the Deceiver is damaged.",
      file: "https://static.wikitide.net/examinationwiki/d/d3/Viralcorpsmanidle.ogg",
      loop: true,
    },
  ];
  const animations = [
    { name: "Execution animation", file: "DeceiverExecution.mp4" },
    { name: "Backstab execution animation", file: "DeceiverBackstabExecution.mp4" },
  ];

  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Deceiver</h2>
          <p><strong>“This is just what it wants! To pit us against each other!”</strong></p>
          <p>One of the rarest infected in Examination, the Deceiver mimics a player's behavior to approach its target and execute them. It is especially dangerous to lone, inattentive players.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <p>These appearances represent different player classes the Deceiver can mimic.</p>
        <div class="enemy-variant-grid">
          ${variants.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Deceiver">
                <img src="${variant.image}" alt="${variant.name} Deceiver" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Health</th><td>450 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>None</td></tr>
              <tr><th scope="row">Walk speed</th><td>12 studs/s; 8.5 studs/s while mimicking a target</td></tr>
              <tr><th scope="row">Run speed</th><td>20 studs/s while enraged</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Depends on mimicked class; see <a href="${deceiverWiki}#Weaponry" target="_blank" rel="noopener noreferrer">Weaponry</a></td></tr>
              <tr><th scope="row">Mimic attack damage</th><td>1</td></tr>
              <tr><th scope="row">Enraged attack damage</th><td>20</td></tr>
              <tr><th scope="row">Mimic execution threshold</th><td>Below 102 HP</td></tr>
              <tr><th scope="row">Enraged execution threshold</th><td>Below 40 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>Chance-based; see <a href="${deceiverWiki}#Spawn" target="_blank" rel="noopener noreferrer">Spawn</a></td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Spawn</h3>
        <p>The Deceiver can spawn in place of a regular infected anywhere on the map except <a href="${reactor4}" target="_blank" rel="noopener noreferrer">Reactor 4</a>. Each spawn attempt has a 5% chance to produce a Deceiver.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Mimic appearance</h3>
        <p>The Deceiver takes the appearance of a randomly chosen <a href="${examinationWiki}/Classes" target="_blank" rel="noopener noreferrer">class</a>, with a randomly generated name and rank and a username matching a random player in the server. Its black skin and damaged mask or equipment are the main visual giveaways.</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <thead><tr><th scope="col">Mimicked class</th><th scope="col">Visible difference</th></tr></thead>
            <tbody>
              ${classDifferences.map((item) => `
                <tr><th scope="row">${item.name}</th><td>${item.difference}</td></tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        <p>It appears on players' radars as a teammate with a green dot. The Leader and Commander variants also use a green dot, making them easier to spot.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior</h3>
        <h4>Mimic state</h4>
        <p>While wandering, the Deceiver moves at 12 studs/s. When a target is near or in sight, it approaches at 8.5 studs/s, follows them, and may briefly stop to stare. At about 5 studs, it pulls out its weapon and keeps advancing.</p>
        <p>It occasionally attempts player voice lines and may use the same hand gestures as players. Classes other than Medic, Corpsman, and Enforcer hold their primary weapon; Medic and Corpsman Deceivers may hold a VIREL-M MedUnit.</p>
        <p>After becoming enraged, it can no longer hold those items for the rest of its life. The weapon does not appear on its model, which can reveal its identity.</p>
        <h4>Enraged state</h4>
        <p>When enraged, it wanders at 12 studs/s and chases targets at 20 studs/s. If a target stays out of sight for more than 10 seconds, it resumes wandering. After a prolonged period without detecting or chasing a target, it may return to its mimic state.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <h4>Revealing itself</h4>
        <p>The Deceiver reveals its glowing orange eyes and becomes enraged when any of these occur:</p>
        <ul>
          <li>A target backs off for at least 1 second after the Deceiver has drawn its weapon.</li>
          <li>A player witnesses it execute another player.</li>
          <li>It takes damage. When damaged, it also screams while chasing.</li>
          <li>It spots a player who enraged it earlier in that same life.</li>
        </ul>
        <h4>Attacks</h4>
        <p><strong>Mimic state:</strong> It stabs at medium range for 1 damage. A hit on a player below 102 HP triggers an execution; a back attack uses the special backstab execution.</p>
        <p><strong>Enraged state:</strong> It stabs at medium range for 20 damage per hit, with a 0.5-second cooldown. A hit on a player below 40 HP triggers an execution, with the backstab animation used when attacked from behind.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Weaponry</h3>
        <p>Its weapon depends on the class it is mimicking. Medic and Corpsman variants use a scalpel; Leader and Commander variants use a bayonet; all other variants use a glass shard. These weapons have no stat differences.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Voice lines</h3>
        <p>During its mimic state, it may imitate player voice lines. The sound is a distinct radio effect, and subtitles show random symbols rather than real sentences. It may accompany the lines with player-like hand gestures.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        ${sounds.map((sound) => `
          <p>${sound.label}</p>
          <audio class="enemy-audio" controls preload="none" ${sound.loop ? "loop" : ""} aria-label="${sound.label}" src="${sound.file}">Your browser does not support audio playback.</audio>
        `).join("")}
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${examinationWiki}/Special:FilePath/${animation.file}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger immunity:</strong> Gunshots do not stun the Deceiver.</li>
          <li><strong>Dreadnought:</strong> It opens doors when it walks up to them.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Deceivers are rare, intelligent variants infected with the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a> that have undergone the Dreadnought mutation. Unlike most infected, they can imitate human behavior and use that ability to hunt, usually targeting people who are alone. They approach, speak, and follow until their target turns away, then attack with a sharp object and feast on the body.</p>
        <p>They are resilient to low-caliber rounds and melee attacks, and more agile than most infected. Their voice can imitate a host's, but prolonged speech becomes deep and distorted. After being injured, they may retreat before returning with a more covert approach. Their glowing eyes can be suppressed while mimicking people; damaged equipment, bloodied clothing, wounds, and a distorted voice can give them away.</p>
        <p>At Itagura NPP, Deceivers are primarily Menlonian Ground Forces soldiers who were infected and underwent the Dreadnought mutation. They use sharp objects as weapons, including bayonets for Leaders and Commanders, scalpels for Medics and Corpsmen, or improvised glass shards for other soldiers.</p>
        <h4>HPCA research</h4>
        <p>In starvation tests, a captured Deceiver ignored other infected placed in its cell, including Lurkers and Risers. When a Loner was later introduced, it studied the host's body to improve its mimicry and tried to lure an uninformed person into the cell using the host's voice. By day 10 it had killed and eaten the Loner, then became enraged and unstable before a security team tranquilized it. The tests suggest a starving Deceiver may kill and cannibalize weaker infected.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Combat archive</h3>
        <p>The Deceiver is one of the most unpredictable infected: a stealthy hunter that can mimic how people talk, walk, interact, and behave. It targets lone survivors, approaching and speaking to gain enough trust for its target to turn away before it strikes. Watch for visible wounds, a distorted voice, and excessive blood on its attire; pay close attention to anyone who approaches suspiciously.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>It shares its execution animation with the <a href="${examinationWiki}/Viral_Leader" target="_blank" rel="noopener noreferrer">Viral Leader</a>.</li>
          <li>The voice-line mimic is a slowed and pitched-down version of a sound used when a player sends an in-game chat message.</li>
          <li>Medic and Corpsman Deceivers holding a VIREL-M MedUnit immediately drop it when damaged, breaking it in half.</li>
          <li>Its unique spawn animation briefly shows it patting dirt off its clothing and gear.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderGunnerDetail(enemy) {
  const variantImages = [
    { name: "RSU 1", image: "https://static.wikitide.net/examinationwiki/b/bc/RSU_Gunner_1.png" },
    { name: "RSU 2", image: "https://static.wikitide.net/examinationwiki/5/54/RSU_Gunner_2.png" },
    { name: "HPCA 1", image: "https://static.wikitide.net/examinationwiki/b/be/HPCA_Gunner_1.png" },
    { name: "HPCA 2", image: "https://static.wikitide.net/examinationwiki/e/ec/HPCA_Gunner_2.png" },
  ];
  const sector2 = `${examinationWiki}/Sector_2`;
  const enemies = `${examinationWiki}/Enemies`;
  const weapons = [
    { name: "Lock-17", href: `${examinationWiki}/Lock-17`, damage: 7, magazine: 17, fireRate: 400 },
    { name: "SMX-9", href: `${examinationWiki}/SMX-9`, damage: 10, magazine: 30, fireRate: 600 },
    { name: "H762", href: `${examinationWiki}/Tentec_Arms_H762?action=edit&amp;redlink=1`, damage: 14, magazine: 20, fireRate: 350 },
  ];
  const galleryImages = [
    { name: "Removed MNPA Gunner", source: `${examinationWiki}/Special:FilePath/MPD_Gunner.webp` },
  ];
  const bashAnimations = [
    { name: "Bash animation 1", file: "Gunner_Bash_1.mp4" },
    { name: "Bash animation 2", file: "Gunner_Bash_2.mp4" },
  ];
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Gunner</h2>
          <p>“That's one less situation in the facility. Unfortunately it'd be better if more of those guys with guns got killed, but hey, we're grateful, they kill a lot of troops.”</p>
          <p><strong>Gunners</strong> are a rare type of <a href="${enemies}" target="_blank" rel="noopener noreferrer">Enemy</a> in Examination. They are slow and fragile, but use firearms to attack from afar, making them inconvenient to fight.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Gunner image">
                <img src="${variant.image}" alt="${variant.name} Gunner" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn location</th><td><a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a></td></tr>
              <tr><th scope="row">Health</th><td>150 HP; 100 HP (HPCA 2)</td></tr>
              <tr><th scope="row">Regeneration</th><td>1.5 HP/s; 1 HP/s (HPCA 2)</td></tr>
              <tr><th scope="row">Walk speed</th><td>8 studs/s; 6 studs/s while reloading</td></tr>
              <tr><th scope="row">Run speed</th><td>30 studs/s</td></tr>
              <tr><th scope="row">Primary equipment</th><td><a href="${weapons[0].href}" target="_blank" rel="noopener noreferrer">Lock-17</a> (HPCA); <a href="${weapons[1].href}" target="_blank" rel="noopener noreferrer">SMX-9</a> (RSU 1); <a href="${weapons[2].href}" target="_blank" rel="noopener noreferrer">H762</a> (RSU 2)</td></tr>
              <tr><th scope="row">Secondary equipment</th><td>Bash</td></tr>
              <tr><th scope="row">Bash damage</th><td>35</td></tr>
              <tr><th scope="row">Respawn time</th><td>6 minutes</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <p>Four Gunners spawn on the map in <a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a>. Each Gunner takes 6 minutes to respawn after death.</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats spawn-table">
            <thead><tr><th scope="col">Variant</th><th scope="col">Spawn location</th></tr></thead>
            <tbody>
              <tr><th scope="row">HPCA 1</th><td>Near the Utility room</td></tr>
              <tr><th scope="row">HPCA 2</th><td>Near the Accounting room</td></tr>
              <tr><th scope="row">RSU 1</th><td>Behind barriers at a chokepoint</td></tr>
              <tr><th scope="row">RSU 2</th><td>Sector 2; a specific spawn point is not listed</td></tr>
            </tbody>
          </table>
        </div>
        <p>HPCA Gunners wander around at 11 studs/s until they spot a target, then fire while strafing from side to side. If the target is out of sight but has not been lost, the Gunner runs at 30 studs/s toward its last seen location. After more than 10 seconds without seeing the target, it resumes wandering. When not engaging a target or after spending its magazine, it reloads and moves at 6 studs/s.</p>
        <p>RSU Gunners remain stationary at their spawn points and fire at any target in sight. They cannot traverse. They reload when their magazine is empty or they are not engaging a target.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Weaponry and attacks</h3>
        <p>Gunners have infinite reserve ammunition. Firearm damage is doubled on a headshot.</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <thead><tr><th scope="col">Firearm</th><th scope="col">Variant</th><th scope="col">Damage</th><th scope="col">Magazine</th><th scope="col">Fire rate</th></tr></thead>
            <tbody>
              ${weapons.map((weapon) => `
                <tr>
                  <th scope="row"><a href="${weapon.href}" target="_blank" rel="noopener noreferrer">${weapon.name}</a></th>
                  <td>${weapon.name === "Lock-17" ? "HPCA" : weapon.name === "SMX-9" ? "RSU 1" : "RSU 2"}</td>
                  <td>${weapon.damage}</td>
                  <td>${weapon.magazine}</td>
                  <td>${weapon.fireRate} RPM</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        <p>At close range, a Gunner bashes its target for 35 damage, with a 3-second cooldown.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Dreadnought:</strong> Gunners open doors when walking up to them.</li>
          <li><strong>Reaction Time:</strong> They typically take 1–2 seconds to start firing at a target; this is reduced when the target moves predictably.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${bashAnimations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${examinationWiki}/Special:FilePath/${animation.file}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <div class="enemy-variant-grid">
          ${galleryImages.map((image) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${image.source}" aria-label="View ${image.name}">
                <img src="${image.source}" alt="${image.name}" loading="lazy" />
              </button>
              <figcaption>${image.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Gunners are combatants infected with the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a> who underwent the Dreadnought mutation. The mutation preserved enough intelligence for rudimentary firearm use and complex interactions with objects, though Gunners are notably weaker than most other Dreadnoughts.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>An MNPA Gunner variant used to spawn in Sector 2, but was later removed from the game.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderFuryDetail(enemy) {
  const variantImages = [
    { name: "RSU 1", image: "https://static.wikitide.net/examinationwiki/6/68/RSU_Fury_2.png" },
    { name: "RSU 2", image: "https://static.wikitide.net/examinationwiki/b/b5/RSU_Fury.png" },
    { name: "HPCA Chemical", image: "https://static.wikitide.net/examinationwiki/6/66/HPCA_Fury.png" },
  ];
  const sector1 = `${examinationWiki}/Sector_1`;
  const sector2 = `${examinationWiki}/Sector_2`;
  const lurker = `${examinationWiki}/Lurker`;
  const cityFuryPage = `${examinationWiki}/City_Fury`;
  const cityRestart = `${examinationWiki}/Mechanics#Relay_Station`;
  const animations = [
    { name: "Execution animation", file: "Fury_Execution.mp4" },
    { name: "HPCA Chemical execution animation", file: "Chem_Fury_Execution.mp4" },
  ];
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Fury</h2>
          <p>“These people had a hot temper when they were truly alive. These guys are way more aggressive than basic fodder.”</p>
          <p><strong>Fury</strong> is a rare type of <a href="${examinationWiki}/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> in Examination. It behaves similarly to the <a href="${lurker}" target="_blank" rel="noopener noreferrer">Lurker</a>, but is tougher and attacks much faster.</p>
          <button class="begin-button" type="button" data-related-enemy-id="city-infected-city-fury">View City Fury archive</button>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Fury image">
                <img src="${variant.image}" alt="${variant.name} Fury" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn locations</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a> and <a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a></td></tr>
              <tr><th scope="row">Health</th><td>300 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>3 HP/s</td></tr>
              <tr><th scope="row">Walk speed</th><td>9 studs/s</td></tr>
              <tr><th scope="row">Run speed</th><td>24 studs/s</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Claws</td></tr>
              <tr><th scope="row">Damage</th><td>10</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 22 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>2 minutes 30 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <p>Three Furies spawn by default. Each variant has a prioritized spawn location, and a Fury takes 2 minutes and 30 seconds to respawn after death.</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats spawn-table">
            <thead><tr><th scope="col">Variant</th><th scope="col">Spawn location</th></tr></thead>
            <tbody>
              <tr><th scope="row">RSU 1</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a>, storage room near the <a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a> entrance</td></tr>
              <tr><th scope="row">RSU 2</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a></td></tr>
              <tr><th scope="row">HPCA Chemical</th><td><a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a>, Executive Offices</td></tr>
            </tbody>
          </table>
        </div>
        <p>Fury wanders around at 9 studs/s until it spots a target. It then halts and roars before chasing the target at 24 studs/s. If the target stays out of sight for more than 10 seconds, Fury resumes wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attacks and attributes</h3>
        <p>Fury attacks with its claws at medium range, dealing 10 damage per hit with a 0.4-second cooldown. It performs an execution if it hits a player below 22 HP.</p>
        <ul>
          <li><strong>Stagger Immunity:</strong> Fury is not stunned by gunshots.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Fury idle — plays on loop for regular Furies, excluding HPCA Chemical.</p>
        <audio class="enemy-audio" controls loop preload="none" src="https://static.wikitide.net/examinationwiki/f/f9/Fury_Idle.mp3">Your browser does not support audio playback.</audio>
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${examinationWiki}/Special:FilePath/${animation.file}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Furies are a much stronger, neurotic version of the <a href="${lurker}" target="_blank" rel="noopener noreferrer">Lurker</a>, categorized under the “Emotional Mutation” subset. They remain in a state of heightened, animalistic rage and display extreme violence toward living beings, objects, and sometimes other infected.</p>
        <p>The <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a> has stripped away their self-preservation; even gunfire does not faze them as they rush their victims.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>HPCA Chemical Fury has a different execution animation from RSU Furies.</li>
          <li>Furies could block their heads when shot in <a href="${examinationWiki}/1.3.699" target="_blank" rel="noopener noreferrer">Patch 1.3699</a>. The ability was removed shortly afterward and later readded in <a href="${examinationWiki}/1.3.8" target="_blank" rel="noopener noreferrer">Patch 1.3.8</a>.</li>
          <li>The HPCA Chemical Fury execution may be inspired by Perfection's Head Splitter move in Jujutsu Shenanigans, which has a similar animation and nearly identical sounds.</li>
          <li>The <a href="${cityFuryPage}" target="_blank" rel="noopener noreferrer">City Fury</a> is a unique variant that appears during the <a href="${cityRestart}" target="_blank" rel="noopener noreferrer">Server Restart event</a>.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderCityFuryDetail(enemy) {
  const streets = `${examinationWiki}/Locations#Streets`;
  const serverRestart = `${examinationWiki}/Mechanics#Relay_Station`;
  const regularFury = `${examinationWiki}/Fury`;
  const oldAppearance = "RCU_Fury.png";
  const oldAppearanceSource = `${examinationWiki}/Special:FilePath/${oldAppearance}`;
  const oldAppearancePage = `${examinationWiki}/File:${oldAppearance}`;
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">City Infected · Combat Archive</p>
          <h2>City Fury</h2>
          <p>“His hands clawed at the mask. It was already too late.” — Private Cason Holcomb</p>
          <p><strong>City Fury</strong> is a variant of the regular <a href="${regularFury}" target="_blank" rel="noopener noreferrer">Fury</a>. It behaves identically but can absorb more damage.</p>
          <button class="begin-button" type="button" data-related-enemy-id="regulars-fury">View regular Fury archive</button>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn location</th><td><a href="${streets}" target="_blank" rel="noopener noreferrer">Streets</a></td></tr>
              <tr><th scope="row">Health</th><td>500 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>None</td></tr>
              <tr><th scope="row">Walk speed</th><td>9 studs/s</td></tr>
              <tr><th scope="row">Run speed</th><td>24 studs/s</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Claws</td></tr>
              <tr><th scope="row">Damage</th><td>10</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 22 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>2 minutes 30 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <p>One City Fury spawns in the <a href="${streets}" target="_blank" rel="noopener noreferrer">Streets</a> during the <a href="${serverRestart}" target="_blank" rel="noopener noreferrer">Server Restart event</a>. It wanders at 9 studs/s until it spots a target, then halts and roars before chasing at 24 studs/s. If the target stays out of sight for more than 10 seconds, City Fury resumes wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attacks and attributes</h3>
        <p>City Fury attacks with its claws at medium range, dealing 10 damage per hit with a 0.4-second cooldown. It performs an execution if it hits a player below 22 HP.</p>
        <ul>
          <li><strong>Stagger Immunity:</strong> City Fury is not stunned by gunshots.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <div class="enemy-variant-grid">
          <figure class="enemy-variant">
            <button class="enemy-variant-image" type="button" data-image-src="${oldAppearanceSource}" aria-label="View old City Fury appearance">
              <img src="${oldAppearanceSource}" alt="Old City Fury appearance" loading="lazy" />
            </button>
            <figcaption><a href="${oldAppearancePage}" target="_blank" rel="noopener noreferrer">Old appearance</a></figcaption>
          </figure>
        </div>
        <div class="animation-grid">
          <button class="animation-card" type="button" data-video-src="${examinationWiki}/Special:FilePath/City_Fury_Execution.mp4" data-video-fullscreen aria-label="Play City Fury execution animation">
            <span class="animation-play-icon" aria-hidden="true">▶</span>
            <span>Execution animation</span>
          </button>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>City Fury shares the regular Fury's emotional mutation and aggressive behavior. Its appearance during the Server Restart event is not canon to the lore, as the event itself is non-canon.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>Before update <a href="${examinationWiki}/1.3.95" target="_blank" rel="noopener noreferrer">1.3.95</a>, City Fury had the same parameters as regular Fury, except it lacked the block ability.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderRadawayDetail(enemy) {
  const sector2 = `${examinationWiki}/Sector_2`;
  const enemies = `${examinationWiki}/Enemies`;
  const attackSound = "https://static.wikitide.net/examinationwiki/7/7b/Radaway_Attack.mp3";
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Radaway</h2>
          <p>“Very rare bunch, only coming from a toxic bunch. Bit useless for us, just kill them to keep the peace. These things make our work insufferable with their radioactivity.”</p>
          <p><strong>Radaway</strong> is a rare type of <a href="${enemies}" target="_blank" rel="noopener noreferrer">Enemy</a> in Examination. Slow but extremely radioactive, it steadily damages players who get too close.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn Location</th><td><a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a></td></tr>
              <tr><th scope="row">Health points</th><td>200</td></tr>
              <tr><th scope="row">Regeneration</th><td>2 HP/s</td></tr>
              <tr><th scope="row">Default speed</th><td>7</td></tr>
              <tr><th scope="row">Pursuit speed</th><td>8.5</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Radiation</td></tr>
              <tr><th scope="row">Damage</th><td>7 every 0.4 seconds</td></tr>
              <tr><th scope="row">Respawn time</th><td>6 minutes</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>Two Radaways spawn in <a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a>: one near the Accounting room and another in the Logistics area behind Gate 1. Each Radaway takes 6 minutes to respawn after death.</p>
        <h4>Behavior</h4>
        <p>Radaway wanders at 7 studs/s until it spots a target, then chases at 8.5 studs/s. If the target stays out of sight for more than 10 seconds, it returns to wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <p>Radaway deals 7 damage every 0.4 seconds to a target within roughly 5 studs. It can only damage one target at a time.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Taser Resistance:</strong> Stun from the <a href="${examinationWiki}/TASC-10" target="_blank" rel="noopener noreferrer">TASC-10</a> lasts only 3.5 seconds, and Radaway remains standing instead of falling to the ground.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Radaway attack sound effect.</p>
        <audio class="enemy-audio" controls preload="none" src="${attackSound}">
          Your browser does not support audio playback.
        </audio>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Radaways were researchers and engineers of the Hazardous Pathogen Control Agency who worked near the reactors or in the basement of the Itagura Nuclear Power Plant. After a reactor melted down and exploded, they took lethal doses of radiation and became infected with the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a>.</p>
        <p>The radiation has melted their skin and flesh. They approach their prey to expose them to a lethal dose, but lack special mutations, leaving them slow, fragile, and predictable.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>Radaways used to resemble an <a href="${examinationWiki}/Hazardous_Pathogen_Control_Agency" target="_blank" rel="noopener noreferrer">HPCA</a> <a href="${examinationWiki}/Lurker" target="_blank" rel="noopener noreferrer">Lurker</a>, with radiation particles as the only visual difference.</li>
        </ul>
      </section>
    </article>
  `;
}

function renderSlasherDetail(enemy) {
  const variantImages = [
    { name: "HPCA", image: "https://static.wikitide.net/examinationwiki/4/4f/HPCA_Slasher.png" },
    { name: "RSU", image: "https://static.wikitide.net/examinationwiki/f/fd/RSU_Slasher.png" },
    { name: "MFD", image: "https://static.wikitide.net/examinationwiki/9/9b/MFD_Slasher.png" },
    { name: "RIF", image: "https://static.wikitide.net/examinationwiki/0/0d/RIF_Slasher.png" },
    { name: "OZK", image: "https://static.wikitide.net/examinationwiki/f/fc/OZK_Slasher.png" },
  ];
  const galleryImages = [
    { name: "Green WhatsApp Slasher (NS Branch)", file: "Whatsapp_slasher.png" },
    { name: "Green WhatsApp Slasher render", file: "Whatsapp_slasher_render.jpg" },
  ];
  const axe = `${examinationWiki}/Axe`;
  const axeReskins = `${axe}#Reskins`;
  const viralLeader = `${examinationWiki}/Viral_Leader`;
  const sector1 = `${examinationWiki}/Sector_1`;
  const sector2 = `${examinationWiki}/Sector_2`;
  const sector3 = `${examinationWiki}/Sector_3`;
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Slasher</h2>
          <p>“Dreadnoughts, we call 'em. Able to wield weapons and even use them. They're quite a smart bunch. They're always in pain, but those things have some pain tolerance, I'll tell you.”</p>
          <p><strong>Slashers</strong> are a type of <a href="${examinationWiki}/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> in Examination, wielding either an <a href="${axe}" target="_blank" rel="noopener noreferrer">Axe</a> or a Sledgehammer to attack their prey. Their high health and damage make them dangerous, though their movement and attack speeds are low.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Slasher image">
                <img src="${variant.image}" alt="${variant.name} Slasher" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn locations</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a>, <a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a>, and <a href="${sector3}" target="_blank" rel="noopener noreferrer">Sector 3</a></td></tr>
              <tr><th scope="row">Health</th><td>650 HP; 700 HP (RIF); 750 HP (RSU)</td></tr>
              <tr><th scope="row">Regeneration</th><td>6.5 HP/s; 7 HP/s (RIF); 7.5 HP/s (RSU)</td></tr>
              <tr><th scope="row">Walk speed</th><td>7 studs/s</td></tr>
              <tr><th scope="row">Pursuit speed</th><td>8.5 studs/s; 16 studs/s when enraged</td></tr>
              <tr><th scope="row">Primary equipment</th><td><a href="${axe}" target="_blank" rel="noopener noreferrer">Axe</a>; <a href="${axeReskins}" target="_blank" rel="noopener noreferrer">Sledgehammer</a> (RSU); <a href="${axeReskins}" target="_blank" rel="noopener noreferrer">Green Axe</a> (OZK)</td></tr>
              <tr><th scope="row">Damage</th><td>45; 55 when enraged</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 65 HP; below 75 HP when enraged (listed stats)</td></tr>
              <tr><th scope="row">Respawn time</th><td>5 minutes 10 seconds</td></tr>
              <tr><th scope="row">Drop</th><td><a href="${axe}" target="_blank" rel="noopener noreferrer">Axe</a>; <a href="${axeReskins}" target="_blank" rel="noopener noreferrer">Sledgehammer</a> (RSU); <a href="${axeReskins}" target="_blank" rel="noopener noreferrer">Green Axe</a> (OZK)</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <p>Five Slashers spawn by default. Each variant has a prioritized spawn location, and a Slasher takes 5 minutes and 10 seconds to respawn after death.</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats spawn-table">
            <thead><tr><th scope="col">Variant</th><th scope="col">Prioritized spawn location</th></tr></thead>
            <tbody>
              <tr><th scope="row">HPCA</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a>, near the <a href="${sector3}" target="_blank" rel="noopener noreferrer">Sector 3</a> entrance</td></tr>
              <tr><th scope="row">RSU</th><td>Sector 1, near <a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a>'s emergency exit</td></tr>
              <tr><th scope="row">MFD</th><td>Sector 1, near an intersection</td></tr>
              <tr><th scope="row">RIF</th><td>Sector 2 chokepoint</td></tr>
              <tr><th scope="row">OZK</th><td>Sector 3, in Subsector-1, near a pile of <a href="${examinationWiki}/Menlonian_Ground_Forces" target="_blank" rel="noopener noreferrer">MGF</a> soldiers' bodies</td></tr>
            </tbody>
          </table>
        </div>
        <p>Slashers wander at 7 studs/s until they spot a target, then chase at 8.5 studs/s. If the target stays out of sight for more than 10 seconds, a Slasher returns to wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attacks and protection</h3>
        <p>A Slasher strikes at medium range with its weapon, dealing 45 damage every 5 seconds. The attack details provided list its execution threshold as below 55 HP, which differs from the thresholds in the stat block above.</p>
        <p>There is a 50% chance that an execution is replaced by a throat slice. The player slowly bleeds out and cannot use items, weapons, or voicelines.</p>
        <p>After taking damage, a Slasher has a chance to stop and block its face with its weapon, partially obstructing headshots. This protection has an approximately 5-second cooldown.</p>
        <ul>
          <li><strong>Stagger Immunity:</strong> Slashers are not stunned by gunshots.</li>
          <li><strong>Dreadnought:</strong> They open doors when walking up to them.</li>
          <li><strong>Axe Parry:</strong> If a Slasher attacks while a player is swinging an <a href="${axe}" target="_blank" rel="noopener noreferrer">Axe</a> or one of its reskins, the attack is parried and deals no damage to the player.</li>
          <li>The parry does not cancel the player's melee damage; the Slasher and other enemies can still be hit by the swing.</li>
          <li>Parrying does not prevent an execution if the player is below 10 HP.</li>
          <li><strong>Fire Resistance:</strong> The MFD variant takes one fewer tick of burn damage from the <a href="${examinationWiki}/SHC-23" target="_blank" rel="noopener noreferrer">SHC-23</a>.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Rage</h3>
        <p>Near a <a href="${viralLeader}" target="_blank" rel="noopener noreferrer">Viral Leader</a>, a Slasher becomes enraged: its eyes turn red, it screams constantly, its damage increases to 55, its attack cooldown drops to 2 seconds, and it chases at 16 studs/s.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Slasher idle — plays on loop.</p>
        <audio class="enemy-audio" controls loop preload="none" src="https://static.wikitide.net/examinationwiki/2/23/Slasher_Idle.mp3">Your browser does not support audio playback.</audio>
        <p>RSU Slasher idle — plays on loop.</p>
        <audio class="enemy-audio" controls loop preload="none" src="https://static.wikitide.net/examinationwiki/0/05/RSU_Slasher_Idle.mp3">Your browser does not support audio playback.</audio>
        <p>Dreadnought scream — plays when blocking.</p>
        <audio class="enemy-audio" controls preload="none" src="https://static.wikitide.net/examinationwiki/1/1a/Dreadnought_Scream.mp3">Your browser does not support audio playback.</audio>
        <p>Enraged Slasher — plays on loop while enraged.</p>
        <audio class="enemy-audio" controls loop preload="none" src="https://static.wikitide.net/examinationwiki/d/d6/Enraged_Slasher.mp3">Your browser does not support audio playback.</audio>
        <p>Slasher rage spotted — plays after spotting a target while enraged.</p>
        <audio class="enemy-audio" controls preload="none" src="https://static.wikitide.net/examinationwiki/7/7e/Slasher_Rage_Spotted.mp3">Your browser does not support audio playback.</audio>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <div class="enemy-variant-grid">
          ${galleryImages.map((image) => {
            const source = `${examinationWiki}/Special:FilePath/${encodeURIComponent(image.file)}`;
            const page = `${examinationWiki}/File:${encodeURIComponent(image.file)}`;
            return `
              <figure class="enemy-variant">
                <button class="enemy-variant-image" type="button" data-image-src="${source}" aria-label="View ${image.name}">
                  <img src="${source}" alt="${image.name}" loading="lazy" />
                </button>
                <figcaption><a href="${page}" target="_blank" rel="noopener noreferrer">${image.name}</a></figcaption>
              </figure>
            `;
          }).join("")}
        </div>
        <div class="animation-grid">
          <button class="animation-card" type="button" data-video-src="${examinationWiki}/Special:FilePath/Slasher_Execution.mp4" aria-label="Play Slasher execution animation">
            <span class="animation-play-icon" aria-hidden="true">▶</span>
            <span>Execution animation</span>
          </button>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Slashers are Dreadnoughts infected with the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a>. Dreadnoughts retain their physical and intellectual features, as well as survival instincts, after infection.</p>
        <p>Their physical resilience lets them endure severe injuries, and their retained intelligence allows them to operate weapons. Unlike regular infected, they have enough self-preservation to try to halt or limit harm done to them.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>The Axe variant used to be the only Slasher variant in the game.</li>
          <li>A green “WhatsApp” Slasher appears in <a href="${examinationWiki}/Yuri_Scarlet" target="_blank" rel="noopener noreferrer">Yuri Scarlet</a>'s <a href="${examinationWiki}/Blood_Handed_Retriever" target="_blank" rel="noopener noreferrer">simulation</a>, emitting WhatsApp notification sounds passively and during its execution.</li>
          <li>The current execution animation is one of the oldest in the game and has been unchanged since 2025.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderShielderDetail(enemy) {
  const variantImages = [
    { name: "MNPA", image: "https://static.wikitide.net/examinationwiki/e/e5/MNPA_Shielder_2.png" },
    { name: "MNPA 2", image: "https://static.wikitide.net/examinationwiki/8/8a/MNPA_Shielder.png" },
    { name: "MGF MP", image: "https://static.wikitide.net/examinationwiki/5/5e/MGF_MP_Shielder.png" },
  ];
  const galleryImages = [
    { name: "Alternative MNPA render", file: "MPD_Shielder.png" },
    { name: "Removed RSU variant", file: "RSU_Shielder.png" },
  ];
  const sector1 = `${examinationWiki}/Sector_1`;
  const viralLeader = `${examinationWiki}/Viral_Leader`;
  const shieldPenetrators = ["AEN-50", "SHC-23", "Arcturus .50"];
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Shielder</h2>
          <p>“Those were issued to the military for the refugees that camped here, before everything went off. They're full of hate and spite.”</p>
          <p><strong>Shielders</strong> are a relatively common type of <a href="${examinationWiki}/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> in Examination. They carry a shield and baton, advancing on their targets while their shield blocks most incoming damage.</p>
          <button class="begin-button" type="button" data-related-enemy-id="city-infected-city-shielder">View City Shielder archive</button>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Shielder image">
                <img src="${variant.image}" alt="${variant.name} Shielder" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn location</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a></td></tr>
              <tr><th scope="row">Health</th><td>350 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>3.5 HP/s</td></tr>
              <tr><th scope="row">Walk speed</th><td>7 studs/s</td></tr>
              <tr><th scope="row">Pursuit speed</th><td>7.5 studs/s; 11 when enraged</td></tr>
              <tr><th scope="row">Rush speed</th><td>13 studs/s</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Baton</td></tr>
              <tr><th scope="row">Damage</th><td>25; 30 when enraged</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 35 HP; below 40 HP when enraged</td></tr>
              <tr><th scope="row">Respawn time</th><td>1 minute 55 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <p>Three Shielders spawn by default, with more appearing as the server's player count increases. A Shielder takes 1 minute and 55 seconds to respawn after death.</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats spawn-table">
            <thead><tr><th scope="col">Variant</th><th scope="col">Prioritized spawn location</th></tr></thead>
            <tbody>
              <tr><th scope="row">MNPA</th><td>Center of Sector 1, near a forklift</td></tr>
              <tr><th scope="row">MNPA 2</th><td>Sector 1, near the entrance gate</td></tr>
              <tr><th scope="row">MGF MP</th><td>Sector 1, near <a href="${examinationWiki}/Generator_2?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">Generator 2</a></td></tr>
            </tbody>
          </table>
        </div>
        <p>Shielders wander at 7 studs/s until they spot a target, then bang their shields and chase at 7.5 studs/s. At close range, they rush at 13 studs/s. If a target stays out of sight for more than 10 seconds, a Shielder returns to wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attacks and attributes</h3>
        <p>A Shielder strikes with its baton for 25 damage every 2 seconds at medium range. When enraged, its attacks deal 30 damage with a 0.8-second cooldown. It executes players below 35 HP, or below 40 HP while enraged.</p>
        <ul>
          <li><strong>Stagger Immunity:</strong> Shielders are not stunned by gunshots.</li>
          <li><strong>Dreadnought:</strong> They open doors when walking up to them.</li>
          <li><strong>Shield:</strong> Blocks most incoming damage and can only be penetrated by ${shieldPenetrators.map((weapon) => `<a href="${examinationWiki}/${encodeURIComponent(weapon).replaceAll("%2E", ".")}" target="_blank" rel="noopener noreferrer">${weapon}</a>`).join(", ")}. The head and right arm remain partially exposed.</li>
          <li>When sprinting, a Shielder moves its arm-mounted shield aside, leaving itself exposed.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Rage</h3>
        <p>Near a <a href="${viralLeader}" target="_blank" rel="noopener noreferrer">Viral Leader</a>, a Shielder becomes enraged: its eyes turn red, pursuit speed increases to 11 studs/s, damage increases to 30, and attack cooldown drops to 0.8 seconds.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Shielder idle — plays on loop.</p>
        <audio class="enemy-audio" controls loop preload="none" src="https://static.wikitide.net/examinationwiki/3/38/Shielder_Idle.mp3">Your browser does not support audio playback.</audio>
        <p>Shield bang — plays when spotting a player.</p>
        <audio class="enemy-audio" controls preload="none" src="https://static.wikitide.net/examinationwiki/6/6f/Shielder_Bang.mp3">Your browser does not support audio playback.</audio>
        <p>Dreadnought scream — plays when stunned from a bash.</p>
        <audio class="enemy-audio" controls preload="none" src="https://static.wikitide.net/examinationwiki/1/1a/Dreadnought_Scream.mp3">Your browser does not support audio playback.</audio>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <div class="enemy-variant-grid">
          ${galleryImages.map((image) => {
            const source = `${examinationWiki}/Special:FilePath/${encodeURIComponent(image.file)}`;
            const page = `${examinationWiki}/File:${encodeURIComponent(image.file)}`;
            return `
              <figure class="enemy-variant">
                <button class="enemy-variant-image" type="button" data-image-src="${source}" aria-label="View ${image.name}">
                  <img src="${source}" alt="${image.name}" loading="lazy" />
                </button>
                <figcaption><a href="${page}" target="_blank" rel="noopener noreferrer">${image.name}</a></figcaption>
              </figure>
            `;
          }).join("")}
        </div>
        <div class="animation-grid">
          <button class="animation-card" type="button" data-video-src="${examinationWiki}/Special:FilePath/Shielder_Execution.mp4" aria-label="Play Shielder execution animation">
            <span class="animation-play-icon" aria-hidden="true">▶</span>
            <span>Execution animation</span>
          </button>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Shielders were members of the <a href="${examinationWiki}/Menlo%E2%80%99s_National_Police_Authority?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">MNPA</a> or the <a href="${examinationWiki}/Menlonian_Ground_Forces" target="_blank" rel="noopener noreferrer">MGF</a> military police. They were issued shields and batons to control riots among refugees near the <a href="${examinationWiki}/Itagura_Nuclear_Power_Plant" target="_blank" rel="noopener noreferrer">Itagura Nuclear Power Plant</a>.</p>
        <p>After infection with the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a>, they underwent the Dreadnought mutation. They retain enough intelligence to use their equipment and interact with objects, but are more spiteful and violent than usual.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>The shield-banging sound effect comes from the Shield enemy in <a href="https://payday.fandom.com/wiki/Shield_(Payday_2)" target="_blank" rel="noopener noreferrer">PAYDAY 2</a>.</li>
          <li>An RSU Shielder variant was replaced by the second MNPA variant in the normal game, but can still be seen in Blood Handed Retriever.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderCityShielderDetail(enemy) {
  const variantImages = [
    { name: "MNPA 1", image: "https://static.wikitide.net/examinationwiki/c/cd/MNPA_City_Shielder.png" },
    { name: "MNPA 2", image: "https://static.wikitide.net/examinationwiki/9/9f/MNPA_City_Shielder_2.png" },
  ];
  const galleryImages = [
    { name: "Old appearance", file: "RCU_Shielder_1.png" },
    { name: "Old appearance alternate render", file: "RCU_Shielder_2.png" },
  ];
  const streets = `${examinationWiki}/Locations#Streets`;
  const serverRestart = `${examinationWiki}/Mechanics#Relay_Station`;
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">City Infected · Combat Archive</p>
          <h2>City Shielder</h2>
          <p>“We held our ground until there was nothing left to hold.” — Sergeant Hermann Lutz</p>
          <p><strong>City Shielder</strong> is a unique variant of the <a href="${examinationWiki}/Shielder" target="_blank" rel="noopener noreferrer">Shielder</a>, with stronger defenses. Its shield blocks most incoming damage as it advances on the player.</p>
          <button class="begin-button" type="button" data-related-enemy-id="regulars-shielder">View regular Shielder archive</button>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <p>Both City Shielder variants are exclusive to the Server Restart event.</p>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} City Shielder image">
                <img src="${variant.image}" alt="${variant.name} City Shielder" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn location</th><td><a href="${streets}" target="_blank" rel="noopener noreferrer">Streets</a></td></tr>
              <tr><th scope="row">Health</th><td>700 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>None</td></tr>
              <tr><th scope="row">Walk speed</th><td>10 studs/s</td></tr>
              <tr><th scope="row">Run speed</th><td>None</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Baton</td></tr>
              <tr><th scope="row">Secondary equipment</th><td>Counterattack</td></tr>
              <tr><th scope="row">Baton damage</th><td>25</td></tr>
              <tr><th scope="row">Counterattack damage</th><td>20</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 35 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>None</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
              <tr><th scope="row">Affiliation</th><td>Menlo's National Police Authority</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <p>Two City Shielders spawn in the <a href="${streets}" target="_blank" rel="noopener noreferrer">Streets</a> during the <a href="${serverRestart}" target="_blank" rel="noopener noreferrer">Server Restart event</a>. They wander at 10 studs/s, bang their shields when spotting a target, then pursue it at the same speed. If a target stays out of sight for more than 10 seconds, they return to wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attacks and protection</h3>
        <p>A City Shielder strikes with its baton for 25 damage every 2 seconds at medium range. It executes players below 35 HP.</p>
        <p>Every 5 seconds, it stops and braces its shield for 2.5 seconds. If a player bashes it during this protective stance, the Shielder counterattacks for 20 damage instead. The player is not stunned, and the City Shielder is not staggered.</p>
        <ul>
          <li><strong>Stagger Immunity:</strong> City Shielders are not stunned by gunshots.</li>
          <li><strong>Dreadnought:</strong> They open doors when walking up to them.</li>
          <li><strong>Shield:</strong> Blocks most incoming damage and can only be penetrated by <a href="${examinationWiki}/AEN-50" target="_blank" rel="noopener noreferrer">AEN-50</a>, <a href="${examinationWiki}/SHC-23" target="_blank" rel="noopener noreferrer">SHC-23</a>, and <a href="${examinationWiki}/Arcturus_.50" target="_blank" rel="noopener noreferrer">Arcturus .50</a>. The head and right arm remain partially exposed.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Shielder idle — plays on loop.</p>
        <audio class="enemy-audio" controls loop preload="none" src="https://static.wikitide.net/examinationwiki/3/38/Shielder_Idle.mp3">Your browser does not support audio playback.</audio>
        <p>Shield bang — plays when spotting a player.</p>
        <audio class="enemy-audio" controls preload="none" src="https://static.wikitide.net/examinationwiki/6/6f/Shielder_Bang.mp3">Your browser does not support audio playback.</audio>
        <p>Dreadnought scream — plays when stunned from a bash.</p>
        <audio class="enemy-audio" controls preload="none" src="https://static.wikitide.net/examinationwiki/1/1a/Dreadnought_Scream.mp3">Your browser does not support audio playback.</audio>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <div class="enemy-variant-grid">
          ${galleryImages.map((image) => {
            const source = `${examinationWiki}/Special:FilePath/${encodeURIComponent(image.file)}`;
            const page = `${examinationWiki}/File:${encodeURIComponent(image.file)}`;
            return `
              <figure class="enemy-variant">
                <button class="enemy-variant-image" type="button" data-image-src="${source}" aria-label="View ${image.name}">
                  <img src="${source}" alt="${image.name}" loading="lazy" />
                </button>
                <figcaption><a href="${page}" target="_blank" rel="noopener noreferrer">${image.name}</a></figcaption>
              </figure>
            `;
          }).join("")}
        </div>
        <div class="animation-grid">
          <button class="animation-card" type="button" data-video-src="${examinationWiki}/Special:FilePath/RCU_Shielder_Execution.mp4" aria-label="Play City Shielder execution animation">
            <span class="animation-play-icon" aria-hidden="true">▶</span>
            <span>Execution animation</span>
          </button>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>City Shielders were riot-control personnel with the <a href="${examinationWiki}/Menlo%27s_National_Police_Authority?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">Menlo's National Police Authority</a>, infected with the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a> and mutated into <a href="${examinationWiki}/Dreadnought" target="_blank" rel="noopener noreferrer">Dreadnoughts</a>.</p>
        <p>Their appearance in the game is not canon, as the Server Restart event is not canon to the lore.</p>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderLurkerDetail(enemy) {
  const variantImages = [
    { name: "Engineer", image: "https://static.wikitide.net/examinationwiki/7/7b/Engineer_Lurker.png" },
    { name: "Welder", image: "https://static.wikitide.net/examinationwiki/a/ae/Welder_Lurker.png" },
    { name: "RSU", image: "https://static.wikitide.net/examinationwiki/thumb/f/fb/RSU_Lurker.png/600px-RSU_Lurker.png" },
    { name: "MMS", image: "https://static.wikitide.net/examinationwiki/e/e7/MMS_Lurker.png" },
    { name: "HPCA", image: "https://static.wikitide.net/examinationwiki/b/b2/HPCA_Lurker.png" },
    { name: "RIF OZK", image: "https://static.wikitide.net/examinationwiki/f/f3/OZK_Lurker.png" },
  ];
  const animations = [
    { name: "Execution animation 1", file: "Lurker_Execution_1.mp4" },
    { name: "Execution animation 2", file: "Lurker_Execution_2.mp4" },
    { name: "Execution animation 3", file: "Lurker_Execution_3.mp4" },
    { name: "Save animation", file: "Lurker_Save.mp4" },
    { name: "Maul animation", file: "Lurker_Maul.mp4" },
  ];
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Lurker</h2>
          <p>Simple basic things. Basic fodder, basic everywhere. Just don't let them have their bloody hands on you.</p>
          <p>Lurker is the most common type of enemy in Examination. They have average speed and damage, possessing no special attributes of their own. They are only dangerous in groups.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Lurker image">
                <img src="${variant.image}" alt="${variant.name} Lurker" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Health</th><td>150 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>1.5 HP/s</td></tr>
              <tr><th scope="row">Walk speed</th><td>9</td></tr>
              <tr><th scope="row">Run speed</th><td>17</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Fists</td></tr>
              <tr><th scope="row">Damage</th><td>15</td></tr>
              <tr><th scope="row">Execution threshold</th><td>Below 30 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>2 minutes 10 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <p>Six Lurkers spawn on the map by default. More may spawn as the player count increases. Each variant has a prioritized spawn location.</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats spawn-table">
            <thead><tr><th scope="col">Variant</th><th scope="col">Prioritized spawn location</th></tr></thead>
            <tbody>
              <tr><td>Engineer</td><td>Near Sector 1 entrance</td></tr>
              <tr><td>Welder</td><td>Near Sector 1 entrance</td></tr>
              <tr><td>RSU</td><td>Sector 1, near Generator 2</td></tr>
              <tr><td>MMS</td><td>Center of Sector 1</td></tr>
              <tr><td>HPCA</td><td>Sector 2, near Library and Resting rooms</td></tr>
              <tr><td>RIF OZK</td><td>Sector 3, in Subsector-1</td></tr>
            </tbody>
          </table>
        </div>
        <p>Lurkers take 2 minutes and 10 seconds to respawn after death.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <p>Lurkers punch their target, dealing 15 damage per hit with a 1-second cooldown and short attack range.</p>
        <p>If a Lurker hits a player below 30 HP, it attempts an execution. There is a 50% chance that a save animation plays instead: the player fights back and kicks the Lurker away, becomes infected, and is healed to 15 HP. The Lurker cannot attack for 3 seconds afterward.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Rage</h3>
        <p>Near a Viral Leader, a Lurker becomes enraged: its eyes turn red and it screams constantly. Its damage drops to 10, attack cooldown to 0.6 seconds, and chase speed increases to 30 studs/s. It also gains the Maul ability.</p>
        <h4>Maul</h4>
        <p>After landing four punches, the Lurker mauls the next player it hits. The special animation makes the Lurker completely invincible. The player loses 45 HP and becomes Marked. Marked players turn into a Viral on death even if they were not infected. Maul cannot reduce a player's HP below 1.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Enraged Lurker — plays on loop while the Lurker is enraged.</p>
        <audio class="enemy-audio" controls preload="none" src="${mediaFileUrl("Enraged_Lurker.mp3")}">
          Your browser does not support audio playback.
        </audio>
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${mediaFileUrl(animation.file)}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Lurkers are the “standard” variant of those affected by the WE-30 pathogen. Their durability and strength are nearly identical to a healthy human, but their awareness and intelligence are significantly impaired, making them predictable as they always take direct paths to their prey.</p>
        <p>Given enough lifetime, Lurkers have the potential to mutate into other variants of the pathogen.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <p>Early in Examination's development, Lurkers could grab both of a player's arms and hold them in place for other infected to attack. The code was considered too complicated, so the feature was scrapped; Virals were given the Maul ability instead.</p>
        <p>This may have been inspired by the grab ability of Shamblers from Guts &amp; Blackpowder.</p>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderCrawlerDetail(enemy) {
  const galleryImage = "https://examination.miraheze.org/wiki/Special:FilePath/Mutant_Crawler.png";
  const galleryPage = "https://examination.miraheze.org/wiki/File:Mutant_Crawler.png";
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Crawler</h2>
          <p>“Poor things and poor people who broke their legs trying to escape fate. They're always a breath away from their lungs collapsing. I'd say so when my flesh is constantly gliding through cement.”</p>
          <p><strong>Crawlers</strong> are a rare type of <a href="https://examination.miraheze.org/wiki/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> in Examination. They have fast movement speed and attack rate, however their damage and health are very low.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn Location</th><td><a href="https://examination.miraheze.org/wiki/Reactor_4" target="_blank" rel="noopener noreferrer">Reactor 4</a></td></tr>
              <tr><th scope="row">Health points</th><td>50</td></tr>
              <tr><th scope="row">Regeneration</th><td>0.5 HP/s</td></tr>
              <tr><th scope="row">Default speed</th><td>5</td></tr>
              <tr><th scope="row">Pursuit speed</th><td>23</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Jaws</td></tr>
              <tr><th scope="row">Damage</th><td>8</td></tr>
              <tr><th scope="row">Respawn time</th><td>40 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>A total of 2 Crawlers spawn inside Reactor 4, closer to the ladder to the basement. After death, a Crawler takes 40 seconds to respawn.</p>
        <h4>Behavior</h4>
        <p>A Crawler wanders around the map at 5 studs/s until it spots a target. Once a target is in sight, it chases at 23 studs/s. If the target stays out of sight for more than 10 seconds, the Crawler starts wandering around the map again.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <p>A Crawler bites its target, dealing 8 damage per hit with a 0.6-second cooldown and short attack range.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger Immunity:</strong> Crawlers are not stunned by gunshots.</li>
          <li><strong>Taser Resistance:</strong> Stun from the <a href="https://examination.miraheze.org/wiki/TASC-10" target="_blank" rel="noopener noreferrer">TASC-10</a> lasts only 3.5 seconds.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <figure class="enemy-variant">
          <button class="enemy-variant-image" type="button" data-image-src="${galleryImage}" aria-label="View Crawler image">
            <img src="${galleryImage}" alt="Crawler" loading="lazy" />
          </button>
          <figcaption><a href="${galleryPage}" target="_blank" rel="noopener noreferrer">Mutant Crawler</a></figcaption>
        </figure>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Crawlers are workers of the power plant who broke or lost their legs while attempting to escape the infected, in the end also becoming infected with the <a href="https://examination.miraheze.org/wiki/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a>. Due to being near the reactor, they have been heavily malformed by the radiation.</p>
        <p>Due to the loss of their legs, they are extremely fragile and easy to kill.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>Crawler has the lowest respawn time out of all enemies in the game.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderGrabbyDetail(enemy) {
  const galleryImages = [
    { name: "Idle Grabby", file: "Grabby_Placeholder.png" },
    { name: "Idle Grabby 2", file: "Grabby_Idle.png" },
  ];
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Grabby</h2>
          <p><strong>Grabby</strong> is a unique <a href="https://examination.miraheze.org/wiki/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> type in Examination. They are stationary and rely on catching the player off-guard to instantly kill them.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn Location</th><td><a href="https://examination.miraheze.org/wiki/Reactor_4" target="_blank" rel="noopener noreferrer">Reactor 4</a></td></tr>
              <tr><th scope="row">Health points</th><td>2000</td></tr>
              <tr><th scope="row">Regeneration</th><td>None</td></tr>
              <tr><th scope="row">Walk speed</th><td>0</td></tr>
              <tr><th scope="row">Run speed</th><td>0</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Claws</td></tr>
              <tr><th scope="row">Execution</th><td>QTE Failure</td></tr>
              <tr><th scope="row">Respawn time</th><td>30 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>A total of 4 Grabby Mutants spawn throughout Reactor 4. They take about 30 seconds to respawn after death.</p>
        <h4>Behavior</h4>
        <p>Grabby is completely stationary and waits until a player passes by.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <h4>Grab</h4>
        <p>When a player is about 3 studs in front of Grabby, it grabs and locks the player in place.</p>
        <p>The player must pass a quick-time event consisting of one random key, with about a 2-second margin. If the player succeeds, they escape the grab and Grabby dies. If the player fails, Grabby instantly kills them.</p>
        <p>The player can be saved without passing the QTE if Grabby is killed during the 2-second margin.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger Immunity:</strong> Grabbies are not stunned by gunshots.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <div class="enemy-variant-grid">
          ${galleryImages.map((image) => {
            const source = `https://examination.miraheze.org/wiki/Special:FilePath/${image.file}`;
            const page = `https://examination.miraheze.org/wiki/File:${image.file}`;
            return `
              <figure class="enemy-variant">
                <button class="enemy-variant-image" type="button" data-image-src="${source}" aria-label="View ${image.name}">
                  <img src="${source}" alt="${image.name}" loading="lazy" />
                </button>
                <figcaption><a href="${page}" target="_blank" rel="noopener noreferrer">${image.name}</a></figcaption>
              </figure>
            `;
          }).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Similar to normal <a href="https://examination.miraheze.org/wiki/Mutant" target="_blank" rel="noopener noreferrer">Mutants</a>, Grabby Mutants are workers and engineers of the power plant who were trapped and infected with the <a href="https://examination.miraheze.org/wiki/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a> in the area of <a href="https://examination.miraheze.org/wiki/Reactor_4" target="_blank" rel="noopener noreferrer">Reactor 4</a>. However, they were caught in debris and subsequently merged with the flesh walls of the area.</p>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderBarnaclesDetail(enemy) {
  const animations = [
    { name: "Alerted Barnacles", source: mediaFileUrl("Barnacles_Alerted.mp4") },
    { name: "Barnacles death animation", source: mediaFileUrl("Barnacles_Death.mp4") },
    { name: "Barnacles execution animation", source: "assets/Barnacles_Execution.mp4" },
  ];
  const alertedSound = "https://static.wikitide.net/examinationwiki/b/bf/Barnacles_Alerted.mp3";
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Barnacles</h2>
          <p><strong>Barnacles</strong> are a unique <a href="https://examination.miraheze.org/wiki/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> type in Examination. Similarly to the <a href="https://examination.miraheze.org/wiki/Grabby" target="_blank" rel="noopener noreferrer">Grabby</a>, they are stationary, however they pose a much bigger threat.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn Location</th><td><a href="https://examination.miraheze.org/wiki/Reactor_4#Infested_Basement" target="_blank" rel="noopener noreferrer">Reactor 4 Infested Basement</a></td></tr>
              <tr><th scope="row">Health points</th><td>2</td></tr>
              <tr><th scope="row">Regeneration</th><td>None</td></tr>
              <tr><th scope="row">Walk speed</th><td>None</td></tr>
              <tr><th scope="row">Run speed</th><td>None</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Claws</td></tr>
              <tr><th scope="row">Execution</th><td>On contact</td></tr>
              <tr><th scope="row">Respawn time</th><td>8 minutes 30 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>A total of 4 Barnacles spawn in Reactor 4's <a href="https://examination.miraheze.org/wiki/Reactor_4#Infested_Basement" target="_blank" rel="noopener noreferrer">Infested Basement</a>. They take 8 minutes and 30 seconds to respawn after death.</p>
        <h4>Behavior</h4>
        <p>Barnacles are completely stationary. When a player is nearby, they become alerted: their eyes glow and they stretch their arms toward the player. They return to idle after the player moves away.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <h4>Execution</h4>
        <p>Upon making physical contact with a player, Barnacles perform an execution on them.</p>
        <h4>Flammability</h4>
        <p>Barnacles are immune to all damage sources except the <a href="https://examination.miraheze.org/wiki/SHC-23" target="_blank" rel="noopener noreferrer">SHC-23</a>. They always die after two SHC-23 hits: the first visually burns the Barnacle, while the second kills it with a special animation.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger Immunity:</strong> Barnacles are not stunned by gunshots.</li>
          <li>Barnacles can only be damaged by the <a href="https://examination.miraheze.org/wiki/SHC-23" target="_blank" rel="noopener noreferrer">SHC-23</a>.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Alerted Barnacles — plays on loop when Barnacles are alerted.</p>
        <audio class="enemy-audio" controls loop preload="none" src="${alertedSound}">
          Your browser does not support audio playback.
        </audio>
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${animation.source}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>TBA</p>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderRiserDetail(enemy) {
  const variantImages = [
    { name: "HPCA 1", image: "https://static.wikitide.net/examinationwiki/8/8b/HPCA_Riser.png" },
    { name: "HPCA 2", image: "https://static.wikitide.net/examinationwiki/e/e6/HPCA_Riser_2.png" },
    { name: "MFD", image: "https://static.wikitide.net/examinationwiki/d/dc/MFD_Riser.png" },
    { name: "RIF", image: "https://static.wikitide.net/examinationwiki/2/2f/RIF_Riser.png" },
    { name: "RIF OZK", image: "https://static.wikitide.net/examinationwiki/8/86/OZK_Riser.png" },
  ];
  const animations = [
    { name: "Execution animation", file: "Riser_execution.mp4" },
    { name: "Save animation", file: "Riser_save.mp4" },
    { name: "Stomp execution", file: "Riser_stomp.mp4" },
    { name: "Dodge animation", file: "Riser_dodge_2.mp4" },
    { name: "Roll animation", file: "Riser_Roll.mp4" },
    { name: "Fake death animation", file: "Riser_Fake_death.mp4" },
  ];
  const sector1 = `${examinationWiki}/Sector_1`;
  const sector2 = `${examinationWiki}/Sector_2`;
  const sector3 = `${examinationWiki}/Sector_3`;
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Riser</h2>
          <p>“Well they're always the usually stubborn people you'd know. Now reduced to stubborn things. They have some good sense of self preservation, probably cause the virus didn't hit their brain well, or not done yet.”</p>
          <p><strong>Riser</strong> is one of the most common types of <a href="${examinationWiki}/Enemies" target="_blank" rel="noopener noreferrer">Enemies</a> in Examination. They are fast, have decent damage and health, and can dodge incoming attacks or trick new players with a fake death.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Riser image">
                <img src="${variant.image}" alt="${variant.name} Riser" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn locations</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a>, <a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a>, and <a href="${sector3}" target="_blank" rel="noopener noreferrer">Sector 3</a></td></tr>
              <tr><th scope="row">Health points</th><td>400</td></tr>
              <tr><th scope="row">Regeneration</th><td>4 HP/s (MFD, RIF); none (HPCA, OZK)</td></tr>
              <tr><th scope="row">Walk speed</th><td>9 studs/s</td></tr>
              <tr><th scope="row">Run speed</th><td>20 studs/s</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Fists</td></tr>
              <tr><th scope="row">Damage</th><td>17</td></tr>
              <tr><th scope="row">Execution</th><td>Against players below 34 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>5 minutes 10 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>Five Risers spawn on the map by default, with more appearing as the server's player count increases. Their prioritized locations are:</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats spawn-table">
            <thead><tr><th scope="col">Variant</th><th scope="col">Spawn location</th></tr></thead>
            <tbody>
              <tr><th scope="row">HPCA 1</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a>, near Generator 2</td></tr>
              <tr><th scope="row">HPCA 2</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a>, near <a href="${sector2}" target="_blank" rel="noopener noreferrer">Sector 2</a>'s emergency exit</td></tr>
              <tr><th scope="row">MFD</th><td><a href="${sector1}" target="_blank" rel="noopener noreferrer">Sector 1</a>, near Sector 2's emergency exit</td></tr>
              <tr><th scope="row">RIF</th><td><a href="${sector3}" target="_blank" rel="noopener noreferrer">Sector 3</a>, in Subsector-3</td></tr>
              <tr><th scope="row">RIF OZK</th><td><a href="${sector3}" target="_blank" rel="noopener noreferrer">Sector 3</a>, in Subsector-1</td></tr>
            </tbody>
          </table>
        </div>
        <p>A Riser takes 5 minutes and 10 seconds to respawn after death.</p>
        <h4>Behavior</h4>
        <p>Risers wander at 9 studs/s until they spot a target, then chase at 20 studs/s. If the target stays out of sight for more than 10 seconds, a Riser returns to wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attacks and abilities</h3>
        <h4>Attacks</h4>
        <p>A Riser punches its target for 17 damage per hit, with a 0.7-second cooldown and short range. It executes players below 34 HP. There is a 50% chance that a save animation plays instead: the player fights back and kicks the Riser away, is left with 15 HP, and the Riser cannot attack for 3 seconds.</p>
        <h4>Protection</h4>
        <p>When hit, a Riser has a chance to dodge. The 0.5-second dodge animation immobilizes it and makes it immune to damage. After dodging, it can roll to the side when hit; rolling immobilizes it but does not grant damage immunity.</p>
        <h4>Fake death</h4>
        <p>The first time its health reaches 150 or below, a Riser falls to the floor with a high-pitched scream and becomes immune to damage. After about 2 seconds, it gets up with a roar and resumes normal behavior; it can be damaged during the rising animation. While it is down, a player can interact with the prompt on its head to execute it.</p>
        <p>High single-hit damage that would kill it outright, or enough damage dealt during a roll, can bypass fake death. It can activate only once per life.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger Immunity:</strong> Risers are not stunned by gunshots.</li>
          <li><strong>Fire Resistance:</strong> The MFD variant takes one fewer tick of burn damage from the <a href="${examinationWiki}/SHC-23" target="_blank" rel="noopener noreferrer">SHC-23</a>.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Riser idle — plays on loop, except for HPCA 2.</p>
        <audio class="enemy-audio" controls loop preload="none" src="https://static.wikitide.net/examinationwiki/6/63/Riser_Idle.mp3">
          Your browser does not support audio playback.
        </audio>
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${mediaFileUrl(animation.file)}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Risers are a variant of the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a>'s <a href="${examinationWiki}/Fury" target="_blank" rel="noopener noreferrer">Fury</a> emotional mutation. The pathogen has not fully affected their bodies, allowing them to retain a sense of self-preservation and react to gunfire by dodging. They can take boxing stances, but lack the intelligence for complex interactions with objects.</p>
        <p>Like Furies, they are full of hatred and rush down their prey to beat them to a pulp. When suffering major organ failure and nearing death, their bodies rapidly dump adrenaline, keeping them alive for a few more seconds.</p>
        <p>Given enough time, some Risers may mutate further into variants such as Dreadnoughts.</p>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderMutantDetail(enemy) {
  const variantImages = [
    { name: "Engineer", image: "https://static.wikitide.net/examinationwiki/a/aa/Engineer_Mutant.png" },
    { name: "HPCA", image: "https://static.wikitide.net/examinationwiki/0/08/HPCA_Mutant.png" },
    { name: "HPCA 2", image: "https://static.wikitide.net/examinationwiki/8/85/HPCA_2_Mutant.png" },
    { name: "HPCA 3", image: "https://static.wikitide.net/examinationwiki/c/cf/HPCA_3_Mutant.png" },
    { name: "RSU", image: "https://static.wikitide.net/examinationwiki/c/cf/RSU_Mutant.png" },
    { name: "RSU 2", image: "https://static.wikitide.net/examinationwiki/6/6a/RSU_2_Mutant.png" },
    { name: "MFD", image: "https://static.wikitide.net/examinationwiki/d/d9/MFD_Mutant.png" },
    { name: "MNPA", image: "https://static.wikitide.net/examinationwiki/4/44/MNPA_Mutant.png" },
  ];
  const animations = [
    { name: "Execution animation 1", file: "Mutant_Execution_1.mp4" },
    { name: "Execution animation 2", file: "Mutant_Execution_2.mp4" },
    { name: "Execution animation 3", file: "Mutant_Execution_3.mp4" },
  ];
  const archiveImages = [
    { name: "Old model", file: "Mutant.png" },
    { name: "Removed block ability", file: "Mutant_Blocking.png" },
  ];
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Mutant</h2>
          <p>“Grotesque, aren't they? Get used to it, as long as you're alive down there, it won't matter much. This virus likes to actively participate with radioactive rays.”</p>
          <p><strong>Mutant</strong> is a common type of <a href="https://examination.miraheze.org/wiki/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> in Examination. They have average speed and low damage, but a fast attack rate. They are dangerous in groups.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variations</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Mutant image">
                <img src="${variant.image}" alt="${variant.name} Mutant" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn Location</th><td><a href="https://examination.miraheze.org/wiki/Reactor_4" target="_blank" rel="noopener noreferrer">Reactor 4</a></td></tr>
              <tr><th scope="row">Health points</th><td>330</td></tr>
              <tr><th scope="row">Regeneration</th><td>3.3 HP/s</td></tr>
              <tr><th scope="row">Walk speed</th><td>8</td></tr>
              <tr><th scope="row">Run speed</th><td>18</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Claws</td></tr>
              <tr><th scope="row">Damage</th><td>13</td></tr>
              <tr><th scope="row">Execution</th><td>&lt;28 HP</td></tr>
              <tr><th scope="row">Respawn time</th><td>5 minutes</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>Eight Mutants spawn in multiple areas throughout Reactor 4. Mutants take 5 minutes to respawn after death.</p>
        <h4>Movement</h4>
        <p>Mutants wander around the map at 8 studs/s until they spot a target. Once a target is in sight, they chase at 18 studs/s. If the target stays out of sight for more than 10 seconds, the Mutant returns to wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <p>Mutants slash their target with their claws, dealing 13 damage per hit with a 0.9-second cooldown and medium attack range.</p>
        <p>A Mutant performs an execution if it hits a player with less than 28 HP.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger Immunity:</strong> Mutants are not stunned by gunshots.</li>
          <li><strong>Taser Resistance:</strong> Stun from the <a href="https://examination.miraheze.org/wiki/TASC-10" target="_blank" rel="noopener noreferrer">TASC-10</a> lasts only 3.5 seconds, and the Mutant remains standing instead of falling.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Animation gallery</h3>
        <div class="animation-grid">
          ${animations.map((animation) => `
            <button class="animation-card" type="button" data-video-src="${mediaFileUrl(animation.file)}" aria-label="Play ${animation.name}">
              <span class="animation-play-icon" aria-hidden="true">▶</span>
              <span>${animation.name}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Archived gallery</h3>
        <div class="enemy-variant-grid">
          ${archiveImages.map((image) => {
            const source = mediaFileUrl(image.file);
            return `
              <figure class="enemy-variant">
                <button class="enemy-variant-image" type="button" data-image-src="${source}" aria-label="View ${image.name}">
                  <img src="${source}" alt="${image.name}" loading="lazy" />
                </button>
                <figcaption>${image.name}</figcaption>
              </figure>
            `;
          }).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Mutants are workers and engineers of the power plant who were trapped and infected with the <a href="https://examination.miraheze.org/wiki/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a> in <a href="https://examination.miraheze.org/wiki/Reactor_4" target="_blank" rel="noopener noreferrer">Reactor 4</a>. Radiation enhanced the effects of the pathogen, making them decently stronger than the normal strain.</p>
        <p>The radiation also significantly malformed them and stripped away their skin, leaving them as a fleshy mass with bones and claws.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>Mutants currently have more appearance variations than any other enemy in the game.</li>
          <li>In <a href="https://examination.miraheze.org/wiki/1.3.699" target="_blank" rel="noopener noreferrer">Patch 1.3699</a>, Mutants could block their head when shot. This ability was removed shortly afterward.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function renderKamikazeDetail(enemy) {
  const variantImages = [
    { name: "HPCA", image: "https://static.wikitide.net/examinationwiki/f/fd/HPCA_Kamikaze.png" },
    { name: "RSU", image: "https://static.wikitide.net/examinationwiki/6/64/RSU_Kamikaze.png" },
    { name: "RSU 2", image: "https://static.wikitide.net/examinationwiki/c/c3/RSU_Kamikaze_2.png" },
    { name: "OZK", image: "https://static.wikitide.net/examinationwiki/a/a9/OZK_Kamikaze.png" },
  ];
  const galleryImages = [
    { name: "Idle OZK Kamikaze", file: "OZK_Kamikaze_Idle.png" },
    { name: "Idle MGF MP Kamikaze", file: "MP_Kamikaze_Idle.png" },
    { name: "Removed variant render", file: "MGF_Kamikaze.png" },
  ];
  detailViewport.innerHTML = `
    <article class="enemy-detail">
      <header class="enemy-detail-hero">
        <img class="enemy-detail-portrait" src="${enemy.image}" alt="${enemy.name}" />
        <div>
          <p class="enemy-category-label">Regulars · Combat Archive</p>
          <h2>Kamikaze</h2>
          <p>“That's only the tip of the iceberg, there's more than one. The minute that pin gets pulled... outcome? Guy go boom.”</p>
          <p><strong>Kamikazes</strong> are an uncommon but dangerous type of <a href="${examinationWiki}/Enemies" target="_blank" rel="noopener noreferrer">Enemy</a> in Examination. Although relatively easy to kill, they can sprint quickly and deal high damage with their grenade.</p>
          <p>The facility's close quarters make them a serious threat: they can catch an inattentive player off guard and rush in to detonate.</p>
        </div>
      </header>

      <section class="enemy-info-section">
        <h3>Variants</h3>
        <div class="enemy-variant-grid">
          ${variantImages.map((variant) => `
            <figure class="enemy-variant">
              <button class="enemy-variant-image" type="button" data-image-src="${variant.image}" aria-label="View ${variant.name} Kamikaze image">
                <img src="${variant.image}" alt="${variant.name} Kamikaze" loading="lazy" />
              </button>
              <figcaption>${variant.name}</figcaption>
            </figure>
          `).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Health and stats</h3>
        <div class="enemy-table-wrap">
          <table class="enemy-stats">
            <tbody>
              <tr><th scope="row">Spawn locations</th><td><a href="${examinationWiki}/Sector_1" target="_blank" rel="noopener noreferrer">Sector 1</a>, <a href="${examinationWiki}/Sector_2" target="_blank" rel="noopener noreferrer">Sector 2</a>, and <a href="${examinationWiki}/Sector_3" target="_blank" rel="noopener noreferrer">Sector 3</a></td></tr>
              <tr><th scope="row">Health</th><td>50 HP</td></tr>
              <tr><th scope="row">Regeneration</th><td>0.5 HP/s</td></tr>
              <tr><th scope="row">Walk speed</th><td>9</td></tr>
              <tr><th scope="row">Run speed</th><td>28 (36 when enraged)</td></tr>
              <tr><th scope="row">Primary equipment</th><td>Grenade</td></tr>
              <tr><th scope="row">Damage</th><td>75 (99 when enraged)</td></tr>
              <tr><th scope="row">Respawn time</th><td>2 minutes 15 seconds</td></tr>
              <tr><th scope="row">Drop</th><td>None</td></tr>
              <tr><th scope="row">Gender</th><td>Male</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Behavior and spawns</h3>
        <h4>Spawn</h4>
        <p>A total of 4 Kamikazes spawn on the map. Each variant has a specific spawn location, and a Kamikaze takes 2 minutes and 15 seconds to respawn after death.</p>
        <div class="enemy-table-wrap">
          <table class="enemy-stats spawn-table">
            <thead><tr><th scope="col">Variant</th><th scope="col">Spawn location</th></tr></thead>
            <tbody>
              <tr><td>HPCA</td><td><a href="${examinationWiki}/Sector_1" target="_blank" rel="noopener noreferrer">Sector 1</a>, near <a href="${examinationWiki}/Sector_2" target="_blank" rel="noopener noreferrer">Sector 2</a>'s emergency exit</td></tr>
              <tr><td>RSU</td><td><a href="${examinationWiki}/Sector_1" target="_blank" rel="noopener noreferrer">Sector 1</a>, near <a href="${examinationWiki}/Sector_2" target="_blank" rel="noopener noreferrer">Sector 2</a>'s emergency exit</td></tr>
              <tr><td>RSU 2</td><td><a href="${examinationWiki}/Sector_2" target="_blank" rel="noopener noreferrer">Sector 2</a> Logistics</td></tr>
              <tr><td>OZK</td><td><a href="${examinationWiki}/Sector_3" target="_blank" rel="noopener noreferrer">Sector 3</a>, in Subsector-1</td></tr>
            </tbody>
          </table>
        </div>
        <h4>Behavior</h4>
        <p>A Kamikaze wanders at 9 studs/s until it spots a target, then chases at 28 studs/s. If the target stays out of sight for more than 10 seconds, it returns to wandering.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Abilities</h3>
        <h4>Attack</h4>
        <p>When alerted and near a living entity, a Kamikaze primes its grenade and charges the closest entity. It explodes near its target, dealing 75 damage within a radius of about 5 studs. Once primed, the grenade still explodes even if the Kamikaze is killed.</p>
        <p>The attack can target enemies or allies, though it will usually damage only one target.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Attributes</h3>
        <ul>
          <li><strong>Stagger Immunity:</strong> Kamikazes are not stunned by gunshots.</li>
          <li><strong>Execution Immunity:</strong> They cannot be executed, except with <a href="${examinationWiki}/Controllable_Infection#Viral_fists" target="_blank" rel="noopener noreferrer">Viral Fists</a>.</li>
          <li><strong>Taser Resistance:</strong> Stun from the <a href="${examinationWiki}/TASC-10" target="_blank" rel="noopener noreferrer">TASC-10</a> lasts only 3.5 seconds, and the Kamikaze remains standing.</li>
          <li><strong>Dreadnought:</strong> Kamikazes open doors as they walk up to them.</li>
        </ul>
      </section>

      <section class="enemy-info-section">
        <h3>Rage</h3>
        <p>Near a <a href="${examinationWiki}/Viral_Leader" target="_blank" rel="noopener noreferrer">Viral Leader</a>, a Kamikaze becomes enraged: its eyes turn red, its chase speed rises to 36 studs/s, and its grenade damage increases to 99.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Sounds</h3>
        <p>Kamikaze idle — plays while idle.</p>
        <audio class="enemy-audio" controls loop preload="none" src="https://static.wikitide.net/examinationwiki/2/25/Kamikaze_Idle_V2.mp3">
          Your browser does not support audio playback.
        </audio>
        <p>Kamikaze scream — plays while charging.</p>
        <audio class="enemy-audio" controls preload="none" src="https://static.wikitide.net/examinationwiki/a/a5/Kamikaze_Scream.mp3">
          Your browser does not support audio playback.
        </audio>
      </section>

      <section class="enemy-info-section">
        <h3>Gallery</h3>
        <div class="enemy-variant-grid">
          ${galleryImages.map((image) => {
            const source = `${examinationWiki}/Special:FilePath/${encodeURIComponent(image.file)}`;
            const page = `${examinationWiki}/File:${encodeURIComponent(image.file).replaceAll("%20", "_")}`;
            return `
              <figure class="enemy-variant">
                <button class="enemy-variant-image" type="button" data-image-src="${source}" aria-label="View ${image.name}">
                  <img src="${source}" alt="${image.name}" loading="lazy" />
                </button>
                <figcaption><a href="${page}" target="_blank" rel="noopener noreferrer">${image.name}</a></figcaption>
              </figure>
            `;
          }).join("")}
        </div>
      </section>

      <section class="enemy-info-section">
        <h3>Lore</h3>
        <p>Kamikazes are individuals infected with the <a href="${examinationWiki}/WE-30?action=edit&amp;redlink=1" target="_blank" rel="noopener noreferrer">WE-30 Pathogen</a>, likely alongside heavy radiation exposure. Their faces have been melted away, leaving exposed flesh. Their ability to use grenades and interact with objects indicates that they have undergone the Dreadnought mutation.</p>
        <p>Under the pathogen's agonizing influence, they disregard self-preservation and may try to kill their targets with a suicide bombing. Unlike normal Dreadnoughts, they are notably fragile and have no survival instinct.</p>
      </section>

      <section class="enemy-info-section">
        <h3>Trivia</h3>
        <ul>
          <li>A Kamikaze variant resembling the <a href="${examinationWiki}/Menlonian_Ground_Forces" target="_blank" rel="noopener noreferrer">Menlonian Ground Forces</a> military police was removed, likely because it did not fit the lore.</li>
          <li>Kamikazes had an execution animation in early development, but it was removed.</li>
        </ul>
      </section>
    </article>
  `;

  bindEnemyMedia();
}

function bindEnemyMedia() {
  detailViewport.querySelectorAll("[data-related-enemy-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const enemy = enemyCatalog
        .flatMap((section) => section.enemies.map((item) => ({
          ...item,
          category: section.label,
          id: getEnemyId(section, item),
        })))
        .find((item) => item.id === button.dataset.relatedEnemyId);
      if (!enemy) {
        console.error(`Unable to find related enemy data for ${button.dataset.relatedEnemyId}.`);
        return;
      }

      renderEnemyDetail(enemy);
    });
  });
  detailViewport.querySelectorAll("[data-video-src]").forEach((button) => {
    button.addEventListener("click", () => {
      openMediaVideo(button.dataset.videoSrc, button, button.hasAttribute("data-video-fullscreen"));
    });
  });
  detailViewport.querySelectorAll("[data-image-src]").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      openMediaImage(button.dataset.imageSrc, image.alt, button);
    });
  });
}

function openMediaVideo(source, trigger, fullscreenVideo = false) {
  activeMediaTrigger = trigger;
  window.clearTimeout(carouselTimer);
  mediaImage.hidden = true;
  mediaImage.removeAttribute("src");
  mediaPlayer.classList.remove("is-fading");
  mediaPlayer.hidden = false;
  mediaPlayer.controls = false;
  mediaPlayer.muted = false;
  mediaPlayer.volume = 1;
  mediaPlayer.src = source;
  mediaModal.hidden = false;
  mediaModal.focus();
  const fullscreenTarget = fullscreenVideo && typeof mediaPlayer.requestFullscreen === "function"
    ? mediaPlayer
    : mediaModal;
  if (typeof fullscreenTarget.requestFullscreen === "function") {
    fullscreenTarget.requestFullscreen().catch((error) => {
      console.info("Browser fullscreen is unavailable; using the full-page media viewer.", error);
    });
  }
  const playback = mediaPlayer.play();
  if (playback) {
    playback.catch((error) => {
      if (error.name === "NotAllowedError") {
        console.info("Gallery playback with sound is waiting for browser permission.");
      } else {
        console.error("Unable to play the selected enemy animation.", error);
      }
    });
  }
}

function openMediaImage(source, alt, trigger) {
  activeMediaTrigger = trigger;
  window.clearTimeout(carouselTimer);
  mediaPlayer.pause();
  mediaPlayer.removeAttribute("src");
  mediaPlayer.load();
  mediaPlayer.hidden = true;
  mediaImage.alt = alt;
  mediaImage.src = source;
  mediaImage.hidden = false;
  mediaModal.hidden = false;
  mediaModal.focus();
}

function closeMediaViewer() {
  if (document.fullscreenElement === mediaModal || document.fullscreenElement === mediaPlayer) {
    document.exitFullscreen().catch((error) => {
      console.error("Unable to exit the media viewer's fullscreen mode.", error);
    });
  }
  mediaModal.hidden = true;
  mediaPlayer.pause();
  mediaPlayer.removeAttribute("src");
  mediaPlayer.load();
  mediaPlayer.hidden = true;
  mediaImage.hidden = true;
  mediaImage.removeAttribute("src");
  mediaImage.alt = "";
  activeMediaTrigger?.focus();
  activeMediaTrigger = null;
  scheduleNextRender();
}

detailScreen.addEventListener("animationend", (event) => {
  if (event.target === detailScreen) detailScreen.classList.remove("is-entering");
});

backButton.addEventListener("click", () => {
  if (currentEnemyId) {
    currentEnemyId = null;
    detailTitle.textContent = "Enemies";
    enemyWikiLink.hidden = false;
    backButton.textContent = "Back";
    renderEnemyCatalog();
    detailViewport.scrollTop = enemyCatalogScrollTop;
    detailTitle.focus();
    return;
  }
  transitionTo(categoryScreen);
});

mediaModal.addEventListener("click", (event) => {
  if (event.target === mediaModal) closeMediaViewer();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mediaModal.hidden) closeMediaViewer();
});
document.addEventListener("fullscreenchange", () => {
  if (mediaModal.hidden) return;
  if (document.fullscreenElement !== mediaModal && document.fullscreenElement !== mediaPlayer) {
    closeMediaViewer();
  }
});

window.addEventListener("pointerdown", enableBackgroundMusic, { passive: true });
window.addEventListener("keydown", enableBackgroundMusic);
settingsMenuSummary.addEventListener("click", (event) => {
  event.preventDefault();
  if (settingsMenuIsAnimating) return;
  const isClosing = settingsMenu.open;
  settingsMenuIsAnimating = true;
  settingsPanelHasFinished = false;
  settingsGearHasFinished = false;

  if (settingsMenu.open) {
    const height = settingsControls.getBoundingClientRect().height;
    settingsControls.style.overflowY = "hidden";
    settingsControls.style.maxHeight = `${height}px`;
    settingsControls.style.opacity = "1";
    settingsControls.style.transform = "translateY(0)";
    void settingsControls.offsetHeight;
    window.requestAnimationFrame(() => {
      settingsMenu.classList.add("is-closing");
      settingsControls.style.maxHeight = "0px";
      settingsControls.style.opacity = "0";
      settingsControls.style.transform = "translateY(-24px)";
    });
  } else {
    settingsMenu.classList.remove("is-closing");
    settingsMenu.open = true;
    settingsControls.style.removeProperty("max-height");
    settingsControls.style.removeProperty("opacity");
    settingsControls.style.removeProperty("transform");
    settingsControls.style.removeProperty("overflow-y");
    const maxHeight = Math.min(settingsControls.scrollHeight, window.innerHeight * 0.58, 480);
    settingsControls.style.overflowY = "hidden";
    settingsControls.style.maxHeight = "0px";
    settingsControls.style.opacity = "0";
    settingsControls.style.transform = "translateY(-24px)";
    void settingsControls.offsetHeight;
    window.requestAnimationFrame(() => {
      settingsMenu.classList.add("is-opening");
      settingsControls.style.maxHeight = `${maxHeight}px`;
      settingsControls.style.opacity = "1";
      settingsControls.style.transform = "translateY(0)";
    });
  }

  settingsMenuTransitionTimer = window.setTimeout(
    () => finishSettingsMenuTransition(true),
    560,
  );
});
settingsControls.addEventListener("transitionend", (event) => {
  if (event.target === settingsControls && event.propertyName === "max-height") {
    settingsPanelHasFinished = true;
    finishSettingsMenuTransition();
  }
});
settingsMenu.querySelector(".settings-gear").addEventListener("animationend", (event) => {
  if (!["settings-gear-spin", "settings-gear-spin-reverse"].includes(event.animationName)) return;
  settingsGearHasFinished = true;
  finishSettingsMenuTransition();
});
mediaPlayer.addEventListener("pause", () => {
  if (mediaModal.hidden || mediaPlayer.ended || mediaPlayer.readyState === 0) return;
  const playback = mediaPlayer.play();
  if (playback) {
    playback.catch((error) => {
      if (error.name === "NotAllowedError") {
        console.info("Gallery playback is waiting for browser permission.");
      } else {
        console.error("Unable to resume the selected enemy animation.", error);
      }
    });
  }
});

mediaPlayer.addEventListener("loadeddata", () => {
  window.requestAnimationFrame(() => mediaPlayer.classList.remove("is-fading"));
});
mediaPlayer.addEventListener("ended", () => {
  mediaPlayer.classList.add("is-fading");
});

function syncBackgroundMusicWithForegroundMedia() {
  if (hasActiveForegroundMedia()) {
    if (backgroundMusicPlayerReady) backgroundMusicPlayer.pauseVideo();
  } else {
    enableBackgroundMusic();
  }
}

document.addEventListener("play", syncBackgroundMusicWithForegroundMedia, true);
for (const eventName of ["pause", "ended", "emptied", "error"]) {
  document.addEventListener(
    eventName,
    () => queueMicrotask(syncBackgroundMusicWithForegroundMedia),
    true,
  );
}

showcase.addEventListener("pointermove", (event) => {
  const interactive = event.target.closest(
    ".category-card, .enemy-card, .animation-card, .begin-button, .settings-menu summary, .settings-field select, .wiki-link",
  );
  if (!interactive || !showcase.contains(interactive)) return;
  const bounds = interactive.getBoundingClientRect();
  interactive.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
  interactive.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
});

loadSavedSettings();
applyVisualSettings();
monitorGraphicsPerformance();
updateFrameScale();
createBackgroundMusicPlayer();
showNextRender();
