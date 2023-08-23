import React, { useState } from "react";
import "../carousel.css";
import { imgSlider } from "../constants/index";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${imgSlider[currentImg].imgUrl})` }}
      >
        <div className="overlay">
          <div
            className="left"
            onClick={() => {
              currentImg > 0 && setCurrentImg(currentImg - 1);
            }}
          >
            <FiArrowLeftCircle style={{ fontSize: 30 }} />
          </div>
          <div
            className="right"
            onClick={() => {
              currentImg < imgSlider.length - 1 &&
                setCurrentImg(currentImg + 1);
            }}
          >
            <FiArrowRightCircle style={{ fontSize: 30 }} />
            <div>vvvvvvvvvvvv</div>
            <p>vvvvvvvvvvvfffffff</p>
          </div>
        </div>
      </div>
      Carousel
    </div>
  );
};

export default Carousel;
