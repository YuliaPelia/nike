window.addEventListener("DOMContentLoaded", () => {
  const hampurger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header_adaptive-block");

  hampurger.addEventListener("click", () => {
    menu.classList.toggle("header_adaptive-block-active");
  });

  let offset = 0;
  let slideIndex = 1;

  const next = document.querySelector(".reviews_arrow-right");
  const prev = document.querySelector(".reviews_arrow-left");
  const sliderInner = document.querySelector(".reviews_slider-inner");
  const slides = document.querySelectorAll(".reviews_item");
  const slidesWrapper = document.querySelector(".reviews_list");
  const width = window.getComputedStyle(sliderInner).width;

  slidesWrapper.style.width = 100 * slides.length + "%";
  slides.forEach((slide) => {
    slide.style.width = width;
  });

  next.addEventListener("click", () => {
    if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    slidesWrapper.style.transform = `translateX(-${offset}px)`;

    if (slideIndex === slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
  });

  prev.addEventListener("click", () => {
    if (offset === 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
    slidesWrapper.style.transform = `translateX(-${offset}px)`;

    if (slideIndex === 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }
  });
});

// $(".reviews_list").slick(
//   prev.addEventListener("click", () => {
//     $(".reviews_list").slick("slickPrev");
//   }),

//   next.addEventListener("click", () => {
//     $(".reviews_list").slick("slickNext");
//   }),
//   { slidesToShow: 2 }
// );
