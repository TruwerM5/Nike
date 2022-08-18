let toggler = document.querySelector('[data-toggler]');
let nav = document.querySelector('[data-nav]');
let navLinks = document.querySelectorAll('[data-nav] a');


toggler.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('active');
})

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', (e) => {
        nav.classList.toggle('active');
    })
}