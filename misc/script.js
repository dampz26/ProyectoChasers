const toggleMenu = document.querySelector('.toggle-menu');
const navbarLinks = document.querySelector('.links-menu');


toggleMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


