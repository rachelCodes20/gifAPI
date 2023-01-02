import ImageSlider from "./ImageSlider";
import { useState} from 'react'
// import happyBalloons from "./Assets/madison-oren-uGP_6CAD-14-unsplash.jpg";
// import doggieBday from "./Assets/delaney-dawson-BXs8SjVelKs-unsplash.jpg";
// import confettiGirl from "./Assets/hugo-ruiz-e2pVrE1PYzs-unsplash.jpg";
function handleClick() {
  

}

function Carousel ({ slides }) {
const [currentIndex, setCurrentUser] = useState(0);
const imageStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "10px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundImage: `url(${slides[currentIndex].url})`,
 
}

const sliderContainer = {
  height: "100%",
}

     return (
      <div >

      <h1>Happiness Carousel</h1>
           <div style={imageStyle}>
          </div>
      </div>
     )
};

export default Carousel;
