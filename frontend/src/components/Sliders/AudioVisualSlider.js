import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import av1 from '../../images/Services/Sliders/av1.png'
import av2 from '../../images/Services/Sliders/av2.png'
import av3 from '../../images/Services/Sliders/av3.png'

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
    width: '35%', 
    margin: '0 auto' 
  };

  return (
    <div className="slider-container" style={sliderStyle}>
      <Slider {...settings}>
        <div>
          <img style={{width:'95%'}} src={av1} alt="" />
        </div>
        <div>
        <img style={{width:'95%'}} src={av2} alt="" />
        </div>
        <div>
        <img style={{width:'95%'}} src={av3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
