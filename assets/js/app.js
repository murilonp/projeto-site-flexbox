const menuMobile = document.querySelector('.menu-mobile');
const navLinks = document.querySelector('.nav-links');

menuMobile.addEventListener('click', () => {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
});
