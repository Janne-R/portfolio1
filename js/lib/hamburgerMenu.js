const hamburgerButton = document.querySelector(".button_hamburger");
const navUl = document.querySelector(".nav");

hamburgerButton.addEventListener("click", () => {
  navUl.classList.toggle("show");

});