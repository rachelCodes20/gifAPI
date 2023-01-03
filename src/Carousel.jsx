import { useState } from "react";

function Carousel({ slides }) {
  const [currentIndex, setIndex] = useState(0);

  function toPrev() {
  const firstSlide = currentIndex === 0;
  const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
  setIndex(newIndex);
}

function toNext() {
  const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  setIndex(newIndex);
}

  const imageStyle = {
    width: "100%",
    height: "500px",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div>
      <h1>Happiness Carousel</h1>
      <div className="leftArrowStyle" onClick={toPrev}>{`<`}</div>
      <div className="rightArrowStyle" onClick={toNext}>{`>`}</div>
      <div style={imageStyle}></div>
    </div>
  );
}

export default Carousel;
