const buttons = document.querySelector("[data-carousel-button]");
console.log('activeSlide', buttons)
buttons.forEach( (button, i) => {
    button.addEventListener('click', () => {
        button.dataset.carouselButton === 'prev' ? 1 : -1;
        const slides = button.closest('[data-carousel]')

        .querySelector('[data-slides]');

        const activeSlide = document.querySelector('[data-activeSlide]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if(newIndex < 0) newIndex = slides.children.length - 1;
        if(newIndex >= slides.length) newIndex = 0;
        slides.children[newIndex] = dataset.active = true
})
    })  