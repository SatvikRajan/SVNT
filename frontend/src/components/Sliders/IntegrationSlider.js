import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import is2 from '../../images/Services/Sliders/is2.webp'
import ips2 from '../../images/Services/Sliders/ips2.webp'

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="slider-images">
      <Slider {...settings}>
        <div>
          <img src={is2} alt="" />
        </div>
        <div>
          <img src={ips2} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
