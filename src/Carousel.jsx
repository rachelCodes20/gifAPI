import happyBalloons from './Assets/madison-oren-uGP_6CAD-14-unsplash.jpg';
import doggieBday from './Assets/delaney-dawson-BXs8SjVelKs-unsplash.jpg';
import confettiGirl from './Assets/hugo-ruiz-e2pVrE1PYzs-unsplash.jpg';

const Carousel = () => (
    <section aria-label="New Photos">
        {/* closest parent el that is a carousel and then enter slide container */}
        <div className="carousel" data-carousel>
            <button className="carousel-button prev" data-carousel-button="prev">&#8249;</button>
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
