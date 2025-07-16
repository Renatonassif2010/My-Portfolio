// Theme
const themeSaved = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", themeSaved);

document.getElementById("theme-toggle").addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark"; // verify if the current theme is 'dark'

  document.documentElement.setAttribute("data-theme", newTheme); // set a new attribute
  localStorage.setItem("theme", newTheme);
});

// Burguer Menu

const burguer = document.getElementById("burguer-menu");

burguer.addEventListener("click", () => {
  const nav = document.querySelector(".header-nav");
  nav.classList.toggle("active");

  document.querySelectorAll(".link").forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});

// Contact

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const message = document.getElementById("message");
  const phoneNumber = "5511964388098";

  const text = `Olá meu nome é ${name.value}, ${message.value}`;
  const formatMessage = encodeURIComponent(text);

  const url = `
https://whatsa.me/${phoneNumber}/?t=${formatMessage}`;
  window.open(url, "_blank");

  name.value = "";
  message.value = "";
});
