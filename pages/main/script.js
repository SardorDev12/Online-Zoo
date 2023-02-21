const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu li");
const readMores = document.querySelectorAll(".read-more");
const testimonials = document.querySelectorAll(".testimonial-card");
const slider = document.querySelector(".testimonial-cards");
const mores = document.querySelectorAll(".more");
const lesss = document.querySelectorAll(".less");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

testimonials.forEach((testimonial) => {
  const btn = testimonial.querySelector(".read-more");
  const more = testimonial.querySelector(".more");
  const less = testimonial.querySelector(".less");

  btn.addEventListener("click", () => {
    testimonial.classList.toggle("active");

    if (more.classList.contains("active")) {
      more.classList.remove("active");
      less.classList.add("active");
    } else {
      more.classList.add("active");
      less.classList.remove("active");
    }

    testimonials.forEach((item) => {
      if (item !== testimonial) {
        item.classList.remove("active");
        const more = item.querySelector(".more");
        const less = item.querySelector(".less");
        more.classList.add("active");
        less.classList.remove("active");
      }
    });
  });
});

// Testimonial slider
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) {
    return;
  }
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});
