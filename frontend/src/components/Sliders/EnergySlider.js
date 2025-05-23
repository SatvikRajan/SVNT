import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import es1 from '../../images/Services/Sliders/es1.webp'
import es3 from '../../images/Services/Sliders/es3.webp'

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
          <img src={es1} alt="" />
        </div>
        <div>
        <img src={es3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
