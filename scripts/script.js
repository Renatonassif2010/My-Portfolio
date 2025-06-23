const themeSaved = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", themeSaved);

document.getElementById("theme-toggle").addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark"; // verify if the current theme is 'dark'

  document.documentElement.setAttribute("data-theme", newTheme); // set a new attribute
  localStorage.setItem("theme", newTheme);
});

