"use strict";

const nav = document.querySelector("nav");

nav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("nav__item--link")) return;

  const menu = e.target.closest(".nav__item");

  menu.classList.add("active");
  document.querySelectorAll(".nav__item").forEach((el) => {
    if (menu !== el) el.style.filter = "blur(2px)";
  });
});

nav.addEventListener("mouseout", function (e) {
  if (!e.target.classList.contains("nav__item--link")) return;

  const menu = e.target.closest(".nav__item");

  menu.classList.remove("active");
  document.querySelectorAll(".nav__item").forEach((el) => {
    if (menu !== el) el.style.filter = "none";
  });
});

// BANNER IMAGES ANIMATIONS
const juiceImg = document.querySelector(".juice__img");
const strowImg = document.querySelector(".strow__img");
const bannerText = document.querySelector(".banner__welcome");
const banner = document.querySelector(".banner");

const imgJuiceObeserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    juiceImg.classList.remove("juice__img--hide");
    strowImg.classList.remove("strow__img--hide");
    bannerText.classList.remove("hide");

    observer.unobserve(banner);
  },
  {
    root: null,
    threshold: 0.5,
  }
);

imgJuiceObeserver.observe(banner);
