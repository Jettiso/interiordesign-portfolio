let hamburger = document.getElementById('hamburger-1');
let mobNav = document.querySelector('.mobileNav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    mobNav.classList.toggle('showNav');
})