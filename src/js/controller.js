"use strict";

import { menus } from "./data";

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
    threshold: 0.1,
  }
);
imgJuiceObeserver.observe(banner);

/* MENUS ANIMATION */
const menuSection = document.querySelector(".menu__section");
const menuContent = document.querySelector(".menu__bg--modal");

const menuSectionObserver = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    menuContent.classList.remove("hidden");

    observer.unobserve(menuSection);
  },
  {
    root: null,
    threshold: 0.1,
  }
);
menuSectionObserver.observe(menuSection);

/* LOAD MENUS */
const getHTMLIngredients = function (index) {
  const juiceArray = menus.filter((m) => m.id === index);

  return juiceArray[0].content
    .map((m) => {
      return `
  <li class="menu__ing--item">
    <i class="fa-solid fa-check"></i>
    <span>${m}</span>
  </li>
`;
    })
    .join("");
};

const getHtmlMarkup = function (juiceArray) {
  return juiceArray
    .map((juice, i) => {
      return `
      <div class="menu__content">
          <div class="menu__content--card menu__content--card-front">
            <h3 class="menu__name">${juice.name}</h3>
            <div class="img__container--menu">
              <img
                src="${juice.image}"
                alt=""
              />
            </div>
            <span class="menu__price">$${juice.price}</span>
          </div>
          <div class="menu__content--card menu__content--card-back">
            <h3 class="menu__name back">${juice.name}</h3>
            <ul class="menu__ing--list">
              ${getHTMLIngredients(i + 1)}            
            </ul>
            <span class="menu__price back">$${juice.price}</span>
            <button class="btn btn__delivery">Add</button>
          </div>
        </div>
      </div>
  `;
    })
    .join("");
};

const getNormalJuice = function () {
  return menus.filter((menu) => menu.category === "Normal");
};
const getCocktail = function () {
  return menus.filter((menu) => menu.category === "Cocktail");
};

// Get menu from data.js
const getDisplayMenu = function () {
  const normalContainer = document.querySelector(
    ".menu__container--wrapper--normal"
  );
  const cocktailContainer = document.querySelector(
    ".menu__container--wrapper-cocktail"
  );

  // normal juice
  const normalHTMLEL = getHtmlMarkup(getNormalJuice());

  // cocktail juice
  const cocktailHTMLEL = getHtmlMarkup(getCocktail());

  normalContainer.insertAdjacentHTML("beforeend", normalHTMLEL);
  cocktailContainer.insertAdjacentHTML("beforeend", cocktailHTMLEL);
};
getDisplayMenu();

// getHTMLIngredients(3);
