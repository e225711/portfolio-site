document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});
