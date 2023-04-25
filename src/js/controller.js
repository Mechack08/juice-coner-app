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
