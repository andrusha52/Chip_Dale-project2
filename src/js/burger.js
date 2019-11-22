'use strict';

const burger = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.section_nav__btn_burger_close');
const burgerMenu = document.querySelector('.hidden_mobile_menu');

const openMenu = e => {
    e.preventDefault();
    burger.style.display = "none";
    burgerMenu.classList.add('hidden_mobile_menu-active');
}

const closeMenu = e => {
    e.preventDefault();
    burger.style.display = "block";
    burgerMenu.classList.remove('hidden_mobile_menu-active');
}

burger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);