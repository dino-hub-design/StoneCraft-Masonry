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
  // Lightbox for gallery
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

if (lightbox && lightboxImg && closeBtn) {

  document.querySelectorAll(".gallery a.tile").forEach(tile => {
    tile.addEventListener("click", function(e){
      e.preventDefault();
      lightbox.classList.add("active");
      lightboxImg.src = this.getAttribute("href");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox){
      lightbox.classList.remove("active");
    }
  });
}

});
