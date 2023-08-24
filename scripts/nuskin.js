const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.add('is-active');
  menuLinks.classList.add('active');
  body.classList.add('active');

  setTimeout(() => {
    menu.classList.remove('is-active');
  menuLinks.classList.remove('active');
  body.classList.remove('active');
  }, 2000);
};

menu.addEventListener('click', mobileMenu);