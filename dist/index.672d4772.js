const buttons = document.querySelector("[data-carousel-button]");
buttons.forEach((button, i)=>{
    button.addEventListener("click", ()=>{
        button.dataset.carouselButton;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    });
});

//# sourceMappingURL=index.672d4772.js.map
