const menu = document.getElementById("mobile-menu");
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


const button = document.querySelector(".button");
const signUp = function(){
  window.location.href = "/signup.html"
}
button.addEventListener('click', signUp);

const contact = document.querySelector(".contactHref");
const sendToContact = () => {
  if (menu.classList.contains("is-active")){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
    window.location.href = "/home.html#contact"
  }
}
contact.addEventListener('click', sendToContact);
