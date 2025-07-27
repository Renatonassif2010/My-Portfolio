const burguer = document.getElementById("burguer");
const sideBar = document.getElementById("side-bar");
const links = document.querySelectorAll(".link");

burguer.addEventListener("click", () => {
  sideBar.classList.add("active");

  document.getElementById("close").addEventListener("click", () => {
    sideBar.classList.remove("active");
  });

  links.forEach((item) => {
    item.addEventListener("click", () => {
      sideBar.classList.remove("active");
    });
  });

  document.addEventListener("keydown", (e) => {
    sideBar.classList.remove("active");
  });
});

const form = document.getElementById("contact");
const userName = document.getElementById("name");
const message = document.getElementById("textarea");
const msgDiv = document.querySelector(".msg-warn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    // verify the form
    if (userName.value === "" || message.value === "") {
      throw new Error("Please enter both your name and message.");
    } else {
      // phone number
      const phoneNumber = "5511964388098";

      // object
      const content = {
        name: userName.value,
        message: message.value,
      };

      // text and formay
      const text = `Olá, meu nome é ${content.name}.${content.message}`;
      const formatMessage = encodeURIComponent(text);

      const url = `https://whatsa.me/${phoneNumber}/?t=${formatMessage}`;

      // open url
      window.open(url, "_blank");

      // message
      msgDiv.classList.remove("error");
      msgDiv.innerHTML = "You have been redirected to my Whatsapp!";

      // clean input
      userName.value = "";
      message.value = "";
    }
  } catch (e) {
    // Error
    msgDiv.classList.add("error");
    msgDiv.innerHTML = e.message;
  }
});
