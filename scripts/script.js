const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("active");
  document.querySelector("header").classList.toggle("light");
});
