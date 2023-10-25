// Hamburger
let hamburger = document.querySelector('.hamburger')
        let navMenu = document.querySelector('.navMenu')

        hamburger.addEventListener('click', function() {
            this.classList.toggle('active')
            navMenu.classList.toggle('active')
        })

// Navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((navLink) => {
        navLink.classList.remove('nav-active');
        if (navLink.getAttribute('href').slice(1) === current) {
            navLink.classList.add('nav-active');
        }
    });
});
