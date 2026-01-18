// script.js

// Scroll progress bar
window.onscroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
};

// Dark/Light mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Loader timeout
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.innerText = "Loading...";
  setTimeout(() => {
    loader.style.display = "none";
  }, 2500);
});

// Contact form submission behavior
const form = document.getElementById("contactForm");

form.addEventListener("submit", () => {
  alert("Your message has been sent successfully!");
});
