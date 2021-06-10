function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu_button", ".burger-menu_lines");
  let links = menu.find(".burger-menu_link");
  let overlay = menu.find(".burger-menu_overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu_active");

    if (menu.hasClass("burger-menu_active")) {
      $("body").css("overlow", "hidden");
    } else {
      $("body").css("overlow", "visible");
    }
  }
}

burgerMenu(".burger-menu");
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  allowSlideNext: false,
  allowSlidePrev: false,
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  centeredSlides: false,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    780: {
      slidesPerView: 3,
    },
    300: {
      slidesPerView: 1,
      allowSlideNext: true,
      allowSlidePrev: true,
      centeredSlides: true,
    },
  },
});
const swiper1 = new Swiper(".swiper-container1", {
  direction: "horizontal",
  allowSlideNext: false,
  allowSlidePrev: false,
  slidesPerView: 4,
  loop: true,
  spaceBetween: 25,
  centeredSlides: false,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 3,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
    425: {
      slidesPerView: 2,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
    300: {
      slidesPerView: 1,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
  },
});
const swiper2 = new Swiper(".swiper-container2", {
  direction: "horizontal",
  allowSlideNext: false,
  allowSlidePrev: false,
  slidesPerView: 4,
  loop: true,
  spaceBetween: 25,
  centeredSlides: false,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      centeredSlides: false,
      allowSlideNext: false,
      allowSlidePrev: false,
    },
    700: {
      slidesPerView: 2,
      allowSlideNext: true,
      allowSlidePrev: true,
      centeredSlides: true,
    },
    425: {
      slidesPerView: 1,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
    300: {
      slidesPerView: 1,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
  },
});
