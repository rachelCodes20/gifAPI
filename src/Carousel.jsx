import ImageSlider from "./ImageSlider";
import { useState} from 'react'
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
      <div className="leftArrowStyle">{`<`}</div>
      <div className="rightArrowStyle">{`>`}</div>
           <div style={imageStyle}>
          </div>
      </div>
     )
};

export default Carousel;
