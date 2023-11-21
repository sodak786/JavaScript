const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


const contact = document.querySelector(".contactHref");
const sendToContact = () => {
  if (menu.classList.contains("is-active")){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
    window.location.href = "/signup.html#contact"
  }
}
contact.addEventListener('click', sendToContact);