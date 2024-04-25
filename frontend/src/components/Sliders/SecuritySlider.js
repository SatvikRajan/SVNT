import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sm1 from '../../images/Services/Sliders/sm1.png'
import sm2 from '../../images/Services/Sliders/sm2.png'
import sm3 from '../../images/Services/Sliders/sm3.png'

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
          <img style={{width:'100%'}} src={sm1} alt="" />
        </div>
        <div>
        <img style={{width:'100%'}} src={sm2} alt="" />
        </div>
        <div>
        <img style={{width:'100%'}} src={sm3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
