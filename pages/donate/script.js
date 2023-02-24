const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu li");
const priceDots = document.querySelectorAll(".price-dot");
const input = document.querySelector(".donation-input input");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

priceDots.forEach((item) => {
  const dot = item.querySelector("span");
  const price = item.querySelector("p");

  price.addEventListener("click", updateInputPrice);

  dot.addEventListener("click", updateInputPrice);

  function updateInputPrice() {
    input.value = price.innerText.replace("$", "");
  }
});
