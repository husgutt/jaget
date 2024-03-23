const toggleButton = document.getElementsByClassName("button-toggle-menu")[0];
const showButton = document.getElementsByClassName("hamburger")[0];
const menu = document.getElementsByClassName("menu")[0];

toggleButton.addEventListener("click", () => {
  menu.classList.toggle('hide-side-menu');
})

showButton.addEventListener("click", () => {
  menu.classList.toggle('hide-side-menu');
})
