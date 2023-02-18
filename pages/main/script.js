const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu li");
const readMores = document.querySelectorAll(".read-more");
const testimonials = document.querySelectorAll(".testimonial-card");
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

// readMore.forEach((item, key) => {
//   item.addEventListener("click", () => {
//     testimonial.forEach((testimonial) => {
//       if (testimonial != item) {
//         testimonial[key].classList.remove("active");
//       }
//     });

//     // testimonial[key].classList.toggle("active");
//     if (more[key].classList.contains("active")) {
//       more[key].classList.remove("active");
//       less[key].classList.add("active");
//     } else {
//       more[key].classList.add("active");
//       less[key].classList.remove("active");
//     }
//   });
// });

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
