import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sm1 from '../../images/Services/Sliders/sm1.webp'
import sm2 from '../../images/Services/Sliders/sm2.webp'

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, 
    outline: false
  };


  return (
    <div className="slider-images">
      <Slider {...settings}>
        <div>
          <img src={sm1} alt="" />
        </div>
        <div>
        <img src={sm2} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
