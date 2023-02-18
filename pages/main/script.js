const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu li");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
