import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ss1 from '../../images/Services/Sliders/ss1.png'
import ss2 from '../../images/Services/Sliders/ss2.png'

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

  const sliderStyle = {
    width: '35%', 
    margin: '0 auto',
    float: 'right'
  };

  return (
    <div className="slider-images">
      <Slider {...settings}>
        <div>
          <img  src={ss1} alt="" />
        </div>
        <div>
        <img src={ss2} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
