import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ins1 from '../../images/Services/Sliders/ins1.webp'
import ins2 from '../../images/Services/Sliders/ins2.webp'
import ins3 from '../../images/Services/Sliders/ins3.webp'

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
          <img src={ins1} alt="" />
        </div>
        <div>
        <img src={ins2} alt="" />
        </div>
        <div>
        <img src={ins3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
