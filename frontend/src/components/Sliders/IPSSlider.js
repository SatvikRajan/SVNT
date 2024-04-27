import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ips1 from '../../images/Services/Sliders/ips1.png'
import ips2 from '../../images/Services/Sliders/ips2.png'
import ips3 from '../../images/Services/Sliders/ips3.png'

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
          <img style={{width:'100%'}} src={ips1} alt="" />
        </div>
        <div>
        <img style={{width:'100%'}} src={ips2} alt="" />
        </div>
        <div>
        <img style={{width:'100%'}} src={ips3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
