const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // button.dataset.carouselButton === 'next' ? 1 : -1;
    // const slides = button
    // .closest('[data-carousel/hugo-ruiz-e2pVrE1PYzs-unsplash.6bb25e5b.jpg]')
    // .querySelector('[data-slides]');
    // const activeSlide = slides.querySelector('[data-activeSlide]');
    // let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    // if(newIndex < 0) newIndex = slides.children.length - 1;
    // if(newIndex >= slides.children.length) newIndex = 0;
    // slides.children[newIndex] = dataset.active = true;
    // delete activeSlide.dataset.active
    console.log("clicked");
  });
});

//# sourceMappingURL=index.672d4772.js.map
