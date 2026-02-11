// StoneCraft Masonry - main.js

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const menuBtn = document.querySelector("[data-menu-btn]");
  const mobilePanel = document.querySelector("[data-mobile-panel]");

  if (menuBtn && mobilePanel) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobilePanel.style.display === "block";
      mobilePanel.style.display = isOpen ? "none" : "block";
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  // Active nav link highlighting based on page
  const path = window.location.pathname;
  let current = path.split("/").pop();

  // If you're on a folder URL like /StoneCraft-Masonry/, treat as index.html
  if (!current) current = "index.html";

  // Highlight matching nav link
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === current) a.classList.add("active");
  });

  // Simple contact form (demo)
  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks! Message sent (demo). Replace with real form backend later.");
      contactForm.reset();
    });
  }
});
