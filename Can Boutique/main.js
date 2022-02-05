document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase'); 
ScrollReveal().reveal('.news-cars', { delay: 500}); 
ScrollReveal().reveal('.cards-banner-one', { delay: 500}); 
ScrollReveal().reveal('.cards-benner-two', { delay: 500}); 
