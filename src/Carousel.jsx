import happyBalloons from './Assets/madison-oren-uGP_6CAD-14-unsplash.jpg';
import doggieBday from './Assets/delaney-dawson-BXs8SjVelKs-unsplash.jpg';
import confettiGirl from './Assets/hugo-ruiz-e2pVrE1PYzs-unsplash.jpg';
function handleClick () {
    const buttons = document.querySelectorAll('[data-carousel-button]');
    buttons.forEach( button => {
        button.addEventListener('click', () => {
            const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
            const slides = button
            .closest('[data-carousel]')
            .querySelector('[data-slides]');
        
            const activeSlide = slides.querySelector('[data-activeSlide]');
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            if(newIndex < 0) newIndex = slides.children.length - 1;
            if(newIndex >= slides.children.length) newIndex = 0;
            slides.children[newIndex] = dataset.active = true;
            delete activeSlide.dataset.active
        })
    }) 
}

const Carousel = () => ( 
    <section aria-label="New Photos">
        {/* closest parent el that is a carousel and then enter slide container */}
        <div className="carousel" data-carousel>
            <button className="carousel-button prev" data-carousel-button="prev" onClick={handleClick}>&#8249;</button>
            <button className="carousel-button next" data-carousel-button="next">&#8250;</button>
           <h1>Happiness Carousel</h1>
           
            <ul data-slides>
                <li className="slide" data-active> 
                <img src={happyBalloons} alt="Festive Balloons"/>
                </li> 
                <li className="slide"> 
                <img src={doggieBday} alt="Doggie with Birthday Hat"/>
                </li> 
                <li className="slide"> 
                <img src={confettiGirl} alt="Girl Blowing Confetti"/>
                </li> 
            </ul> 
        </div>
    </section>
    )


export default Carousel;
