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
  };

  const sliderStyle = {
    width: '30%', 
    margin: '0 auto' 
  };

  return (
    <div className="slider-container" style={sliderStyle}>
      <Slider {...settings}>
        <div>
          <img style={{width:'100%'}} src={ss1} alt="" />
        </div>
        <div>
        <img style={{width:'100%'}} src={ss2} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
