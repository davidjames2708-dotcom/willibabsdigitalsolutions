const header = document.querySelector(".site-header");
const toggle = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const solutionButtons = document.querySelectorAll("[data-solution]");
const solutionLabel = document.querySelector("[data-solution-label]");
const solutionTitle = document.querySelector("[data-solution-title]");
const solutionCopy = document.querySelector("[data-solution-copy]");
const solutionTime = document.querySelector("[data-solution-time]");
const solutionFit = document.querySelector("[data-solution-fit]");
const solutionProgress = document.querySelector("[data-solution-progress]");
const offerButtons = document.querySelectorAll("[data-offer-tab]");
const offerKicker = document.querySelector("[data-offer-kicker]");
const offerTitle = document.querySelector("[data-offer-title]");
const offerCopy = document.querySelector("[data-offer-copy]");
const offerPointOne = document.querySelector("[data-offer-point-one]");
const offerPointTwo = document.querySelector("[data-offer-point-two]");
const offerPointThree = document.querySelector("[data-offer-point-three]");
const revealItems = document.querySelectorAll(".section, .stats-strip");
const quoteLink = document.querySelector("[data-quote-link]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const firstField = document.querySelector("[data-first-field]");
const statsSection = document.querySelector(".who-stats");
const counters = document.querySelectorAll("[data-count-to]");
const portfolioButtons = document.querySelectorAll("[data-portfolio-tab]");
const portfolioItems = document.querySelectorAll("[data-portfolio-item]");

const solutions = {
  website: {
    label: "Website project",
    title: "Conversion-focused business website",
    copy: "Professional pages, strong service presentation, responsive design, and contact flow built to win client confidence.",
    time: "7-14d",
    fit: "Leads",
    progress: "86%",
  },
  software: {
    label: "Software project",
    title: "Custom dashboard or business system",
    copy: "Admin panels, client portals, transaction tools, and internal systems designed around your real workflow.",
    time: "3-8w",
    fit: "Scale",
    progress: "78%",
  },
  automation: {
    label: "AI automation",
    title: "Smart workflow and customer support automation",
    copy: "Lead capture, AI chat support, document processing, and repetitive task automation for faster operations.",
    time: "5-21d",
    fit: "Speed",
    progress: "90%",
  },
  research: {
    label: "Research and academic writing",
    title: "Publication-ready document support",
    copy: "Editing, proofreading, formatting, citations, journal preparation, and structured research document review.",
    time: "2-10d",
    fit: "Clarity",
    progress: "82%",
  },
};

const offers = {
  growth: {
    kicker: "Website strategy",
    title: "Attract clients with a website that explains your value quickly.",
    copy: "We structure your homepage, service sections, calls to action, contact flow, and mobile experience so visitors understand what you do and why they should reach out.",
    points: [
      "Clear homepage and service messaging",
      "Professional responsive layouts",
      "Contact paths built for conversion",
    ],
  },
  systems: {
    kicker: "Business systems",
    title: "Replace scattered manual work with one organized digital system.",
    copy: "We design dashboards, portals, and admin tools around the way your business already works, then make the workflow easier to manage.",
    points: [
      "Admin dashboards and customer portals",
      "Records, statuses, payments, and reports",
      "Built for future improvements",
    ],
  },
  automation: {
    kicker: "AI automation",
    title: "Use automation to respond faster and reduce repetitive tasks.",
    copy: "We connect forms, messages, documents, and AI tools so your business can capture leads, answer common questions, and process information faster.",
    points: [
      "Lead capture and follow-up flows",
      "AI chat and customer support tools",
      "Document and data processing",
    ],
  },
  research: {
    kicker: "Research and academic writing",
    title: "Prepare academic work with cleaner structure and presentation.",
    copy: "We support ethical editing, formatting, citation cleanup, journal preparation, and publication-readiness review for researchers and students.",
    points: [
      "Proofreading and academic editing",
      "Citation and reference formatting",
      "Journal submission preparation",
    ],
  },
};

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
}

function closeMenu() {
  if (!toggle || !menu) return;
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation menu");
  menu.classList.remove("is-open");
}

function openMenu() {
  if (!toggle || !menu) return;
  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-label", "Close navigation menu");
  menu.classList.add("is-open");
}

function updateActiveLink() {
  const page = window.location.pathname.replace(/\/$/, "") || "/";
  const hash = window.location.hash || "#home";
  const currentRoute = page
    .replace(/^\/index\.html$/, "/")
    .replace(/\.html$/, "");

  navLinks.forEach((link) => {
    const url = new URL(link.href);
    const linkPath = (url.pathname.replace(/\/$/, "") || "/")
      .replace(/^\/index\.html$/, "/")
      .replace(/\.html$/, "");
    const linkHash = url.hash || "#home";
    const isAbout = currentRoute === "/about" && linkPath === "/about";
    const isServices = currentRoute === "/services" && linkPath === "/services";
    const isPortfolio = (currentRoute === "/portfolio" || currentRoute === "/writing-samples") && linkPath === "/portfolio";
    const isContact = currentRoute === "/contact" && linkPath === "/contact";
    const isIndexSection = currentRoute === "/" && linkPath === "/" && linkHash === hash;

    link.classList.toggle("is-active", isAbout || isServices || isPortfolio || isContact || isIndexSection);
  });
}

function updateSolution(solutionKey) {
  const solution = solutions[solutionKey];
  if (!solution) return;

  const buttons = document.querySelectorAll("[data-solution]");
  const label = document.querySelector("[data-solution-label]");
  const title = document.querySelector("[data-solution-title]");
  const copy = document.querySelector("[data-solution-copy]");
  const time = document.querySelector("[data-solution-time]");
  const fit = document.querySelector("[data-solution-fit]");
  const progress = document.querySelector("[data-solution-progress]");

  buttons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.solution === solutionKey);
  });

  if (label) label.textContent = solution.label;
  if (title) title.textContent = solution.title;
  if (copy) copy.textContent = solution.copy;
  if (time) time.textContent = solution.time;
  if (fit) fit.textContent = solution.fit;
  if (progress) progress.style.width = solution.progress;
}

function updateOffer(offerKey) {
  const offer = offers[offerKey];
  if (!offer) return;

  offerButtons.forEach((button) => {
    const isActive = button.dataset.offerTab === offerKey;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", isActive.toString());
  });

  if (offerKicker) offerKicker.textContent = offer.kicker;
  if (offerTitle) offerTitle.textContent = offer.title;
  if (offerCopy) offerCopy.textContent = offer.copy;
  if (offerPointOne) offerPointOne.textContent = offer.points[0];
  if (offerPointTwo) offerPointTwo.textContent = offer.points[1];
  if (offerPointThree) offerPointThree.textContent = offer.points[2];
}

function animateCounter(counter) {
  const target = Number(counter.dataset.countTo || 0);
  const suffix = counter.dataset.countSuffix || "";
  const duration = 1200;
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);

    counter.textContent = `${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function animateStats() {
  if (!statsSection || statsSection.classList.contains("is-animated")) return;
  statsSection.classList.add("is-animated");
  counters.forEach(animateCounter);
}

toggle?.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

solutionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateSolution(button.dataset.solution);
  });
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-solution]");
  if (!button) return;

  updateSolution(button.dataset.solution);
});

offerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateOffer(button.dataset.offerTab);
  });
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-portfolio-tab]");
  if (!button) return;

  const category = button.dataset.portfolioTab;
  const buttons = document.querySelectorAll("[data-portfolio-tab]");
  const items = document.querySelectorAll("[data-portfolio-item]");

  buttons.forEach((item) => {
    const isActive = item === button;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", isActive.toString());
  });

  items.forEach((item) => {
    const shouldShow = category === "all" || item.dataset.category === category;
    item.classList.toggle("is-hidden", !shouldShow);
  });
});

quoteLink?.addEventListener("click", () => {
  window.setTimeout(() => {
    contactForm?.classList.add("is-highlighted");
    firstField?.focus({ preventScroll: true });

    window.setTimeout(() => {
      contactForm?.classList.remove("is-highlighted");
    }, 1800);
  }, 450);
});

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  if (formStatus) {
    formStatus.textContent = "Sending your project request...";
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton?.setAttribute("disabled", "true");

  try {
    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.message || "Email could not be sent. Please try again.");
    }

    contactForm.reset();
    if (formStatus) {
      formStatus.textContent = result.message || "Project request sent successfully.";
    }
  } catch (error) {
    if (formStatus) {
      formStatus.textContent = error.message || "Email could not be sent. Please try again.";
    }
  } finally {
    submitButton?.removeAttribute("disabled");
  }
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    revealObserver.observe(item);
  });

  if (statsSection) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    statsObserver.observe(statsSection);
  }
} else {
  animateStats();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("hashchange", updateActiveLink);
setHeaderState();
updateActiveLink();
updateSolution("website");
updateOffer("growth");
