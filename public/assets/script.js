const portfolioData = window.portfolioData;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const state = {
  lang: "id",
  projectFilter: "all",
};

let revealObserver;

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (typeof text === "string") {
    element.textContent = text;
  }

  return element;
}

function getUI() {
  return portfolioData.ui[state.lang];
}

function getCategoryLabel(category) {
  const map = {
    web: { id: "Web", en: "Web" },
    "machine-learning": { id: "Machine Learning", en: "Machine Learning" },
    analytics: { id: "Analytics", en: "Analytics" },
  };

  return map[category]?.[state.lang] ?? category;
}

function renderStaticText() {
  const ui = getUI();

  document.documentElement.lang = ui.lang;
  $("#nav-about").textContent = ui.nav.about;
  $("#nav-skills").textContent = ui.nav.skills;
  $("#nav-experience").textContent = ui.nav.experience;
  $("#nav-education").textContent = ui.nav.education;
  $("#nav-projects").textContent = ui.nav.projects;
  $("#nav-contact").textContent = ui.nav.contact;
  $("#hero-eyebrow").textContent = ui.heroEyebrow;
  $("#about-eyebrow").textContent = ui.aboutEyebrow;
  $("#about-heading").textContent = ui.aboutHeading;
  $("#skills-eyebrow").textContent = ui.skillsEyebrow;
  $("#skills-heading").textContent = ui.skillsHeading;
  $("#experience-eyebrow").textContent = ui.experienceEyebrow;
  $("#experience-heading").textContent = ui.experienceHeading;
  $("#education-eyebrow").textContent = ui.educationEyebrow;
  $("#education-heading").textContent = ui.educationHeading;
  $("#projects-eyebrow").textContent = ui.projectsEyebrow;
  $("#projects-heading").textContent = ui.projectsHeading;
  $("#projects-description").textContent = ui.projectsDescription;
  $("#project-filter-label").textContent = ui.projectFilterLabel;
  $("#contact-eyebrow").textContent = ui.contactEyebrow;
  $("#contact-heading").textContent = ui.contactHeading;
  $("#contact-summary").textContent = ui.contactSummary;
  $("#info-card-title").textContent = ui.infoTitle;
  $("#github-button-text").textContent = ui.githubButton;
  $("#linkedin-button-text").textContent = ui.linkedinButton;
  $("#hero-note-label").textContent = ui.noteLabel;
  $("#hero-note-title").textContent = ui.noteTitle;
  $("#hero-note-text").textContent = ui.noteText;
  $("#footer-text").textContent = ui.footer;
  $("#language-current-flag").textContent = ui.languageShort;
  $("#language-current-label").textContent = ui.languageLabel;
}

function renderHero() {
  const personal = portfolioData.personal;

  $("#hero-name").textContent = personal.name;
  $("#hero-role").textContent = personal.role[state.lang];
  $("#hero-summary").textContent = personal.summary[state.lang];
  $("#about-text").textContent = personal.about[state.lang];
  $("#profile-image").src = personal.image;
  $("#profile-image").alt = state.lang === "id" ? "Foto profil Muhammad Fajri" : "Muhammad Fajri profile photo";
  $("#profile-label").textContent = personal.currentLabel[state.lang];
  $("#profile-title").textContent = personal.currentTitle[state.lang];
  $("#profile-subtitle").textContent = personal.currentSubtitle[state.lang];
  $("#github-button").href = portfolioData.links.github;
  $("#linkedin-button").href = portfolioData.links.linkedin;

  const highlightRoot = $("#hero-highlights");
  const badgeRoot = $("#focus-badges");

  highlightRoot.innerHTML = "";
  badgeRoot.innerHTML = "";

  personal.highlights[state.lang].forEach((item) => {
    const card = createElement("article", "hero-highlight");
    card.setAttribute("data-reveal", "");
    card.append(createElement("span", "hero-highlight-dot"), createElement("p", "", item));
    highlightRoot.appendChild(card);
  });

  personal.focus[state.lang].forEach((item) => {
    badgeRoot.appendChild(createElement("span", "badge", item));
  });
}

function renderStats() {
  const root = $("#stats-grid");
  root.innerHTML = "";

  getUI().stats.forEach((item) => {
    const card = createElement("article", "stat-card");
    card.setAttribute("data-reveal", "");
    card.append(createElement("strong", "", item.value), createElement("span", "", item.label));
    root.appendChild(card);
  });
}

function renderQuickInfo() {
  const root = $("#info-list");
  root.innerHTML = "";

  portfolioData.quickInfo[state.lang].forEach((item) => {
    const wrapper = createElement("div", "info-item");
    wrapper.append(createElement("strong", "", item.title), createElement("span", "", item.value));
    root.appendChild(wrapper);
  });
}

function renderSkills() {
  const root = $("#skill-groups");
  root.innerHTML = "";

  portfolioData.skills[state.lang].forEach((group) => {
    const card = createElement("article", "skill-card");
    card.setAttribute("data-reveal", "");
    const list = createElement("div", "skill-list");

    group.items.forEach((item) => {
      list.appendChild(createElement("span", "skill-chip", item));
    });

    card.append(createElement("h3", "", group.title), list);
    root.appendChild(card);
  });
}

function renderExperiences() {
  const root = $("#experience-list");
  root.innerHTML = "";

  portfolioData.experiences[state.lang].forEach((item) => {
    const card = createElement("article", "timeline-item");
    card.setAttribute("data-reveal", "");
    const content = createElement("div", "timeline-content");
    const list = createElement("ul", "");

    item.highlights.forEach((highlight) => {
      list.appendChild(createElement("li", "", highlight));
    });

    content.append(
      createElement("p", "timeline-period", item.period),
      createElement("h3", "", item.role),
      createElement("p", "timeline-company", item.company),
      createElement("p", "", item.description),
      list
    );

    card.appendChild(content);
    root.appendChild(card);
  });
}

function renderEducation() {
  const root = $("#education-list");
  root.innerHTML = "";

  portfolioData.education[state.lang].forEach((item) => {
    const card = createElement("article", "education-card");
    card.setAttribute("data-reveal", "");
    card.append(
      createElement("p", "timeline-period", item.period),
      createElement("h3", "", item.title),
      createElement("p", "timeline-company", item.institution),
      createElement("p", "", item.description)
    );
    root.appendChild(card);
  });
}

function renderProjectFilters() {
  const root = $("#project-filters");
  root.innerHTML = "";

  getUI().projectFilters.forEach((filter) => {
    const button = createElement("button", "project-filter", filter.label);
    button.type = "button";
    button.dataset.filter = filter.value;
    button.classList.toggle("active", filter.value === state.projectFilter);
    button.addEventListener("click", () => {
      state.projectFilter = filter.value;
      renderProjects();
      renderProjectFilters();
      refreshRevealObserver();
    });
    root.appendChild(button);
  });
}

function renderProjects() {
  const root = $("#project-list");
  const ui = getUI();
  root.innerHTML = "";

  const projects = portfolioData.projects[state.lang].filter((item) => {
    return state.projectFilter === "all" || item.category === state.projectFilter;
  });

  projects.forEach((item) => {
    const card = createElement("article", "project-card");
    card.setAttribute("data-reveal", "");
    const top = createElement("div", "project-top");
    const actions = createElement("div", "project-actions");
    const metaRow = createElement("div", "project-meta-row");

    metaRow.append(
      createElement("p", "project-meta", item.stack),
      createElement("span", "project-category", getCategoryLabel(item.category))
    );

    top.append(
      metaRow,
      createElement("h3", "", item.name),
      createElement("p", "", item.description),
      createElement("p", "project-highlight", `${ui.projectLink}: ${item.highlight}`)
    );

    item.links.forEach((link) => {
      const action = createElement("a", "project-link", ui.projectActions[link.type]);
      action.href = link.href;
      action.target = "_blank";
      action.rel = "noreferrer";
      actions.appendChild(action);
    });

    card.append(top, actions);
    root.appendChild(card);
  });
}

function renderContacts() {
  const root = $("#contact-actions");
  root.innerHTML = "";

  portfolioData.contacts[state.lang].forEach((item) => {
    const link = createElement("a", "contact-link");
    link.href = item.href;

    if (item.href.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }

    link.append(createElement("span", "contact-link-label", item.label), createElement("span", "contact-link-value", item.value));
    root.appendChild(link);
  });
}

function updateLanguageMenuState() {
  const dropdown = $("#language-dropdown");
  const trigger = $("#language-trigger");
  const menu = $("#language-menu");

  dropdown.classList.remove("open");
  trigger.setAttribute("aria-expanded", "false");
  menu.hidden = true;

  $$(".language-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

function refreshRevealObserver() {
  if (revealObserver) {
    revealObserver.disconnect();
  }

  const revealItems = [...document.querySelectorAll("[data-reveal]")];

  revealItems.forEach((item, index) => {
    item.classList.remove("is-visible");
    item.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
  });

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

function attachHeroMotion() {
  const visual = $("#hero-visual");
  const profileCard = $("#profile-card");
  const note = $("#floating-note");

  visual.addEventListener("pointermove", (event) => {
    const bounds = visual.getBoundingClientRect();
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;

    profileCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    note.style.transform = `translate3d(${rotateY * 0.6}px, ${rotateX * -0.6}px, 0)`;
  });

  visual.addEventListener("pointerleave", () => {
    profileCard.style.transform = "";
    note.style.transform = "";
  });
}

function bindLanguageDropdown() {
  const dropdown = $("#language-dropdown");
  const trigger = $("#language-trigger");
  const menu = $("#language-menu");

  trigger.addEventListener("click", () => {
    const willOpen = !dropdown.classList.contains("open");
    dropdown.classList.toggle("open", willOpen);
    trigger.setAttribute("aria-expanded", String(willOpen));
    menu.hidden = !willOpen;
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    }
  });

  $$(".language-option").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.lang === state.lang) {
        updateLanguageMenuState();
        return;
      }

      state.lang = button.dataset.lang;
      renderPortfolio();
    });
  });
}

function bindActiveNavigation() {
  const sections = $$("main section[id]");
  const links = $$(".site-nav a");

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((section) => observer.observe(section));
}

function renderPortfolio() {
  renderStaticText();
  renderHero();
  renderStats();
  renderQuickInfo();
  renderSkills();
  renderExperiences();
  renderEducation();
  renderProjectFilters();
  renderProjects();
  renderContacts();
  updateLanguageMenuState();
  refreshRevealObserver();
}

function initPortfolio() {
  bindLanguageDropdown();
  bindActiveNavigation();
  attachHeroMotion();
  renderPortfolio();
}

initPortfolio();
