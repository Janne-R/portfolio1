const hamburgerButton = document.querySelector(".hamburger-button");
const navUl = document.querySelector(".nav-ul");

hamburgerButton.addEventListener("click", () => {
  navUl.classList.toggle("show");

});