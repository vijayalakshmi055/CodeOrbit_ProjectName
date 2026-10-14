// 1. Select HTML elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// 2. Mobile navigation menu
menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// 3. Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// 4. Automatically update the footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// 5. Contact form submission
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  formStatus.textContent =
    "Thank you, " + name +
    "! Your form has been validated successfully. " +
    "This demo does not send emails yet.";

  contactForm.reset();
});
