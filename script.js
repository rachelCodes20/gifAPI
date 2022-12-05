const buttons = document.querySelector("[data-carousel-button]");
buttons.forEach( (button, i) => {
    button.addEventListener('click', () => {
        button.dataset.carouselButton === 'prev' ? 1 : -1;
        const slides = button.closest("[data-carousel]")
        .querySelector('[data-slides]')
    })  
})