"use strict";

const projectNotes = {
  offline: {
    title: "Offline UPI",
    image: "/portfolio/projects/offlineupi.png",
    alt: "Digital Bharat Pay offline payment application homepage",
    description: "An offline-first payment project built around a React progressive web app and a Spring Boot backend. It explores SMS-based transaction communication through Twilio, AES encryption, and multilingual support so the payment flow can extend beyond an active internet connection.",
    tools: ["React PWA", "Spring Boot", "Twilio", "AES encryption", "Multilingual interface"],
    source: "https://github.com/Afnankazi/Offline-Upi",
  },
  heal: {
    title: "HeAl",
    image: "/portfolio/projects/heAl.png",
    alt: "HeAl wellness dashboard with mood tracking and journaling",
    description: "A full-stack wellness project combining mood tracking, journaling, personal goals, and community features. Its conversational AI uses a retrieval-augmented system connected through n8n workflows, with ElevenLabs providing voice responses. The interface is built with React and TypeScript.",
    tools: ["React", "TypeScript", "RAG", "n8n workflows", "ElevenLabs"],
    source: "https://github.com/Siddharth-The-Dragon-Slayer/Smurfs",
  },
  hushpad: {
    title: "HushPad",
    image: "/portfolio/projects/hushpad.png",
    alt: "HushPad private notes application homepage",
    description: "A privacy-focused notes application for keeping personal and professional information in one place. React and TypeScript power the frontend, while a Java and Spring Boot backend supports the application. The project brings together interface development and backend work around a familiar daily task: capturing a thought.",
    tools: ["React", "TypeScript", "Java", "Spring Boot"],
    source: "https://github.com/Afnankazi/Hushpad",
  },
  rail: {
    title: "VESITRail",
    image: "/portfolio/projects/home.png",
    alt: "VESITRail railway concession application interface",
    description: "A Next.js application for VESIT students to apply for and manage railway concession passes online. The project moves a paperwork-heavy student service into a web interface, bringing the application process and its status into one place.",
    tools: ["Next.js", "Student services", "Application management"],
    source: "https://github.com/VESITRail/VESITRail",
  },
};

const projectDialog = document.getElementById("project-dialog");
let projectTrigger = null;

document.querySelector(".skip-link").addEventListener("click", () => {
  const heading = document.getElementById("work-title");
  heading.tabIndex = -1;
  heading.focus({ preventScroll: true });
});

document.querySelectorAll("[data-project]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const project = projectNotes[trigger.dataset.project];
    if (!project) return;
    projectTrigger = trigger;
    document.getElementById("dialog-title").textContent = project.title;
    const image = document.getElementById("dialog-image");
    image.src = project.image;
    image.alt = project.alt;
    document.getElementById("dialog-description").textContent = project.description;
    document.getElementById("dialog-source").href = project.source;
    const tools = document.getElementById("dialog-tools");
    tools.replaceChildren(...project.tools.map((tool) => {
      const item = document.createElement("li");
      item.textContent = tool;
      return item;
    }));
    projectDialog.showModal();
    projectDialog.scrollTop = 0;
    document.documentElement.classList.add("project-open");
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", (event) => {
  const box = projectDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) {
    projectDialog.close();
  }
});
projectDialog.addEventListener("close", () => {
  document.documentElement.classList.remove("project-open");
  projectTrigger?.focus({ preventScroll: true });
});

document.getElementById("copy-email").addEventListener("click", async () => {
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText("afnanarifkazi2@gmail.com");
    status.textContent = "Email address copied";
  } catch {
    status.textContent = "Select the email address above to copy it.";
  }
});

document.getElementById("gl").addEventListener("webglcontextlost", (event) => {
  event.preventDefault();
  document.documentElement.classList.add("no-webgl");
  document.body.classList.remove("is-locked");
  document.getElementById("pre").classList.add("done");
  document.querySelectorAll("[data-rv], .mask-line").forEach((element) => element.classList.add("rv-in"));
});

const portfolioNav = document.getElementById("nav");
const menuButton = portfolioNav.querySelector(".nav-burger");
const portfolioMain = document.getElementById("top");
let menuWasOpen = false;
new MutationObserver(() => {
  const open = portfolioNav.classList.contains("menu-open");
  portfolioMain.inert = open;
  if (open && !menuWasOpen) {
    portfolioNav.querySelector(".nav-link").focus({ preventScroll: true });
  } else if (!open && menuWasOpen) {
    menuButton.focus({ preventScroll: true });
  }
  menuWasOpen = open;
}).observe(portfolioNav, { attributes: true, attributeFilter: ["class"] });

portfolioNav.addEventListener("keydown", (event) => {
  if (event.key !== "Tab" || !menuWasOpen) return;
  const items = [...portfolioNav.querySelectorAll(".nav-link"), menuButton];
  const first = items[0], last = items[items.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const toolMotion = matchMedia("(hover: hover) and (pointer: fine)");
const toolReducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
document.querySelectorAll(".tech-surface").forEach((surface) => {
  let pendingFrame = 0;
  surface.addEventListener("pointermove", (event) => {
    if (!toolMotion.matches || toolReducedMotion.matches) return;
    cancelAnimationFrame(pendingFrame);
    pendingFrame = requestAnimationFrame(() => {
      const bounds = surface.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
      surface.style.setProperty("--tool-rx", `${(0.5 - y) * 8}deg`);
      surface.style.setProperty("--tool-ry", `${(x - 0.5) * 8}deg`);
      surface.style.setProperty("--tool-x", `${x * 100}%`);
      surface.style.setProperty("--tool-y", `${y * 100}%`);
    });
  }, { passive: true });
  surface.addEventListener("pointerleave", () => {
    cancelAnimationFrame(pendingFrame);
    surface.style.setProperty("--tool-rx", "0deg");
    surface.style.setProperty("--tool-ry", "0deg");
  }, { passive: true });
});
